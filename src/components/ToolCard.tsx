import { Tool } from '../types';

interface ToolCardProps {
  tool: Tool;
  onClick: () => void;
}

export default function ToolCard({ tool, onClick }: ToolCardProps) {
  const Icon = tool.icon;

  const categoryColors = {
    ai: 'from-blue-500/20 to-cyan-500/20 border-blue-500/30 hover:border-blue-500/50',
    pdf: 'from-red-500/20 to-orange-500/20 border-red-500/30 hover:border-red-500/50',
    email: 'from-green-500/20 to-emerald-500/20 border-green-500/30 hover:border-green-500/50'
  };

  const iconColors = {
    ai: 'text-blue-400',
    pdf: 'text-red-400',
    email: 'text-green-400'
  };

  return (
    <div
      onClick={onClick}
      className={`group relative bg-gradient-to-br ${categoryColors[tool.category]} border rounded-xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer backdrop-blur-sm`}
    >
      <div className="flex items-start space-x-4">
        <div className={`p-3 rounded-lg bg-gray-800/50 ${iconColors[tool.category]} group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-6 h-6" />
        </div>

        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-yellow-400 transition-colors duration-300">
            {tool.name}
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            {tool.description}
          </p>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-700/50">
        <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
          {tool.category} Tool
        </span>
      </div>
    </div>
  );
}
