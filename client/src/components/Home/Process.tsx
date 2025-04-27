import AnimatedElement from "@/components/AnimatedElement";
import { fadeInUp, scaleUp } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";

export default function Process() {
  return (
    <section className="py-16 bg-primary/5">
      <div className="container mx-auto px-4">
        <AnimatedElement className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-neutral-800 mb-4">Our Publishing Process</h2>
          <p className="text-neutral-600 max-w-3xl mx-auto">
            From manuscript to published book, here's how we bring your vision to life.
          </p>
        </AnimatedElement>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <AnimatedElement delay={0.1} animation={scaleUp}>
            <div className="relative h-full">
              <motion.div 
                className="bg-white rounded-lg shadow-md p-8 relative z-10 h-full"
                whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 mx-auto">
                  1
                </div>
                <h3 className="text-xl font-bold text-neutral-800 mb-4 text-center">Consultation & Planning</h3>
                <p className="text-neutral-600 text-center">
                  We begin with a detailed discussion about your book and publishing goals, establishing a customized plan for your project.
                </p>
              </motion.div>
              <div className="hidden md:block absolute top-1/2 left-full w-full h-2 bg-primary/20 -z-10 transform -translate-y-1/2"></div>
            </div>
          </AnimatedElement>
          
          {/* Step 2 */}
          <AnimatedElement delay={0.3} animation={scaleUp}>
            <div className="relative h-full">
              <motion.div 
                className="bg-white rounded-lg shadow-md p-8 relative z-10 h-full"
                whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 mx-auto">
                  2
                </div>
                <h3 className="text-xl font-bold text-neutral-800 mb-4 text-center">Editorial & Design</h3>
                <p className="text-neutral-600 text-center">
                  Your manuscript undergoes professional editing while our design team creates a cover and interior that captures your book's essence.
                </p>
              </motion.div>
              <div className="hidden md:block absolute top-1/2 left-full w-full h-2 bg-primary/20 -z-10 transform -translate-y-1/2"></div>
            </div>
          </AnimatedElement>
          
          {/* Step 3 */}
          <AnimatedElement delay={0.5} animation={scaleUp}>
            <div className="relative h-full">
              <motion.div 
                className="bg-white rounded-lg shadow-md p-8 relative z-10 h-full"
                whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 mx-auto">
                  3
                </div>
                <h3 className="text-xl font-bold text-neutral-800 mb-4 text-center">Publication & Marketing</h3>
                <p className="text-neutral-600 text-center">
                  Once approved, we handle printing, distribution, and execute marketing strategies to promote your book to its target audience.
                </p>
              </motion.div>
            </div>
          </AnimatedElement>
        </div>
        
        <AnimatedElement className="text-center mt-12" delay={0.6}>
          <a href="#contact" className="inline-block bg-primary hover:bg-primary/90 text-white py-3 px-8 rounded-md shadow-md transition-all transform hover:-translate-y-1 text-lg font-medium">
            Start Your Publishing Journey
          </a>
        </AnimatedElement>
      </div>
    </section>
  );
}
