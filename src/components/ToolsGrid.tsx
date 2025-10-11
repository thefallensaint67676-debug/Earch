import ToolCard from './ToolCard';
import { tools } from '../data/tools';

interface ToolsGridProps {
  category: 'all' | 'ai' | 'pdf' | 'email';
}

export default function ToolsGrid({ category }: ToolsGridProps) {
  const filteredTools = category === 'all'
    ? tools
    : tools.filter(tool => tool.category === category);

  const categoryTitles = {
    all: 'All Tools',
    ai: 'AI Tools',
    pdf: 'PDF Tools',
    email: 'Email Tools'
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-8 text-center">
        <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
          {categoryTitles[category]}
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTools.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </div>
  );
}
