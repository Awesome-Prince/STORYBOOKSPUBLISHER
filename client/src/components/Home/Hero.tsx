import AnimatedElement from "@/components/AnimatedElement";
import { fadeIn, fadeInUp, scaleUp } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden" id="hero">
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1, filter: 'blur(8px)' }}
        animate={{ scale: 1, filter: 'blur(0px)' }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <img 
          src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" 
          alt="Books and Publishing" 
          className="w-full h-full object-cover"
        />
        <div className="hero-overlay absolute inset-0"></div>
      </motion.div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <AnimatedElement animation={fadeInUp} threshold={0.2}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-6 leading-tight">
            Turn Your Manuscript into a <span className="text-accent">Published Book</span>
          </h1>
        </AnimatedElement>
        <AnimatedElement animation={fadeInUp} delay={0.2} threshold={0.2}>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Professional publishing services that help authors bring their stories to life. From manuscript to market, we guide you every step of the way.
          </p>
        </AnimatedElement>
        <AnimatedElement animation={scaleUp} delay={0.4} threshold={0.2}>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#services" className="bg-primary hover:bg-primary/90 text-white py-3 px-8 rounded-md shadow-md transition-all transform hover:-translate-y-1 text-lg font-medium">
              Our Services
            </a>
            <a href="#contact" className="bg-white hover:bg-neutral-200 text-primary py-3 px-8 rounded-md shadow-md transition-all transform hover:-translate-y-1 text-lg font-medium">
              Contact Us
            </a>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
}
