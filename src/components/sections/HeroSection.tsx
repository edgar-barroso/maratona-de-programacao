'use client';

import { motion } from 'framer-motion';
import { FaHandshake, FaUsers } from 'react-icons/fa';
import { AnimatedSection } from '../ui/AnimationComponents';

export default function HeroSection() {
  return (
    <section id="inicio" className="gradient-bg hero-pattern py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection delay={0.2}>
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Rumo a 2025: Leve a Equipe da UVA de Sobral para a 
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="text-yellow-300"
              >
                {' '}Elite da Programação Mundial!
              </motion.span>
            </motion.h1>
          </AnimatedSection>
          
          <AnimatedSection delay={0.8}>
            <p className="text-xl text-white mb-10 opacity-90">
              Apoie os futuros inovadores da nossa cidade na maior competição universitária de programação do planeta.
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={1.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a 
                href="#patrocinio" 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 px-8 rounded-full transition-colors shadow-lg"
              >
                <FaHandshake className="inline mr-2" />
                Seja um Patrocinador
              </motion.a>
              <motion.a 
                href="#equipe" 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-600 font-bold py-4 px-8 rounded-full transition-colors"
              >
                <FaUsers className="inline mr-2" />
                Conheça a Equipe
              </motion.a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
