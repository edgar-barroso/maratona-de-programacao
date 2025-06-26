'use client';

import { motion } from 'framer-motion';
import { FaBullhorn, FaCertificate, FaVideo, FaHandshake, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { AnimatedSection, StaggerContainer, StaggerItem } from '../ui/AnimationComponents';

export default function SponsorshipSection() {
  const sponsorshipBenefits = [
    {
      icon: FaBullhorn,
      title: "Divulgação da Marca",
      description: "Logo em materiais de divulgação, redes sociais e uniformes da equipe"
    },
    {
      icon: FaCertificate,
      title: "Certificação",
      description: "Certificado oficial de apoio e relatórios detalhados de resultados"
    },
    {
      icon: FaVideo,
      title: "Conteúdo Exclusivo",
      description: "Entrevistas, posts dedicados e acesso aos treinos da equipe"
    },
    {
      icon: FaHandshake,
      title: "Parcerias",
      description: "Oportunidades de networking e parcerias de longo prazo"
    }
  ];

  return (
    <section id="patrocinio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Como Sua Empresa Pode Apoiar</h2>
            <div className="w-24 h-1 bg-green-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Qualquer valor de apoio é bem-vindo e fará diferença na nossa jornada. 
              Vamos conversar sobre como adaptar os benefícios ao seu investimento.
            </p>
          </AnimatedSection>

          {/* Benefits Grid */}
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {sponsorshipBenefits.map((benefit, index) => (
              <StaggerItem key={index}>
                <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 card-hover text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="text-2xl text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Call to Action */}
          <AnimatedSection delay={0.6}>
            <div className="bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl p-8 text-center text-white">
              <h3 className="text-3xl font-bold mb-4">Vamos Conversar!</h3>
              <p className="text-xl mb-8 opacity-90">
                Entre em contato conosco para discutirmos como sua empresa pode fazer parte desta conquista.
                Personalizamos os benefícios de acordo com o valor do seu apoio.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a 
                  href="#contato" 
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-green-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-full transition-colors shadow-lg"
                >
                  <FaEnvelope className="inline mr-2" />
                  Entrar em Contato
                </motion.a>
                <motion.a 
                  href="https://wa.me/5588999999999" 
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-600 font-bold py-4 px-8 rounded-full transition-colors"
                >
                  <FaWhatsapp className="inline mr-2" />
                  WhatsApp
                </motion.a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
