import { Moon, Sun, Archive } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-gray-900/80 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <Archive className="w-8 h-8 text-yellow-500" />
            <span className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              EternalArchive
            </span>
          </div>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-300"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5 text-yellow-500" />
            ) : (
              <Moon className="w-5 h-5 text-gray-300" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
