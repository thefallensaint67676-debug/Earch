import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 relative">
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-yellow-500" />
            <span className="text-sm font-medium text-yellow-500">Powerful AI & PDF Toolkit</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Streamline Your Workflow
            </span>
            <br />
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              With Intelligent Tools
            </span>
          </h1>

          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            Access powerful AI assistants, comprehensive PDF utilities, and smart email tools all in one place.
            No sign-up required - start using tools instantly.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg px-6 py-3">
              <div className="text-2xl font-bold text-yellow-500">11</div>
              <div className="text-sm text-gray-400">AI Tools</div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg px-6 py-3">
              <div className="text-2xl font-bold text-yellow-500">13</div>
              <div className="text-sm text-gray-400">PDF Tools</div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg px-6 py-3">
              <div className="text-2xl font-bold text-yellow-500">8</div>
              <div className="text-sm text-gray-400">Email Tools</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
