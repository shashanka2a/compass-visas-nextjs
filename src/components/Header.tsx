import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-semibold text-sm">C</span>
            </div>
            <span className="text-xl font-semibold text-gray-900">Compass Visas</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-600 hover:text-gray-900 transition-colors">Home</a>
            <a href="#services" className="text-gray-600 hover:text-gray-900 transition-colors">Services</a>
            <a href="#process" className="text-gray-600 hover:text-gray-900 transition-colors">Process</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
          </nav>
          
          <Button 
            className="bg-[#2563EB] hover:bg-[#1d4ed8] text-white px-6 rounded-lg shadow-sm"
          >
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
}