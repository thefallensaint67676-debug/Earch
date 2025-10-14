import { Tool } from '../types';

export type AIProvider = 'gemini' | 'openai' | 'anthropic';

interface AIConfig {
  provider: AIProvider;
  apiKey: string;
}

function getAIConfig(): AIConfig {
  const geminiKey = import.meta.env.VITE_GEMINI_API_KEY;
  const openaiKey = import.meta.env.VITE_OPENAI_API_KEY;
  const anthropicKey = import.meta.env.VITE_ANTHROPIC_API_KEY;

  if (geminiKey && geminiKey !== 'your_gemini_api_key_here') {
    return { provider: 'gemini', apiKey: geminiKey };
  }
  if (openaiKey && openaiKey !== 'your_openai_api_key_here') {
    return { provider: 'openai', apiKey: openaiKey };
  }
  if (anthropicKey && anthropicKey !== 'your_anthropic_api_key_here') {
    return { provider: 'anthropic', apiKey: anthropicKey };
  }

  throw new Error(
    'No AI API key configured. Please add one of the following to your .env file:\n' +
    '- VITE_GEMINI_API_KEY (Google Gemini - FREE)\n' +
    '- VITE_OPENAI_API_KEY (OpenAI GPT)\n' +
    '- VITE_ANTHROPIC_API_KEY (Anthropic Claude)\n\n' +
    'See API_SETUP.md for detailed instructions.'
  );
}

export async function processToolRequest(tool: Tool, input: string): Promise<string> {
  const config = getAIConfig();
  const prompt = buildPrompt(tool, input);

  switch (config.provider) {
    case 'gemini':
      return callGemini(prompt, config.apiKey);
    case 'openai':
      return callOpenAI(prompt, config.apiKey);
    case 'anthropic':
      return callAnthropic(prompt, config.apiKey);
    default:
      throw new Error('Invalid AI provider');
  }
}

async function callGemini(prompt: string, apiKey: string): Promise<string> {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`;

  try {
    const response = await fetch(url, {
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
      throw new Error(errorData.error?.message || `Gemini API request failed with status ${response.status}`);
    }

    const data = await response.json();

    if (!data.candidates || data.candidates.length === 0) {
      throw new Error('No response generated. Please try again.');
    }

    return data.candidates[0].content.parts[0].text;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('Failed to process request with Gemini API');
  }
}

async function callOpenAI(prompt: string, apiKey: string): Promise<string> {
  const url = 'https://api.openai.com/v1/chat/completions';

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'user', content: prompt }
        ],
        temperature: 0.7,
        max_tokens: 2048,
      })
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error?.message || `OpenAI API request failed with status ${response.status}`);
    }

    const data = await response.json();

    if (!data.choices || data.choices.length === 0) {
      throw new Error('No response generated. Please try again.');
    }

    return data.choices[0].message.content;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('Failed to process request with OpenAI API');
  }
}

async function callAnthropic(prompt: string, apiKey: string): Promise<string> {
  const url = 'https://api.anthropic.com/v1/messages';

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-3-haiku-20240307',
        max_tokens: 2048,
        messages: [
          { role: 'user', content: prompt }
        ],
      })
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error?.message || `Anthropic API request failed with status ${response.status}`);
    }

    const data = await response.json();

    if (!data.content || data.content.length === 0) {
      throw new Error('No response generated. Please try again.');
    }

    return data.content[0].text;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('Failed to process request with Anthropic API');
  }
}

function buildPrompt(tool: Tool, input: string): string {
  const prompts: Record<string, string> = {
    'text-summarizer': `Summarize the following text concisely while keeping the key points:\n\n${input}`,
    'chatbot': `You are a helpful AI assistant. Please respond to: ${input}`,
    'code-assistant': `You are a programming expert. Help with the following: ${input}`,
    'content-generator': `Generate creative content based on this description: ${input}`,
    'grammar-checker': `Check and correct the grammar, style, and clarity of this text. Provide the corrected version and explain the changes:\n\n${input}`,
    'translator': `Translate the following text. If it's in English, translate to Spanish. If it's in another language, translate to English:\n\n${input}`,
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

export function getConfiguredProvider(): string {
  try {
    const config = getAIConfig();
    const providerNames = {
      gemini: 'Google Gemini',
      openai: 'OpenAI GPT',
      anthropic: 'Anthropic Claude'
    };
    return providerNames[config.provider];
  } catch {
    return 'None';
  }
}
