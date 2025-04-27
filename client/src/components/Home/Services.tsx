import AnimatedElement from "@/components/AnimatedElement";
import { fadeInUp, scaleUp } from "@/hooks/useScrollAnimation";

export default function Services() {
  return (
    <section className="py-16 bg-neutral-200" id="services">
      <div className="container mx-auto px-4">
        <AnimatedElement className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-neutral-800 mb-4">Our Publishing Services</h2>
          <p className="text-neutral-600 max-w-3xl mx-auto">
            We offer comprehensive publishing services to help authors navigate the complex publishing landscape and succeed in today's competitive market.
          </p>
        </AnimatedElement>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Service 1 */}
          <AnimatedElement delay={0.1} animation={scaleUp}>
            <div className="service-card bg-white rounded-lg shadow-md p-8 text-center transition-all duration-300 h-full">
              <div className="w-16 h-16 bg-primary/10 flex items-center justify-center rounded-full mx-auto mb-6">
                <i className="fas fa-edit text-primary text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-neutral-800 mb-3">Editorial Services</h3>
              <p className="text-neutral-600">
                Professional editing to polish your manuscript, including developmental editing, copy editing, and proofreading.
              </p>
            </div>
          </AnimatedElement>
          
          {/* Service 2 */}
          <AnimatedElement delay={0.2} animation={scaleUp}>
            <div className="service-card bg-white rounded-lg shadow-md p-8 text-center transition-all duration-300 h-full">
              <div className="w-16 h-16 bg-primary/10 flex items-center justify-center rounded-full mx-auto mb-6">
                <i className="fas fa-paint-brush text-primary text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-neutral-800 mb-3">Book Design</h3>
              <p className="text-neutral-600">
                Eye-catching cover design and professional interior formatting that ensures your book looks its best.
              </p>
            </div>
          </AnimatedElement>
          
          {/* Service 3 */}
          <AnimatedElement delay={0.3} animation={scaleUp}>
            <div className="service-card bg-white rounded-lg shadow-md p-8 text-center transition-all duration-300 h-full">
              <div className="w-16 h-16 bg-primary/10 flex items-center justify-center rounded-full mx-auto mb-6">
                <i className="fas fa-bullhorn text-primary text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-neutral-800 mb-3">Marketing & Promotion</h3>
              <p className="text-neutral-600">
                Strategic marketing plans, social media campaigns, and promotional materials to help your book reach its audience.
              </p>
            </div>
          </AnimatedElement>
          
          {/* Service 4 */}
          <AnimatedElement delay={0.4} animation={scaleUp}>
            <div className="service-card bg-white rounded-lg shadow-md p-8 text-center transition-all duration-300 h-full">
              <div className="w-16 h-16 bg-primary/10 flex items-center justify-center rounded-full mx-auto mb-6">
                <i className="fas fa-globe text-primary text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-neutral-800 mb-3">Distribution</h3>
              <p className="text-neutral-600">
                Global distribution services that make your book available through major retailers, both online and in stores.
              </p>
            </div>
          </AnimatedElement>
        </div>
        
        <AnimatedElement className="text-center mt-12" delay={0.5}>
          <a href="#contact" className="inline-block bg-primary hover:bg-primary/90 text-white py-3 px-8 rounded-md shadow-md transition-all transform hover:-translate-y-1 text-lg font-medium">
            Discuss Your Project
          </a>
        </AnimatedElement>
      </div>
    </section>
  );
}
