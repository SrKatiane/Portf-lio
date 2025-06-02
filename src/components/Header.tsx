import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };
  const menuItems = [{
    label: 'Home',
    id: 'home'
  }, {
    label: 'Sobre Mim',
    id: 'about'
  }, {
    label: 'Skills',
    id: 'skills'
  }, {
    label: 'Projetos',
    id: 'projects'
  }];
  return <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'glass-effect shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold gradient-text">KR</div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map(item => <button key={item.id} onClick={() => scrollToSection(item.id)} className="text-gray-300 hover:text-white transition-colors duration-300 relative group">
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
              </button>)}
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && <nav className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              {menuItems.map(item => <button key={item.id} onClick={() => scrollToSection(item.id)} className="text-gray-300 hover:text-white transition-colors duration-300 text-left">
                  {item.label}
                </button>)}
            </div>
          </nav>}
      </div>
    </header>;
};
export default Header;