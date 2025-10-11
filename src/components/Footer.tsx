import { Archive, Github, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900/50 backdrop-blur-sm border-t border-gray-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Archive className="w-8 h-8 text-yellow-500" />
              <span className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                EternalArchive
              </span>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Powerful suite of AI tools, PDF utilities, and email assistants for the modern web.
              Streamline your workflow with intelligent automation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors duration-300">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Tools</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors duration-300">AI Tools</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors duration-300">PDF Tools</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors duration-300">Email Tools</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors duration-300">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors duration-300">Privacy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors duration-300">Terms</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} EternalArchive. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
