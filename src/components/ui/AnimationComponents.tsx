'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  duration?: number;
}

export const AnimatedSection = ({ 
  children, 
  className = '', 
  delay = 0, 
  direction = 'up',
  duration = 0.6 
}: AnimatedSectionProps) => {
  const directions = {
    up: { y: 60, x: 0 },
    down: { y: -60, x: 0 },
    left: { y: 0, x: 60 },
    right: { y: 0, x: -60 }
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...directions[direction]
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0
      }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.25, 0.25, 0.75]
      }}
      viewport={{ once: true, margin: '-50px' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export const FadeIn = ({ children, delay = 0, duration = 0.6, className = '' }: FadeInProps) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration, delay }}
    viewport={{ once: true }}
    className={className}
  >
    {children}
  </motion.div>
);

interface SlideInProps {
  children: ReactNode;
  direction?: 'left' | 'right';
  delay?: number;
  duration?: number;
  className?: string;
}

export const SlideIn = ({ 
  children, 
  direction = 'left', 
  delay = 0, 
  duration = 0.6,
  className = ''
}: SlideInProps) => (
  <motion.div
    initial={{ 
      opacity: 0, 
      x: direction === 'left' ? -100 : 100 
    }}
    whileInView={{ 
      opacity: 1, 
      x: 0 
    }}
    transition={{ 
      duration, 
      delay,
      ease: 'easeOut'
    }}
    viewport={{ once: true }}
    className={className}
  >
    {children}
  </motion.div>
);

interface ScaleInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export const ScaleIn = ({ children, delay = 0, duration = 0.6, className = '' }: ScaleInProps) => (
  <motion.div
    initial={{ 
      opacity: 0, 
      scale: 0.8 
    }}
    whileInView={{ 
      opacity: 1, 
      scale: 1 
    }}
    transition={{ 
      duration, 
      delay,
      ease: 'easeOut'
    }}
    viewport={{ once: true }}
    className={className}
  >
    {children}
  </motion.div>
);

interface FloatingProps {
  children: ReactNode;
  className?: string;
}

export const Floating = ({ children, className = '' }: FloatingProps) => (
  <motion.div
    animate={{
      y: [0, -10, 0],
    }}
    transition={{
      duration: 3,
      ease: 'easeInOut',
      repeat: Infinity,
    }}
    className={className}
  >
    {children}
  </motion.div>
);

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

export const StaggerContainer = ({ children, className = '', staggerDelay = 0.1 }: StaggerContainerProps) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={{
      hidden: {},
      visible: {
        transition: {
          staggerChildren: staggerDelay
        }
      }
    }}
    className={className}
  >
    {children}
  </motion.div>
);

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
}

export const StaggerItem = ({ children, className = '' }: StaggerItemProps) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 }
    }}
    transition={{ duration: 0.6 }}
    className={className}
  >
    {children}
  </motion.div>
);
