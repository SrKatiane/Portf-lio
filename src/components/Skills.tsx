import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Tecnologias',
      skills: [
        { name: 'React.js', color: 'text-blue-400' },
        { name: 'Node.js',  color: 'text-blue-400' },
        { name: 'HTML', color: 'text-blue-400' },
        { name: 'CSS',  color: 'text-blue-400' },
        { name: 'JavaScript',  color: 'text-blue-400' },
        { name: 'Python',  color: 'text-blue-400' },
        { name: 'Git/GitHub',  color: 'text-blue-400' },
      ]
    },
    {
      title: 'Design e Prototipação',
      skills: [
        { name: 'Figma',  color: 'text-blue-400' },
        { name: 'UX/UI',  color: 'text-blue-400' },
        { name: 'Material UI',  color: 'text-blue-400' },
      ]
    },
    {
      title: 'Outras ferramentas',
      skills: [
        { name: 'Visual Studio Code',  color: 'text-blue-400' },
        { name: 'Trello',  color: 'text-blue-400' },
        { name: 'Slack',  color: 'text-blue-400' },
        { name: 'Netlify',  color: 'text-blue-400' }
      ]
    }
   
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Avançado':
        return 'bg-green-500';
      case 'Intermediário':
        return 'bg-yellow-500';
      case 'Básico':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient-text">Skills Técnicas</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Desenvolvo interfaces que combinam clareza, fluidez e propósito.
            Acredito que cada detalhe importa na jornada do usuário.
            Entre o código e o design, estou sempre evoluindo. 
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - Skills List */}
          <div className="space-y-8">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="glass-effect rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-6 text-white">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center space-x-2 bg-dark-800/50 rounded-lg px-3 py-2 border border-dark-700 hover:border-primary-500/50 transition-all duration-300 hover-scale"
                    >
                      <span className={`font-medium ${skill.color}`}>
                        {skill.name}
                      </span>
                      <div className={`w-2 h-2 rounded-full ${getLevelColor(skill.level)}`}></div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Visual Skills Representation */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-md">
              {/* Tech Icons Grid */}
              <div className="grid grid-cols-3 gap-8 p-8">
                {/* Row 1 */}
                <div className="w-18 h-18 glass-effect rounded-xl flex items-center justify-center text-orange-500 text-2xl font-bold animate-float">
                  <img src="https://cdn.simpleicons.org/html5/ff5722" alt="HTML" />
                </div>
                <div className="w-18 h-18 glass-effect rounded-xl flex items-center justify-center text-blue-400 text-2xl font-bold animate-float" style={{ animationDelay: '0.5s' }}>
                  <img src="/img/css-3.png" alt="CSS" />
                </div>
                <div className="w-18 h-18 glass-effect rounded-xl flex items-center justify-center text-cyan-400 text-2xl font-bold animate-float" style={{ animationDelay: '1s' }}>
                  <img src="https://cdn.simpleicons.org/javascript/f7df1e" alt="JavaScript" />
                </div>
                
                {/* Row 2 */}
                <div className="w-18 h-18 glass-effect rounded-xl flex items-center justify-center text-blue-500 text-2xl font-bold animate-float" style={{ animationDelay: '1.5s' }}>
                  <img src="https://cdn.simpleicons.org/react/61DAFB" alt="React" />
                </div>
                <div className="w-18 h-18 glass-effect rounded-xl flex items-center justify-center text-yellow-400 text-2xl font-bold animate-float" style={{ animationDelay: '2s' }}>
                  <img src="/img/figma.png" alt="Figma" />
                </div>
                <div className="w-18 h-18 glass-effect rounded-xl flex items-center justify-center text-green-400 text-2xl font-bold animate-float" style={{ animationDelay: '2.5s' }}>
                  <img src="https://cdn.simpleicons.org/git/F05032" alt="Git" />
                </div>
                
                {/* Row 3 */}
                <div className="w-18 h-18 glass-effect rounded-xl flex items-center justify-center text-purple-400 text-2xl font-bold animate-float" style={{ animationDelay: '3s' }}>
                  <img src="/img/vscode.png" alt="VS Code" />
                </div>
                <div className="w-18 h-18 glass-effect rounded-xl flex items-center justify-center text-pink-400 text-2xl font-bold animate-float" style={{ animationDelay: '3.5s' }}>
                  <img src="https://cdn.simpleicons.org/mui/007FFF" alt="Material UI" />
                </div>
                <div className="w-18 h-18 glass-effect rounded-xl flex items-center justify-center text-gray-400 text-2xl font-bold animate-float" style={{ animationDelay: '4s' }}>
                  <img src="/img/slack.png" alt="slack" />
                </div>
              </div>

              {/* Floating particles */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-primary-500 rounded-full animate-float opacity-60"></div>
              <div className="absolute bottom-8 left-2 w-2 h-2 bg-secondary-500 rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-16 left-8 w-4 h-4 bg-accent-500 rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
