import AnimatedElement from "@/components/AnimatedElement";
import { fadeInUp, scaleUp } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";

export default function Testimonials() {
  return (
    <section className="py-16 bg-primary/5">
      <div className="container mx-auto px-4">
        <AnimatedElement className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-neutral-800 mb-4">What Our Authors Say</h2>
          <p className="text-neutral-600 max-w-3xl mx-auto">
            Hear from authors who have successfully published their books with our guidance and support.
          </p>
        </AnimatedElement>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <AnimatedElement delay={0.1} animation={fadeInUp}>
            <motion.div 
              className="bg-white rounded-lg shadow-md p-8 relative h-full"
              whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
              transition={{ duration: 0.4 }}
            >
              <div className="text-primary text-5xl absolute -top-4 left-4 opacity-20">
                <i className="fas fa-quote-left"></i>
              </div>
              <p className="text-neutral-600 mb-6 relative z-10">
                "Working with Bondless Book Publishers transformed my publishing journey. Their expertise and dedication made the process smooth and rewarding. My book exceeded my expectations in both quality and market reach."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2538&q=80" 
                  alt="Sarah Johnson" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-neutral-800">Sarah Johnson</h4>
                  <p className="text-sm text-neutral-600">Author of "Beyond Horizons"</p>
                </div>
              </div>
            </motion.div>
          </AnimatedElement>
          
          {/* Testimonial 2 */}
          <AnimatedElement delay={0.2} animation={fadeInUp}>
            <motion.div 
              className="bg-white rounded-lg shadow-md p-8 relative h-full"
              whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
              transition={{ duration: 0.4 }}
            >
              <div className="text-primary text-5xl absolute -top-4 left-4 opacity-20">
                <i className="fas fa-quote-left"></i>
              </div>
              <p className="text-neutral-600 mb-6 relative z-10">
                "I can't thank Bondless enough for their incredible support. From editing to marketing, they guided me through each step with professionalism and enthusiasm. They truly care about their authors' success."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1627161683077-e34782c24d81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2203&q=80" 
                  alt="Michael Roberts" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-neutral-800">Michael Roberts</h4>
                  <p className="text-sm text-neutral-600">Author of "The Strategy Code"</p>
                </div>
              </div>
            </motion.div>
          </AnimatedElement>
          
          {/* Testimonial 3 */}
          <AnimatedElement delay={0.3} animation={fadeInUp}>
            <motion.div 
              className="bg-white rounded-lg shadow-md p-8 relative h-full"
              whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
              transition={{ duration: 0.4 }}
            >
              <div className="text-primary text-5xl absolute -top-4 left-4 opacity-20">
                <i className="fas fa-quote-left"></i>
              </div>
              <p className="text-neutral-600 mb-6 relative z-10">
                "As a first-time author, I was nervous about publishing my book. The team at Bondless made me feel confident and supported throughout the journey. Their expertise is unmatched, and I'm already working on my second book with them."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2088&q=80" 
                  alt="Elena Patel" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-neutral-800">Elena Patel</h4>
                  <p className="text-sm text-neutral-600">Author of "Whispers in Time"</p>
                </div>
              </div>
            </motion.div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
}
