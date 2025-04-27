import AnimatedElement from "@/components/AnimatedElement";
import { fadeIn, fadeInUp, scaleUp } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <section className="py-16 bg-white" id="about">
      <div className="container mx-auto px-4">
        <AnimatedElement className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-neutral-800 mb-4">About Bondless Book Publishers</h2>
          <p className="text-neutral-600 max-w-3xl mx-auto">
            We're a team of publishing professionals dedicated to helping authors bring their stories to life.
          </p>
        </AnimatedElement>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <AnimatedElement>
            <motion.img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" 
              alt="Bondless Book Publishing Team" 
              className="rounded-lg shadow-xl w-full h-auto object-cover"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatedElement>
          
          <AnimatedElement delay={0.2} animation={fadeInUp}>
            <h3 className="text-2xl font-bold text-neutral-800 mb-4">Our Story</h3>
            <p className="text-neutral-600 mb-4">
              Founded in 2010, Bondless Book Publishers began with a simple mission: to provide authors with the highest quality publishing services while maintaining the integrity of their creative vision.
            </p>
            <p className="text-neutral-600 mb-4">
              Over the years, we've grown into a full-service publishing company that has helped hundreds of authors across various genres bring their books to market successfully. Our team brings decades of combined experience from major publishing houses and independent presses.
            </p>
            <p className="text-neutral-600 mb-6">
              We believe in building lasting relationships with our authors and providing personalized attention to each project. When you publish with Bondless, you're not just a client—you're part of our creative family.
            </p>
            <a href="#" className="inline-block text-primary font-medium hover:underline">Read more about our journey →</a>
          </AnimatedElement>
        </div>
        
        <AnimatedElement className="text-center mb-12">
          <h3 className="text-2xl font-bold text-neutral-800 mb-8">Meet Our Team</h3>
        </AnimatedElement>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Team Member 1 */}
          <AnimatedElement delay={0.1} animation={scaleUp}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
              <motion.div className="overflow-hidden" whileHover={{ scale: 1 }}>
                <motion.img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2149&q=80" 
                  alt="Robert Anderson" 
                  className="w-full h-64 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-neutral-800 mb-1">Robert Anderson</h4>
                <p className="text-primary mb-3">Founder & CEO</p>
                <p className="text-neutral-600 text-sm">
                  With 20+ years in publishing, Robert leads our team with passion and industry insight.
                </p>
              </div>
            </div>
          </AnimatedElement>
          
          {/* Team Member 2 */}
          <AnimatedElement delay={0.2} animation={scaleUp}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
              <motion.div className="overflow-hidden" whileHover={{ scale: 1 }}>
                <motion.img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2538&q=80" 
                  alt="Jennifer Williams" 
                  className="w-full h-64 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-neutral-800 mb-1">Jennifer Williams</h4>
                <p className="text-primary mb-3">Editorial Director</p>
                <p className="text-neutral-600 text-sm">
                  Jennifer ensures the highest editorial standards across all our publications.
                </p>
              </div>
            </div>
          </AnimatedElement>
          
          {/* Team Member 3 */}
          <AnimatedElement delay={0.3} animation={scaleUp}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
              <motion.div className="overflow-hidden" whileHover={{ scale: 1 }}>
                <motion.img 
                  src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2487&q=80" 
                  alt="David Chen" 
                  className="w-full h-64 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-neutral-800 mb-1">David Chen</h4>
                <p className="text-primary mb-3">Design Lead</p>
                <p className="text-neutral-600 text-sm">
                  David's creative vision brings books to life through stunning design and layout.
                </p>
              </div>
            </div>
          </AnimatedElement>
          
          {/* Team Member 4 */}
          <AnimatedElement delay={0.4} animation={scaleUp}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
              <motion.div className="overflow-hidden" whileHover={{ scale: 1 }}>
                <motion.img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80" 
                  alt="Sophia Martinez" 
                  className="w-full h-64 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-neutral-800 mb-1">Sophia Martinez</h4>
                <p className="text-primary mb-3">Marketing Director</p>
                <p className="text-neutral-600 text-sm">
                  Sophia creates strategic marketing campaigns that help books find their audience.
                </p>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
}
