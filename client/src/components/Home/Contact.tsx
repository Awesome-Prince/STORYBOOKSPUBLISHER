import { useState, FormEvent } from 'react';
import AnimatedElement from "@/components/AnimatedElement";
import { fadeIn, fadeInUp, scaleUp } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Form submission would go here in a production environment
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <section className="py-16 bg-white" id="contact">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <AnimatedElement animation={fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-neutral-800 mb-6">Get in Touch</h2>
            <p className="text-neutral-600 mb-8">
              Have questions about our publishing services or ready to start your project? Contact us today and one of our publishing consultants will get back to you promptly.
            </p>
            
            <div className="space-y-6 mb-8">
              <motion.div 
                className="flex items-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <i className="fas fa-map-marker-alt text-primary"></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-neutral-800 mb-1">Our Location</h3>
                  <p className="text-neutral-600">123 Publishing Avenue, New Delhi, India</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <i className="fas fa-envelope text-primary"></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-neutral-800 mb-1">Email Us</h3>
                  <p className="text-neutral-600">info@bondlessbookpublisher.in</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <i className="fas fa-phone-alt text-primary"></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-neutral-800 mb-1">Call Us</h3>
                  <p className="text-neutral-600">+91 98765 43210</p>
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              className="flex space-x-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <a href="#" className="bg-primary/10 hover:bg-primary/20 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <i className="fab fa-facebook-f text-primary"></i>
              </a>
              <a href="#" className="bg-primary/10 hover:bg-primary/20 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <i className="fab fa-twitter text-primary"></i>
              </a>
              <a href="#" className="bg-primary/10 hover:bg-primary/20 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <i className="fab fa-instagram text-primary"></i>
              </a>
              <a href="#" className="bg-primary/10 hover:bg-primary/20 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <i className="fab fa-linkedin-in text-primary"></i>
              </a>
            </motion.div>
          </AnimatedElement>
          
          <AnimatedElement animation={fadeInUp} delay={0.3}>
            <motion.form 
              onSubmit={handleSubmit} 
              className="bg-neutral-200 p-8 rounded-lg shadow-md"
              whileHover={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-neutral-800 mb-6">Send Us a Message</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-neutral-800 font-medium mb-2">Your Name</label>
                  <motion.input 
                    type="text" 
                    id="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-md border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary"
                    whileFocus={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-neutral-800 font-medium mb-2">Email Address</label>
                  <motion.input 
                    type="email" 
                    id="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-md border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary"
                    whileFocus={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-neutral-800 font-medium mb-2">Subject</label>
                <motion.input 
                  type="text" 
                  id="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary"
                  whileFocus={{ scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-neutral-800 font-medium mb-2">Your Message</label>
                <motion.textarea 
                  id="message" 
                  rows={5} 
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary"
                  whileFocus={{ scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                ></motion.textarea>
              </div>
              
              <motion.button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-white py-3 px-6 rounded-md shadow-md transition-all transform text-lg font-medium"
                whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.2)" }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                Send Message
              </motion.button>
            </motion.form>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
}
