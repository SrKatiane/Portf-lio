import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, X, Calendar, Code, Globe, Plus } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  createdAt: string;
  screenshots: string[];
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [filter, setFilter] = useState('TODOS');

  // useEffect para esconder a scrollbar
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .modal-scroll {
        scrollbar-width: none; /* Firefox */
        -ms-overflow-style: none; /* Internet Explorer 10+ */
      }
      .modal-scroll::-webkit-scrollbar {
        display: none; /* Safari and Chrome */
      }
    `;
    document.head.appendChild(style);
    
    // Cleanup: remove o style quando o componente é desmontado
    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  const projects: Project[] = [
    {
      id: 1,
      title: 'FALA CIDADÃO - APP DE DENÚNCIAS URBANAS',
      category: 'PROTÓTIPO',
      description: 'Aplicativo mobile que permite cidadãos reportarem problemas urbanos (como buracos em vias ou iluminação pública quebrada) através de um fluxo rápido e intuitivo.',
      fullDescription: 'Aplicativo mobile que permite cidadãos reportarem problemas urbanos (como buracos em vias ou iluminação pública quebrada) através de um fluxo rápido e intuitivo. O app foi desenvolvido como protótipo no Figma, focando na experiência do usuário e interface intuitiva.',
      technologies: ['Figma', 'UI/UX Design', 'Prototipagem'],
      image: '/img/falacidadao-foto1.png',
      createdAt: '24/11/2023',
      screenshots: [
        '/img/FC1.png',
        '/img/FC2.png',
        '/img/FC3.png',
        '/img/FC4.png',
        '/img/FC5.png',
        '/img/FC6.png',
        '/img/FC7.png',
        '/img/FC8.png',
        '/img/FC9.png',
        '/img/FC10.png',
        '/img/FC11.png',
        '/img/FC12.png'
      ]
    },
    {
      id: 2,
      title: 'QUERO RETRO',
      category: 'FRONTEND',
      description: 'Funcionalidade desenvolvida para o app Quero Delivery que gera relatórios anuais personalizados, destacando hábitos de',
      fullDescription: 'Funcionalidade desenvolvida para o app Quero Delivery que gera relatórios anuais personalizados, destacando hábitos de compra dos usuários (pratos favoritos, restaurantes mais visitados e ofertas exclusivas).',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'Figma'],
      image: '/img/jkJ7jt2edew.png',
      createdAt: '12/05/2024',
      screenshots: [
        '/img/Design sem nome (3).png',
        '/img/QR2.png',
        '/img/QR3.png',
        '/img/QR4.png',
        '/img/QR5.png',
        '/img/QR6.png',
        '/img/QR7.png',
        '/img/QR8.png',
        '/img/QR9.png',
        '/img/QR10.png'
      ]
    },
    {
      id: 3,
      title: 'SISTEMA DE TREINAMENTOS JOTANUNES',
      category: 'FRONTEND',
      description: 'Plataforma gamificada desenvolvida para a empresa Jotanunes com foco na capacitação interativa de seus colaboradores. Por meio de trilhas de aprendizagem com... ',
      fullDescription: 'Plataforma gamificada desenvolvida para a empresa Jotanunes com foco na capacitação interativa de seus colaboradores. Por meio de trilhas de aprendizagem com conteúdos técnicos e comportamentais, os funcionários avançam por módulos temáticos. O sistema oferece recompensas como moedas virtuais, pontuação e certificados para incentivar o engajamento.',
      technologies: ['React', 'TypeScript','Tailwind CSS', 'Figma'],
      image: '/img/JNUNES.png',
      createdAt: '19/04/2025',
      screenshots: [
        '/img/J1.png',
        '/img/J2.png',
        '/img/J3.png',
        '/img/J4.png',
        '/img/J5.png',
        '/img/J6.png',
        '/img/J7.png',
        '/img/J8.png',
        '/img/J9.png',
        '/img/J10.png',
        '/img/J11.png',
        '/img/J12.png',
        '/img/J13.png',
        '/img/J14.png',
        '/img/J15.png',
        '/img/J16.png',
        '/img/J18.png',
        '/img/J19.png',
        '/img/J20.png',
        '/img/J21.png',
        '/img/J22.png',
        '/img/J23.png',
        '/img/J24.png',
        '/img/J25.png',
        '/img/J26.png',
        '/img/J27.png',
        '/img/J28.png'
      ]
    }
  ];

  const categories = ['TODOS', 'BACKEND', 'FRONTEND', 'PROTÓTIPO'];
  const filteredProjects = filter === 'TODOS' ? projects : projects.filter(project => project.category === filter);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'PROTÓTIPO':
        return 'bg-purple-500';
      case 'FRONTEND':
        return 'bg-blue-500';
      case 'BACKEND':
        return 'bg-green-500';
      default:
        return 'bg-gray-500';
    }
  };

  const openImageModal = (imageIndex: number) => {
    setSelectedImageIndex(imageIndex);
  };

  const closeImageModal = () => {
    setSelectedImageIndex(null);
  };

  const getCurrentImages = () => {
    if (!selectedProject) return [];
    return [selectedProject.image, ...selectedProject.screenshots];
  };

  return (
    <>
      <section id="projects" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Portfólio</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Navegue e saiba mais sobre os projetos que participei
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    filter === category
                      ? 'bg-primary-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <div 
                key={project.id} 
                className="glass-effect rounded-xl overflow-hidden group hover-scale cursor-pointer" 
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getCategoryColor(project.category)}`}>
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="text-xs text-gray-500 flex items-center">
                      <Calendar size={12} className="mr-1" />
                      {project.createdAt}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span key={index} className="tech-badge text-xs">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="tech-badge text-xs">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Coming Soon Card */}
            <div className="glass-effect rounded-xl overflow-hidden group hover-scale cursor-pointer opacity-75">
              <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 h-48 flex items-center justify-center">
                <div className="text-center">
                  <Plus size={48} className="text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-400 font-medium">Em breve mais</p>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-white">
                  Novos Projetos
                </h3>
                
                <p className="text-gray-400 text-sm mb-4">
                  Estou trabalhando em novos projetos incríveis que serão adicionados em breve ao meu portfólio.
                </p>

                <div className="flex items-center justify-between">
                  <div className="text-xs text-gray-500 flex items-center">
                    <Calendar size={12} className="mr-1" />
                    Em desenvolvimento
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-dark-900 rounded-xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-700">
              <h2 className="text-2xl font-bold text-white">{selectedProject.title}</h2>
              <button 
                onClick={() => setSelectedProject(null)} 
                className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
              >
                <X size={24} className="text-gray-400" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="flex h-[calc(90vh-100px)]">
              {/* Left Side - Scrollable Images */}
              <div className="w-1/2 overflow-y-auto modal-scroll p-6 space-y-4">
                {getCurrentImages().map((image, index) => (
                  <img 
                    key={index}
                    src={image} 
                    alt={`${selectedProject.title} - Imagem ${index + 1}`} 
                    className="w-full rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={() => openImageModal(index)}
                  />
                ))}
              </div>

              {/* Right Side - Fixed Details */}
              <div className="w-1/2 p-6 space-y-6 overflow-y-auto modal-scroll">
                <div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getCategoryColor(selectedProject.category)}`}>
                    {selectedProject.category}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Descrição</h3>
                  <p className="text-gray-400 leading-relaxed">
                    {selectedProject.fullDescription}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-white flex items-center">
                    <Code size={20} className="mr-2" />
                    Tecnologias Utilizadas
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span key={index} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-sm text-gray-500 flex items-center mb-4">
                    <Calendar size={16} className="mr-2" />
                    Criado em: {selectedProject.createdAt}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  {selectedProject.githubUrl && (
                    <a 
                      href={selectedProject.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors text-white"
                    >
                      <Github size={20} className="mr-2" />
                      GitHub
                    </a>
                  )}
                  {selectedProject.liveUrl && (
                    <a 
                      href={selectedProject.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center px-6 py-3 bg-primary-500 hover:bg-primary-600 rounded-lg transition-colors text-white"
                    >
                      <Globe size={20} className="mr-2" />
                      Ver Site
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Full Image Modal */}
      {selectedImageIndex !== null && selectedProject && (
        <div 
          className="fixed inset-0 bg-black/95 backdrop-blur-sm z-[60] flex items-center justify-center p-4"
          onClick={closeImageModal}
        >
          <div className="relative max-w-[90vw] max-h-[90vh]">
            <button 
              onClick={closeImageModal}
              className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 rounded-lg transition-colors z-10"
            >
              <X size={24} className="text-white" />
            </button>
            <img 
              src={getCurrentImages()[selectedImageIndex]} 
              alt={`${selectedProject.title} - Imagem ${selectedImageIndex + 1}`}
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;

