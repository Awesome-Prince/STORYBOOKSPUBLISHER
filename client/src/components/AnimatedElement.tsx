import { motion, Variant } from 'framer-motion';
import { fadeInUp, useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ReactNode } from 'react';

interface AnimatedElementProps {
  children: ReactNode;
  className?: string;
  animation?: Record<string, Variant>;
  delay?: number;
  threshold?: number;
}

export default function AnimatedElement({
  children,
  className = '',
  animation = fadeInUp,
  delay = 0,
  threshold = 0.1,
}: AnimatedElementProps) {
  const { ref, controls } = useScrollAnimation(threshold);
  
  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={animation}
      custom={delay}
    >
      {children}
    </motion.div>
  );
}