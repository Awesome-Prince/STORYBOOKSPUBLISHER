import AnimatedElement from "@/components/AnimatedElement";
import { fadeInUp, scaleUp } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4 text-center">
        <AnimatedElement animation={scaleUp}>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-6">Ready to Publish Your Book?</h2>
          <p className="text-white/90 max-w-3xl mx-auto mb-8 text-lg">
            Take the first step towards becoming a published author. Contact us today to discuss your project and discover how we can help bring your book to life.
          </p>
        </AnimatedElement>
        
        <AnimatedElement delay={0.3} animation={fadeInUp}>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.a 
              href="#contact" 
              className="bg-white hover:bg-neutral-200 text-primary py-3 px-8 rounded-md shadow-md transition-all transform text-lg font-medium"
              whileHover={{ 
                y: -5, 
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" 
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              Contact Us Now
            </motion.a>
            <motion.a 
              href="#" 
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 py-3 px-8 rounded-md shadow-md transition-all transform text-lg font-medium"
              whileHover={{ 
                y: -5, 
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" 
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              Download Our Guide
            </motion.a>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
}
