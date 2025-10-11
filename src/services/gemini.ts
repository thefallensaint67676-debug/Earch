import { Tool } from '../types';

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';

export async function processToolRequest(tool: Tool, input: string): Promise<string> {
  if (!GEMINI_API_KEY) {
    throw new Error('Gemini API key not configured. Please add VITE_GEMINI_API_KEY to your .env file.');
  }

  const prompt = buildPrompt(tool, input);

  try {
    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: prompt
          }]
        }],
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 2048,
        }
      })
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error?.message || `API request failed with status ${response.status}`);
    }

    const data = await response.json();

    if (!data.candidates || data.candidates.length === 0) {
      throw new Error('No response generated. Please try again.');
    }

    const text = data.candidates[0].content.parts[0].text;
    return text;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('Failed to process request. Please check your connection and try again.');
  }
}

function buildPrompt(tool: Tool, input: string): string {
  const prompts: Record<string, string> = {
    'text-summarizer': `Summarize the following text concisely while keeping the key points:\n\n${input}`,
    'chatbot': `You are a helpful AI assistant. Please respond to: ${input}`,
    'code-assistant': `You are a programming expert. Help with the following: ${input}`,
    'content-generator': `Generate creative content based on this description: ${input}`,
    'grammar-checker': `Check and correct the grammar, style, and clarity of this text. Provide the corrected version and explain the changes:\n\n${input}`,
    'translator': `Translate the following text to English (or if already in English, translate to Spanish):\n\n${input}`,
    'text-to-speech': `Convert this text to a speech-friendly format with proper pronunciation guides:\n\n${input}`,
    'sentiment-analyzer': `Analyze the sentiment and emotional tone of this text. Provide a detailed analysis:\n\n${input}`,
    'resume-optimizer': `Review and optimize this resume content. Provide specific suggestions for improvement:\n\n${input}`,
    'screen-analyzer': `Analyze and describe the content provided:\n\n${input}`,
    'image-generator': `Create a detailed description for generating an image based on: ${input}`,
    'email-generator': `Write a professional email based on this description: ${input}`,
    'email-rewriter': `Rewrite this email to be more professional, clear, and effective:\n\n${input}`,
    'email-summarizer': `Summarize this email or email thread into key points:\n\n${input}`,
    'cold-email': `Write an effective cold outreach email based on: ${input}`,
    'smart-reply': `Generate 3 smart reply options for this email:\n\n${input}`,
    'email-templates': `Create an email template based on: ${input}`,
    'bulk-personalizer': `Create a personalized email template that can be customized with variables:\n\n${input}`,
    'follow-up': `Create a follow-up email sequence based on: ${input}`,
  };

  if (tool.category === 'pdf') {
    return `You are a PDF processing assistant. The user wants to ${tool.name.toLowerCase()}. Provide detailed instructions or guidance for: ${input}`;
  }

  return prompts[tool.id] || `Process the following request for ${tool.name}:\n\n${input}`;
}
