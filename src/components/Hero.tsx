import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary-500/20 rounded-lg animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-secondary-500/20 rounded-full animate-float" style={{
          animationDelay: '1s'
        }}></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-accent-500/20 rounded-lg animate-float" style={{
          animationDelay: '2s'
        }}></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-primary-500/10 rounded-full animate-float" style={{
          animationDelay: '0.5s'
        }}></div>
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Content */}
        <div className="text-center lg:text-left animate-fade-in-up">
          <div className="mb-4">
            <span className="text-gray-400 text-lg">👋 Olá, o meu nome é</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">
            <span className="gradient-text">Katiane Ribeiro</span>
          </h1>
          
          <h2 className="text-2xl lg:text-3xl text-primary-400 mb-8 font-medium">
            Dev Frontend | UI/UX
          </h2>
          
          <p className="text-gray-300 text-lg mb-8 max-w-md mx-auto lg:mx-0">
            Transformo ideias em experiências digitais incríveis, criando interfaces modernas e funcionais.
          </p>
          
          <button 
            onClick={scrollToProjects} 
            className="group relative px-12 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg font-semibold text-white transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/25 hover:scale-105"
          >
            Conheça meu portfólio
            <ChevronDown className="inline-block ml-2 group-hover:translate-y-1 transition-transform duration-300" size={20} />
          </button>
        </div>

        {/* Right Side - Developer Illustration */}
        <div className="flex justify-center lg:justify-end animate-slide-in-right">
          <div className="relative">
            {/* Main Container - Aumentado proporcionalmente */}
            <div className="relative w-96 h-96 lg:w-[30rem] lg:h-[30rem] flex items-center justify-center">
              {/* Developer Image - Aumentada */}
              <div className="relative z-10 animate-float">
                <img 
                  src="/img/2823496 1.png"
                  alt="Developer illustration"
                  className="w-80 h-80 lg:w-96 lg:h-96 object-contain"
                />
              </div>
              
              {/* Floating Code Elements - Reposicionados proporcionalmente */}
              <div className="absolute top-6 left-10 bg-primary-500 text-white px-4 py-3 rounded-lg text-base font-mono animate-float opacity-90 shadow-lg">
                &lt;/&gt;
              </div>
              
              <div className="absolute top-16 right-6 bg-secondary-500 text-white px-4 py-3 rounded-lg text-base font-mono animate-float opacity-90 shadow-lg" style={{
                animationDelay: '0.5s'
              }}>
                CSS
              </div>
              
              <div className="absolute bottom-20 left-4 bg-accent-500 text-white px-4 py-3 rounded-lg text-base font-mono animate-float opacity-90 shadow-lg" style={{
                animationDelay: '1s'
              }}>
                HTML
              </div>
              
              <div className="absolute bottom-12 right-10 bg-primary-600 text-white px-4 py-3 rounded-lg text-base font-mono animate-float opacity-90 shadow-lg" style={{
                animationDelay: '1.5s'
              }}>
                JS
              </div>
              
              <div className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-secondary-600 text-white px-3 py-2 rounded text-sm font-mono animate-float opacity-80 shadow-lg" style={{
                animationDelay: '2s'
              }}>
                React
              </div>
              
              <div className="absolute top-1/3 right-0 bg-accent-600 text-white px-3 py-2 rounded text-sm font-mono animate-float opacity-80 shadow-lg" style={{
                animationDelay: '0.8s'
              }}>
                UI/UX
              </div>
              
              {/* Floating Geometric Elements - Aumentados */}
              <div className="absolute -top-6 -right-6 w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg animate-float opacity-60" style={{
                animationDelay: '0.3s'
              }}></div>
              
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-br from-accent-500 to-primary-500 rounded-full animate-float opacity-70" style={{
                animationDelay: '1.8s'
              }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
