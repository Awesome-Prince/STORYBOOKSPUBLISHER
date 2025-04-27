import { Link } from 'wouter';

export default function Footer() {
  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <svg className="h-10 w-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <div className="ml-3">
                <h3 className="text-xl font-playfair font-bold text-white">Bondless</h3>
                <p className="text-xs text-white/70">Book Publisher</p>
              </div>
            </div>
            <p className="text-white/70 mb-6">
              A leading publishing services provider dedicated to helping authors bring their books to market with professional quality and care.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/">
                  <a className="text-white/70 hover:text-white transition-colors">Home</a>
                </Link>
              </li>
              <li><a href="#about" className="text-white/70 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="text-white/70 hover:text-white transition-colors">Our Services</a></li>
              <li><a href="#books" className="text-white/70 hover:text-white transition-colors">Books</a></li>
              <li><a href="#contact" className="text-white/70 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Book Editing</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Cover Design</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Interior Formatting</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Marketing & Promotion</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Distribution</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Author Support</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3 text-primary"></i>
                <span className="text-white/70">123 Publishing Avenue, New Delhi, India</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-envelope mt-1 mr-3 text-primary"></i>
                <span className="text-white/70">info@bondlessbookpublisher.in</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-phone-alt mt-1 mr-3 text-primary"></i>
                <span className="text-white/70">+91 98765 43210</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-clock mt-1 mr-3 text-primary"></i>
                <span className="text-white/70">Mon-Fri: 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/20 text-center">
          <p className="text-white/70 text-sm">
            &copy; {new Date().getFullYear()} Bondless Book Publisher. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
