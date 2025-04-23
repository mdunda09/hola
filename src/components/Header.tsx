import React, { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Heart className="h-6 w-6 text-emerald-600 mr-2" />
          <span className="text-xl font-semibold">Mi Servicio Comunitario</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <button 
            onClick={() => scrollToSection('inicio')}
            className="text-stone-700 hover:text-emerald-600 transition-colors"
          >
            Inicio
          </button>
          <button 
            onClick={() => scrollToSection('fortalezas')}
            className="text-stone-700 hover:text-emerald-600 transition-colors"
          >
            Fortalezas
          </button>
          <button 
            onClick={() => scrollToSection('aportes')}
            className="text-stone-700 hover:text-emerald-600 transition-colors"
          >
            Aportes
          </button>
          <button 
            onClick={() => scrollToSection('objetivo')}
            className="text-stone-700 hover:text-emerald-600 transition-colors"
          >
            Objetivo
          </button>
          <button 
            onClick={() => scrollToSection('video')}
            className="text-stone-700 hover:text-emerald-600 transition-colors"
          >
            Video
          </button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-stone-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md absolute top-full left-0 w-full py-4 transition-all duration-300 ease-in-out">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-stone-700 hover:text-emerald-600 transition-colors py-2"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection('fortalezas')}
              className="text-stone-700 hover:text-emerald-600 transition-colors py-2"
            >
              Fortalezas
            </button>
            <button 
              onClick={() => scrollToSection('aportes')}
              className="text-stone-700 hover:text-emerald-600 transition-colors py-2"
            >
              Aportes
            </button>
            <button 
              onClick={() => scrollToSection('objetivo')}
              className="text-stone-700 hover:text-emerald-600 transition-colors py-2"
            >
              Objetivo
            </button>
            <button 
              onClick={() => scrollToSection('video')}
              className="text-stone-700 hover:text-emerald-600 transition-colors py-2"
            >
              Video
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;