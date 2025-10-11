import {
  MessageSquare,
  FileText,
  Code2,
  Sparkles,
  CheckCircle2,
  Languages,
  Volume2,
  BarChart3,
  FileCheck,
  ScanEye,
  ImagePlus,
  FilePlus,
  Scissors,
  Minimize2,
  RefreshCw,
  Lock,
  ArrowUpDown,
  RotateCw,
  Droplet,
  PenTool,
  Edit3,
  Type,
  Info,
  Mail,
  Pen,
  FileText as EmailSummary,
  Snowflake,
  Reply,
  Inbox,
  Users,
  Clock
} from 'lucide-react';

export const tools = [
  {
    id: 'text-summarizer',
    name: 'AI Text Summarizer',
    description: 'Condense long texts with customizable length and format options',
    icon: FileText,
    category: 'ai' as const
  },
  {
    id: 'chatbot',
    name: 'GPT-powered Chatbot',
    description: 'Interactive AI assistant for conversations on any topic',
    icon: MessageSquare,
    category: 'ai' as const
  },
  {
    id: 'code-assistant',
    name: 'Code Assistant',
    description: 'Programming help with multi-language support and debugging',
    icon: Code2,
    category: 'ai' as const
  },
  {
    id: 'content-generator',
    name: 'Content Generator',
    description: 'Create blogs, ads, captions, and product descriptions instantly',
    icon: Sparkles,
    category: 'ai' as const
  },
  {
    id: 'grammar-checker',
    name: 'Grammar & Style Checker',
    description: 'Advanced writing improvement with tone and clarity suggestions',
    icon: CheckCircle2,
    category: 'ai' as const
  },
  {
    id: 'translator',
    name: 'AI Translator',
    description: 'Multi-language translation with context and tone awareness',
    icon: Languages,
    category: 'ai' as const
  },
  {
    id: 'text-to-speech',
    name: 'Text-to-Speech',
    description: 'Convert text to natural speech with voice and speed controls',
    icon: Volume2,
    category: 'ai' as const
  },
  {
    id: 'sentiment-analyzer',
    name: 'Sentiment Analyzer',
    description: 'Analyze emotional tone and sentiment in text content',
    icon: BarChart3,
    category: 'ai' as const
  },
  {
    id: 'resume-optimizer',
    name: 'Resume Optimizer',
    description: 'AI-powered resume enhancement with ATS scoring',
    icon: FileCheck,
    category: 'ai' as const
  },
  {
    id: 'screen-analyzer',
    name: 'Screen/Text Analyzer',
    description: 'Analyze screenshots or text content with AI insights',
    icon: ScanEye,
    category: 'ai' as const
  },
  {
    id: 'image-generator',
    name: 'Image Generator',
    description: 'Create unique images from text descriptions using AI',
    icon: ImagePlus,
    category: 'ai' as const
  },
  {
    id: 'merge-pdf',
    name: 'Merge PDFs',
    description: 'Combine multiple PDF files into a single document',
    icon: FilePlus,
    category: 'pdf' as const
  },
  {
    id: 'split-pdf',
    name: 'Split PDFs',
    description: 'Extract pages or split documents into separate files',
    icon: Scissors,
    category: 'pdf' as const
  },
  {
    id: 'compress-pdf',
    name: 'Compress PDF',
    description: 'Reduce file size while maintaining document quality',
    icon: Minimize2,
    category: 'pdf' as const
  },
  {
    id: 'convert-pdf',
    name: 'Convert to/from PDF',
    description: 'Support for DOCX, PPT, JPG, PNG, and more formats',
    icon: RefreshCw,
    category: 'pdf' as const
  },
  {
    id: 'ocr-scanner',
    name: 'OCR Scanner',
    description: 'Extract text from scanned documents and images',
    icon: ScanEye,
    category: 'pdf' as const
  },
  {
    id: 'pdf-password',
    name: 'Password Add/Remove',
    description: 'Secure or unlock PDF documents with encryption',
    icon: Lock,
    category: 'pdf' as const
  },
  {
    id: 'page-reorder',
    name: 'Page Reordering',
    description: 'Rearrange, duplicate, or delete PDF pages easily',
    icon: ArrowUpDown,
    category: 'pdf' as const
  },
  {
    id: 'rotate-pages',
    name: 'Rotate Pages',
    description: 'Fix page orientation with 90/180/270 degree rotation',
    icon: RotateCw,
    category: 'pdf' as const
  },
  {
    id: 'add-watermark',
    name: 'Add Watermark',
    description: 'Brand protection with customizable text or image watermarks',
    icon: Droplet,
    category: 'pdf' as const
  },
  {
    id: 'pdf-annotator',
    name: 'PDF Annotator',
    description: 'Highlight, comment, and annotate PDF documents',
    icon: PenTool,
    category: 'pdf' as const
  },
  {
    id: 'fill-sign',
    name: 'Fill & Sign PDFs',
    description: 'Electronic form completion and digital signing',
    icon: Edit3,
    category: 'pdf' as const
  },
  {
    id: 'pdf-to-text',
    name: 'PDF to Text',
    description: 'Extract all text content from PDF documents',
    icon: Type,
    category: 'pdf' as const
  },
  {
    id: 'edit-metadata',
    name: 'Edit PDF Metadata',
    description: 'Modify document properties, author, and title information',
    icon: Info,
    category: 'pdf' as const
  },
  {
    id: 'email-generator',
    name: 'Email Generator',
    description: 'Create professional emails with AI assistance',
    icon: Mail,
    category: 'email' as const
  },
  {
    id: 'email-rewriter',
    name: 'Email Rewriter',
    description: 'Improve email clarity, tone, and professionalism',
    icon: Pen,
    category: 'email' as const
  },
  {
    id: 'email-summarizer',
    name: 'Email Summarizer',
    description: 'Condense long email threads into key points',
    icon: EmailSummary,
    category: 'email' as const
  },
  {
    id: 'cold-email',
    name: 'Cold Email Generator',
    description: 'Craft effective outreach emails for business development',
    icon: Snowflake,
    category: 'email' as const
  },
  {
    id: 'smart-reply',
    name: 'Smart Reply Suggestions',
    description: 'AI-powered quick response options for emails',
    icon: Reply,
    category: 'email' as const
  },
  {
    id: 'email-templates',
    name: 'Email Template Manager',
    description: 'Create and manage reusable email templates',
    icon: Inbox,
    category: 'email' as const
  },
  {
    id: 'bulk-personalizer',
    name: 'Bulk Email Personalizer',
    description: 'Mass email customization with CSV data import',
    icon: Users,
    category: 'email' as const
  },
  {
    id: 'follow-up',
    name: 'Follow-Up Email Creator',
    description: 'Generate timed follow-up sequences automatically',
    icon: Clock,
    category: 'email' as const
  }
];
