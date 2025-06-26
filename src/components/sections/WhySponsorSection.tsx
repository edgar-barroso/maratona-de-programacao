'use client';

import { FaEye, FaUsers, FaHeart, FaRocket } from 'react-icons/fa';
import { AnimatedSection, StaggerContainer, StaggerItem } from '../ui/AnimationComponents';

export default function WhySponsorSection() {
  const benefits = [
    {
      icon: FaEye,
      title: "Visibilidade Nacional",
      description: "Sua marca será vista por milhares de estudantes e profissionais de tecnologia em todo o Brasil."
    },
    {
      icon: FaUsers,
      title: "Networking Qualificado",
      description: "Acesso direto a talentos em programação e futuras parcerias com a universidade."
    },
    {
      icon: FaHeart,
      title: "Responsabilidade Social",
      description: "Contribua para o desenvolvimento da educação e tecnologia em nossa região."
    },
    {
      icon: FaRocket,
      title: "Inovação Local",
      description: "Apoie o crescimento do ecossistema de tecnologia e inovação em Sobral."
    }
  ];

  return (
    <AnimatedSection>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Investir em Nós é Investir no Futuro de Sobral</h2>
              <div className="w-24 h-1 bg-green-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-600">Apoiar nossa equipe não é apenas um patrocínio, é um investimento com retorno garantido para sua marca e para nossa comunidade</p>
            </div>

            <StaggerContainer>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => (
                  <StaggerItem key={index}>
                    <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 card-hover">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                          <benefit.icon className="text-2xl text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-3">{benefit.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
