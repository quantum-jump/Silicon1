import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, School } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'EVENTS', path: '/events' },
    { name: 'TEAM', path: '/team' },
    { name: 'BROCHURE', path: '/downloads' },
  ];

  // Handle scroll effect for cloudy glass navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-[#030014] text-white font-sans selection:bg-purple-500 selection:text-white flex flex-col overflow-x-hidden relative">
      
      {/* Global Faint Neon Purple Glowing Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-900/20 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-900/10 rounded-full blur-[150px]"></div>
        <div className="absolute top-[20%] left-[50%] -translate-x-1/2 w-[60%] h-[60%] bg-purple-800/5 rounded-full blur-[200px]"></div>
      </div>

      {/* Background Grid Pattern */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-grid-pattern bg-[size:30px_30px] opacity-[0.1]"></div>

      {/* Navbar */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'py-3 bg-[#050511]/40 backdrop-blur-md border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]' 
            : 'py-6 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src="/logo.svg" 
              alt="Silicon Vertical Logo" 
              className="w-12 h-12 object-contain drop-shadow-[0_0_8px_rgba(168,85,247,0.6)] group-hover:scale-105 transition-transform duration-300" 
            />
            <span className="font-display font-bold text-lg tracking-[0.2em] text-white uppercase drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
              Silicon Vertical
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative font-display text-[10px] font-bold tracking-[0.25em] transition-all duration-300 py-1 group uppercase ${
                  isActive(item.path)
                    ? 'text-white drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {item.name}
                {/* Glowing Underline */}
                <span className={`absolute -bottom-1 left-0 h-[1px] bg-purple-500 shadow-[0_0_8px_#a855f7] transition-all duration-300 ${
                  isActive(item.path) ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-50'
                }`} />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-purple-400 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#050511]/95 backdrop-blur-xl border-b border-purple-900/30 p-6 animate-fade-in z-50">
            <div className="flex flex-col space-y-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-display text-lg tracking-widest ${
                    isActive(item.path) ? 'text-purple-400' : 'text-slate-300'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="relative z-10 flex-grow pt-24 w-full">
        {children}
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 bg-[#02000d]/80 backdrop-blur-sm mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col items-center gap-8">
          
          <div className="flex gap-8">
             <a 
               href="#" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
             >
               <Instagram size={18} />
               <span className="font-display text-[10px] tracking-widest">INSTAGRAM</span>
             </a>
             <a 
               href="#" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
             >
               <School size={18} />
               <span className="font-display text-[10px] tracking-widest">PES UNIVERSITY</span>
             </a>
          </div>

          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-purple-900/50 to-transparent"></div>

          <div className="flex flex-col items-center gap-2">
            <div className="font-display font-bold text-lg text-white tracking-[0.2em] uppercase text-center">
              SILICON VERTICAL <span className="text-purple-500 mx-2">|</span> BUILT FOR THE FUTURE
            </div>
            <div className="text-slate-600 text-[9px] font-mono tracking-widest uppercase">
              © 2024 - 2026 ALL SYSTEMS OPERATIONAL
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};