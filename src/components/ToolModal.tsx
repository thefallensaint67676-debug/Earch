import { X, Loader2, Upload, FileText, X as XIcon } from 'lucide-react';
import { useState } from 'react';
import { Tool } from '../types';
import { processToolRequest } from '../services/aiService';
import { extractTextFromFile, formatFileSize } from '../utils/fileProcessing';

interface ToolModalProps {
  tool: Tool;
  onClose: () => void;
}

export default function ToolModal({ tool, onClose }: ToolModalProps) {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [fileContent, setFileContent] = useState('');

  const Icon = tool.icon;

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const filesArray = Array.from(files);
    setUploadedFiles(prev => [...prev, ...filesArray]);

    try {
      for (const file of filesArray) {
        const text = await extractTextFromFile(file);
        setFileContent(prev => prev + (prev ? '\n\n' : '') + `[File: ${file.name}]\n${text}`);
      }
    } catch (err) {
      setError('Failed to process file');
    }
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const combinedInput = fileContent
      ? `${fileContent}\n\n${input}`
      : input;

    if (!combinedInput.trim()) return;

    setLoading(true);
    setError('');
    setOutput('');

    try {
      const result = await processToolRequest(tool, combinedInput);
      setOutput(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred processing your request');
    } finally {
      setLoading(false);
    }
  };

  const getPlaceholder = () => {
    switch (tool.category) {
      case 'ai':
        if (tool.id === 'text-summarizer') return 'Paste your text here to summarize...';
        if (tool.id === 'chatbot') return 'Ask me anything...';
        if (tool.id === 'code-assistant') return 'Describe your coding problem or paste code...';
        if (tool.id === 'content-generator') return 'Describe what content you want to create...';
        if (tool.id === 'grammar-checker') return 'Paste text to check grammar and style...';
        if (tool.id === 'translator') return 'Enter text to translate...';
        if (tool.id === 'sentiment-analyzer') return 'Enter text to analyze sentiment...';
        if (tool.id === 'image-generator') return 'Describe the image you want to create...';
        return 'Enter your text here...';
      case 'pdf':
        return 'PDF processing: Upload your file or describe what you need...';
      case 'email':
        if (tool.id === 'email-generator') return 'Describe the email you need to write...';
        if (tool.id === 'email-rewriter') return 'Paste the email you want to improve...';
        if (tool.id === 'email-summarizer') return 'Paste the email or thread to summarize...';
        if (tool.id === 'cold-email') return 'Describe your outreach goal and recipient...';
        return 'Enter email content here...';
      default:
        return 'Enter your input here...';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-gray-900 border border-gray-800 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl animate-slideUp">
        <div className="flex items-center justify-between p-6 border-b border-gray-800">
          <div className="flex items-center space-x-4">
            <div className="p-3 rounded-lg bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 border border-yellow-500/30">
              <Icon className="w-6 h-6 text-yellow-500" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">{tool.name}</h2>
              <p className="text-sm text-gray-400 mt-1">{tool.description}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-800 transition-colors duration-200"
          >
            <X className="w-6 h-6 text-gray-400" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(90vh-180px)]">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Upload Files (Optional)
              </label>
              <div className="border-2 border-dashed border-gray-700 rounded-lg p-6 text-center hover:border-yellow-500/50 transition-colors duration-300 cursor-pointer">
                <input
                  type="file"
                  onChange={handleFileUpload}
                  multiple
                  accept=".pdf,.txt,.doc,.docx,.jpg,.jpeg,.png,.gif,.csv"
                  className="hidden"
                  id="file-upload"
                  disabled={loading}
                />
                <label htmlFor="file-upload" className="cursor-pointer">
                  <Upload className="w-10 h-10 text-gray-500 mx-auto mb-3" />
                  <p className="text-gray-300 font-medium mb-1">Click to upload files</p>
                  <p className="text-sm text-gray-500">
                    PDF, TXT, DOCX, Images, CSV (Multiple files supported)
                  </p>
                </label>
              </div>

              {uploadedFiles.length > 0 && (
                <div className="mt-4 space-y-2">
                  {uploadedFiles.map((file, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between bg-gray-800 border border-gray-700 rounded-lg p-3"
                    >
                      <div className="flex items-center space-x-3">
                        <FileText className="w-5 h-5 text-yellow-500" />
                        <div>
                          <p className="text-sm text-gray-200 font-medium">{file.name}</p>
                          <p className="text-xs text-gray-500">{formatFileSize(file.size)}</p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFile(index)}
                        className="p-1 hover:bg-gray-700 rounded transition-colors"
                      >
                        <XIcon className="w-4 h-4 text-gray-400" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Text Input {uploadedFiles.length > 0 && '(Optional - adds to file content)'}
              </label>
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={getPlaceholder()}
                className="w-full h-40 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent resize-none"
                disabled={loading}
              />
            </div>

            <button
              type="submit"
              disabled={loading || (!input.trim() && uploadedFiles.length === 0)}
              className="w-full py-3 px-6 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold rounded-lg hover:from-yellow-600 hover:to-yellow-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center space-x-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Processing...</span>
                </>
              ) : (
                <span>Process</span>
              )}
            </button>

            {error && (
              <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                <p className="text-red-400 text-sm">{error}</p>
              </div>
            )}

            {output && (
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Output
                </label>
                <div className="p-4 bg-gray-800 border border-gray-700 rounded-lg">
                  <pre className="text-white whitespace-pre-wrap text-sm leading-relaxed">
                    {output}
                  </pre>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    navigator.clipboard.writeText(output);
                  }}
                  className="mt-2 text-sm text-yellow-500 hover:text-yellow-400 transition-colors duration-200"
                >
                  Copy to clipboard
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
