'use client';

import { AnimatedSection, StaggerContainer, StaggerItem, ScaleIn } from '../ui/AnimationComponents';

export default function TeamSection() {
  const teamMembers = [
    {
      name: "João Silva",
      role: "Captain & Backend Dev",
      skills: ["Python", "C++", "Algorithms"],
      avatar: "👨‍💻"
    },
    {
      name: "Maria Santos",
      role: "Frontend & UI/UX",
      skills: ["JavaScript", "React", "Design"],
      avatar: "👩‍💻"
    },
    {
      name: "Pedro Costa",
      role: "Data Structures Expert",
      skills: ["Java", "C++", "Mathematics"],
      avatar: "👨‍🔬"
    },
    {
      name: "Ana Oliveira",
      role: "Problem Solver",
      skills: ["Python", "Logic", "Strategy"],
      avatar: "👩‍🔬"
    }
  ];

  return (
    <section id="equipe" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Uma Equipe de Sobral com um Sonho Gigante</h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-8"></div>
        </AnimatedSection>
        
        <div className="max-w-4xl mx-auto">
          <AnimatedSection delay={0.3}>
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 mb-12 card-hover">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Somos um time de estudantes dedicados do curso de Ciência da Computação da Universidade Estadual Vale do Acaraú (UVA), apaixonados por tecnologia e resolução de problemas. Nosso dia a dia é imerso em algoritmos, lógica e desenvolvimento de soluções inovadoras. Agora, temos a oportunidade de representar Sobral e o Ceará na Maratona de Programação 2025, um evento que reúne as mentes mais brilhantes do mundo.
              </p>
            </div>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <StaggerItem key={index}>
                <ScaleIn className="bg-white rounded-xl shadow-lg p-6 card-hover text-center h-full">
                  <div className="text-6xl mb-4">{member.avatar}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                  <p className="text-green-600 font-semibold mb-4">{member.role}</p>
                  <div className="space-y-2">
                    {member.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm mr-1">
                        {skill}
                      </span>
                    ))}
                  </div>
                </ScaleIn>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
