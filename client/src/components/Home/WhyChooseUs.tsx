export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-neutral-800 mb-6">Why Choose Bondless Book Publishers?</h2>
            <p className="text-neutral-600 mb-8">
              With years of industry experience and a passion for bringing exceptional books to market, we offer personalized publishing solutions tailored to your unique needs.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <i className="fas fa-check text-primary"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-800 mb-1">Expert Team</h3>
                  <p className="text-neutral-600">Our team consists of industry professionals with decades of combined experience in publishing.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <i className="fas fa-check text-primary"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-800 mb-1">Author-Focused Approach</h3>
                  <p className="text-neutral-600">We prioritize your vision and goals, ensuring your book reflects your unique voice and message.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <i className="fas fa-check text-primary"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-800 mb-1">Comprehensive Services</h3>
                  <p className="text-neutral-600">From manuscript to market, we handle every aspect of the publishing process with meticulous attention to detail.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80" 
              alt="Publishing team at work" 
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
