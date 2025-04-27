import AnimatedElement from "@/components/AnimatedElement";
import { fadeInUp, scaleUp } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";

export default function FeaturedBooks() {
  return (
    <section className="py-16 bg-neutral-200" id="books">
      <div className="container mx-auto px-4">
        <AnimatedElement className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-neutral-800 mb-4">Our Published Books</h2>
          <p className="text-neutral-600 max-w-3xl mx-auto">
            Discover some of the exceptional books we've helped bring to life. Our portfolio spans various genres and formats.
          </p>
        </AnimatedElement>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Book 1 */}
          <AnimatedElement delay={0.1} animation={fadeInUp}>
            <div className="book-card bg-white rounded-lg shadow-md overflow-hidden h-full">
              <div className="overflow-hidden">
                <motion.img 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  src="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2730&q=80" 
                  alt="The Journey Within" 
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-neutral-800 mb-2">The Journey Within</h3>
                <p className="text-sm text-neutral-600 mb-3">By Emily Reynolds</p>
                <p className="text-neutral-600 mb-4">
                  A thought-provoking novel about self-discovery and personal transformation.
                </p>
                <a href="#" className="inline-block text-primary font-medium hover:underline">Learn more →</a>
              </div>
            </div>
          </AnimatedElement>
          
          {/* Book 2 */}
          <AnimatedElement delay={0.2} animation={fadeInUp}>
            <div className="book-card bg-white rounded-lg shadow-md overflow-hidden h-full">
              <div className="overflow-hidden">
                <motion.img 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" 
                  alt="Wilderness Wisdom" 
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-neutral-800 mb-2">Wilderness Wisdom</h3>
                <p className="text-sm text-neutral-600 mb-3">By James Thoreau</p>
                <p className="text-neutral-600 mb-4">
                  A practical guide to connecting with nature and finding balance in a hectic world.
                </p>
                <a href="#" className="inline-block text-primary font-medium hover:underline">Learn more →</a>
              </div>
            </div>
          </AnimatedElement>
          
          {/* Book 3 */}
          <AnimatedElement delay={0.3} animation={fadeInUp}>
            <div className="book-card bg-white rounded-lg shadow-md overflow-hidden h-full">
              <div className="overflow-hidden">
                <motion.img 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  src="https://images.unsplash.com/photo-1512053459797-38c3a066cabd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" 
                  alt="The Last Symphony" 
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-neutral-800 mb-2">The Last Symphony</h3>
                <p className="text-sm text-neutral-600 mb-3">By Sophia Chen</p>
                <p className="text-neutral-600 mb-4">
                  A captivating historical fiction set in war-torn Europe following a gifted musician.
                </p>
                <a href="#" className="inline-block text-primary font-medium hover:underline">Learn more →</a>
              </div>
            </div>
          </AnimatedElement>
          
          {/* Book 4 */}
          <AnimatedElement delay={0.4} animation={fadeInUp}>
            <div className="book-card bg-white rounded-lg shadow-md overflow-hidden h-full">
              <div className="overflow-hidden">
                <motion.img 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  src="https://images.unsplash.com/photo-1526406915894-7bcd65f60845?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2624&q=80" 
                  alt="Digital Disruption" 
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-neutral-800 mb-2">Digital Disruption</h3>
                <p className="text-sm text-neutral-600 mb-3">By Marcus Thompson</p>
                <p className="text-neutral-600 mb-4">
                  An insightful business guide to thriving in the age of technological transformation.
                </p>
                <a href="#" className="inline-block text-primary font-medium hover:underline">Learn more →</a>
              </div>
            </div>
          </AnimatedElement>
        </div>
        
        <AnimatedElement className="text-center mt-12" delay={0.5} animation={scaleUp}>
          <a href="#" className="inline-block bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white py-3 px-8 rounded-md shadow-md transition-all text-lg font-medium">
            View All Books
          </a>
        </AnimatedElement>
      </div>
    </section>
  );
}
