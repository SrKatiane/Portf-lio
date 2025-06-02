import React from 'react';
import { Github, Linkedin, Mail, MessageCircle } from 'lucide-react';
const About = () => {
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
  return <section id="about" className="py-20 relative">
      <div className="container mx-auto px-14">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Photo and Info */}
          <div className="text-center lg:text-left">
            <div className="relative mb-8 flex justify-center lg:justify-start">
              <div className="w-64 h-64 relative">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 p-1 animate-pulse-glow">
                  <img src="public\img\fot.jpg" alt="Katiane Ribeiro" className="w-full h-full rounded-full object-cover" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center text-dark-900 font-bold text-xl animate-bounce">
                  💻
                </div>
              </div>
            </div>

            <h3 className="text-3xl font-bold mb-2 gradient-text">Katiane Ribeiro</h3>
            <p className="text-gray-400 mb-6">katianeribeiro.s@outlook.com.br</p>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-6 mb-8">
              {socialLinks.map((social, index) => <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className="w-12 h-12 glass-effect rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-500/20 transition-all duration-300 hover-scale" aria-label={social.label}>
                  <social.icon size={20} />
                </a>)}
            </div>

          </div>

          {/* Right Side - About Text */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl font-bold mb-8 gradient-text">Sobre mim</h2>
            </div>

            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Sou uma <span className="text-primary-400 font-semibold">desenvolvedora frontend iniciante,</span> altamente motivada e estou sempre disposta a enfrentar novos desafios e aprimorar minhas habilidades aprendendo novas tecnologias.
              </p>

              <p>
                Gosto de criar <span className="text-secondary-400 font-semibold">interfaces de usuário</span>, e de trabalhar em problemas desafiadores. Além disso, sou capaz de trabalhar eficazmente em equipe e comunicar claramente com outros membros do time.
              </p>

              <p>
                Possuo maior aptidão para área de <span className="text-accent-500 font-semibold">Frontend</span> Estou cursando <span className="text-primary-400 font-semibold">Análise e Desenvolvimento de Sistemas</span> pela Universidade Tiradentes, com previsão de graduação em dezembro de 2025. Durante o meu curso participei de vários projetos acadêmicos, que me permitiram ter contato com empresas e trabalhar em equipe.
              </p>

              <p>
                Estou sempre disposta a aprender e me adaptar a novas situações, fazendo com que eu seja uma <span className="text-secondary-400 font-semibold">desenvolvedora flexível e confiável</span> para qualquer projeto.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;