# API Setup Guide for EternalArchive

This guide will help you configure the Google Gemini API key to enable all tools in the application.

## Prerequisites

- A Google account
- Access to Google AI Studio

## Step-by-Step Setup

### 1. Get Your Gemini API Key (FREE!)

1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Get API Key" or "Create API Key"
4. Create a new API key for your project
5. Copy the API key (save it securely!)

**Note**: Gemini API is completely FREE with generous usage limits, making it perfect for this application.

### 2. Configure Your Application

1. Open the `.env` file in the project root directory
2. Find the line that says:
   ```
   VITE_GEMINI_API_KEY=your_gemini_api_key_here
   ```
3. Replace `your_gemini_api_key_here` with your actual API key:
   ```
   VITE_GEMINI_API_KEY=AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXX
   ```

### 3. Restart Your Development Server

After adding your API key, the server will restart automatically.

## New Feature: File Upload Support

You can now upload files to ALL tools! Supported file types:

- **PDF** (.pdf) - Perfect for document analysis
- **Text** (.txt) - Plain text files
- **Word Documents** (.doc, .docx) - Microsoft Word files
- **Images** (.jpg, .jpeg, .png, .gif) - For image analysis
- **CSV** (.csv) - Spreadsheet data

### How to Use File Upload

1. Click any tool to open it
2. Use the "Upload Files" section at the top
3. Select one or multiple files
4. Add optional text instructions
5. Click "Process" to get AI-powered results

The AI will analyze your uploaded files along with any text you provide!

## What Works With the API

### With Gemini API Key (Required)
- **AI Tools** (11 tools): Text Summarizer, Chatbot, Code Assistant, Content Generator, Grammar Checker, Translator, Text-to-Speech, Sentiment Analyzer, Resume Optimizer, Screen Analyzer, Image Generator
- **Email Tools** (8 tools): Email Generator, Email Rewriter, Email Summarizer, Cold Email Generator, Smart Reply, Email Templates, Bulk Email Personalizer, Follow-Up Creator
- **PDF Tools** (13 tools): All PDF tools with AI-powered assistance for merging, splitting, compressing, converting, and more

### File Upload Examples

**Example 1: Resume Optimizer with PDF**
- Upload your resume PDF
- Add instruction: "Optimize for a software engineering role"
- Get detailed improvement suggestions

**Example 2: Document Summarizer**
- Upload a long PDF document
- The tool extracts and summarizes key points
- Works with multiple documents at once

**Example 3: Image Analysis**
- Upload screenshots or images
- Add context: "Analyze the UI design"
- Get detailed feedback

**Example 4: Email from Document**
- Upload a PDF report or data file
- Instruction: "Write an email summarizing this report"
- Get a professional email draft

## Security Best Practices

### ⚠️ Important Security Notes

1. **Never commit your API key to version control**
   - The `.env` file is already in `.gitignore`
   - Always keep your API keys private

2. **Monitor your usage**
   - Check your Google AI Studio dashboard
   - Gemini offers generous free tier limits

3. **For production deployment**
   - Consider using a backend server to proxy API calls
   - Never expose API keys in client-side code
   - Implement rate limiting and user authentication

## Pricing Information

**Gemini API is FREE!**
- Google provides generous free tier limits
- No credit card required to get started
- Perfect for personal projects and learning
- Check current limits at: [Google AI Pricing](https://ai.google.dev/pricing)

## Troubleshooting

### "Gemini API key not configured" Error

**Problem**: You see this error when trying to use any tool.

**Solution**:
1. Make sure you've added the API key to the `.env` file
2. Restart your development server
3. Clear your browser cache and reload the page

### "Failed to process request" Error

**Possible causes and solutions**:

1. **Invalid API key**: Double-check your API key is correct
2. **Rate limits**: You may be hitting API rate limits - wait a moment and try again
3. **Network issues**: Check your internet connection
4. **File too large**: Try smaller files or compress them first

### File Upload Not Working

1. **Supported formats**: Make sure your file is in a supported format (PDF, TXT, DOCX, Images, CSV)
2. **File size**: Very large files may take longer to process
3. **Multiple files**: You can upload multiple files at once - they'll all be processed together

### API Key Not Working

1. Verify the API key is valid in your Google AI Studio dashboard
2. Ensure there are no extra spaces before or after the key in `.env`
3. Make sure the key starts with `AIzaSy`
4. Restart your development server after making changes

## File Processing Capabilities

### Text Extraction
- **TXT files**: Direct text extraction
- **PDF files**: Shows file information (full text extraction requires additional setup)
- **DOCX files**: Shows file information (full text extraction requires additional setup)

### Image Processing
- **Images**: Converted to base64 for AI analysis
- **Supported formats**: JPG, JPEG, PNG, GIF

### Multiple Files
- Upload multiple files in one session
- Each file's content is combined for AI processing
- Perfect for comparing documents or analyzing batches

## Advanced Usage Tips

1. **Combine files and text**: Upload files AND add text instructions for better results
2. **Multiple document analysis**: Upload several files to compare or summarize
3. **Context matters**: Add clear instructions about what you want the AI to do
4. **Iterate**: Try different prompts with the same files to get different insights

## Alternative: Backend Proxy (Recommended for Production)

For production deployment, it's recommended to:

1. Create a backend server (Node.js, Python, etc.)
2. Store the API key securely on the server
3. Have your frontend make requests to your backend
4. Have your backend make requests to Gemini
5. Implement authentication and rate limiting

This approach:
- Keeps your API key secure
- Allows you to control usage
- Enables user authentication
- Prevents API key exposure in browser

## Need Help?

If you encounter issues:
1. Check the [Google AI Documentation](https://ai.google.dev/docs)
2. Review the [Gemini API Guide](https://ai.google.dev/tutorials/get_started_web)
3. Check the project's GitHub issues page

---

**Note**: This application now supports file uploads for all tools, making it incredibly versatile for document processing, analysis, and AI-powered workflows!
