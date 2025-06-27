'use client';

import { FaTrophy, FaGlobe } from 'react-icons/fa';
import { AnimatedSection, SlideIn, Floating, StaggerContainer, StaggerItem } from '../ui/AnimationComponents';

export default function MarathonSection() {
  const stats = [
    { icon: "🌍", number: "100+", label: "Países Participantes" },
    { icon: "🏆", number: "50K+", label: "Competidores Mundiais" },
    { icon: "💼", number: "300+", label: "Empresas Patrocinadoras" },
    { icon: "🎯", number: "25", label: "Anos de História" }
  ];

  return (
    <section id="maratona" className="py-20 gradient-bg ">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">A Copa do Mundo da Programação</h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <SlideIn direction="left">
              <Floating>
                <div className="bg-gray-800 rounded-2xl p-8 text-white">
                  <div className="text-center">
                    <FaTrophy className="text-6xl text-yellow-300 mb-4 mx-auto" />
                    <h3 className="text-2xl font-bold mb-4">ICPC World Finals 2025</h3>
                    <p className="text-lg opacity-90">
                      A competição mais prestigiosa de programação universitária do mundo
                    </p>
                  </div>
                </div>
              </Floating>
            </SlideIn>

            <SlideIn direction="right" delay={0.3}>
              <div className="space-y-6">
                <AnimatedSection delay={0.5}>
                  <div className="bg-white rounded-xl p-6 shadow-lg card-hover">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      <FaGlobe className="inline text-blue-500 mr-3" />
                      Um Evento Global
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      A Maratona de Programação é a maior competição acadêmica do mundo na área de informática. 
                      Equipes de universidades de mais de 100 países competem para resolver problemas complexos 
                      usando algoritmos e estruturas de dados avançadas.
                    </p>
                  </div>
                </AnimatedSection>

                <StaggerContainer className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <StaggerItem key={index}>
                      <div className="bg-white rounded-xl p-4 shadow-lg card-hover text-center">
                        <div className="text-3xl mb-2">{stat.icon}</div>
                        <div className="text-2xl font-bold text-green-600">{stat.number}</div>
                        <div className="text-sm text-gray-600">{stat.label}</div>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </SlideIn>
          </div>
        </div>
      </div>
    </section>
  );
}
