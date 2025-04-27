import { useInView } from 'react-intersection-observer';
import { useAnimation, Variant } from 'framer-motion';
import { useEffect } from 'react';

export const fadeInUp: Record<string, Variant> = {
  hidden: {
    y: 60,
    opacity: 0,
    filter: 'blur(10px)',
  },
  visible: (delay = 0) => ({
    y: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.6,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export const fadeIn: Record<string, Variant> = {
  hidden: {
    opacity: 0,
    filter: 'blur(8px)',
  },
  visible: (delay = 0) => ({
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.5,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export const scaleUp: Record<string, Variant> = {
  hidden: {
    scale: 0.85,
    opacity: 0,
    filter: 'blur(8px)',
  },
  visible: (delay = 0) => ({
    scale: 1,
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.5,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export function useScrollAnimation(threshold = 0.1) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ 
    threshold, 
    triggerOnce: true,
    rootMargin: "0px 0px -100px 0px" // Slightly before elements enter viewport
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return { ref, controls, inView };
}