import React from 'react';
import { Github, Linkedin, Mail, MessageCircle, Heart } from 'lucide-react';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [{
    icon: Github,
    href: 'https://github.com/SrKatiane',
    label: 'GitHub'
  }, {
    icon: Linkedin,
    href: 'https://linkedin.com/in/katianesribeiro',
    label: 'LinkedIn'
  }, {
    icon: Mail,
    href: 'mailto:katianeribeiro.s@outlook.com.br',
    label: 'Email'
  }];
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return <footer className="bg-dark-900/50 border-t border-gray-800 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left - Logo */}
          <div>
            <button onClick={scrollToTop} className="text-2xl font-bold gradient-text hover:scale-105 transition-transform duration-300">Katiane Ribeiro</button>
            <p className="text-gray-400 mt-2">Dev Frontend & UI/UX Designer</p>
          </div>

          {/* Center - Social Links */}
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className="w-12 h-12 glass-effect rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-500/20 transition-all duration-300 hover-scale" aria-label={social.label}>
                <social.icon size={20} />
              </a>)}
          </div>

          {/* Right - Contact */}
          <div className="text-center md:text-right">
            <p className="text-gray-400 mb-2">Entre em contato</p>
            <a href="mailto:evander@email.com" className="text-primary-400 hover:text-primary-300 transition-colors duration-300">katianeribeiro.s@outlook.com.br</a>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            © {currentYear} Katiane Ribeiro. Feito com
            <Heart size={16} className="mx-2 text-red-500 animate-pulse" />
            e muito café ☕
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;