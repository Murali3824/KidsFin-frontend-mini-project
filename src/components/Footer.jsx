import React from 'react';
import { Link} from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1C1C1C] text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">KidsFin</h3>
            <p className="text-gray-400">
              Empowering the next generation with financial wisdom.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-[#C6A55C]">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-[#C6A55C]">About</Link>
              </li>
              <li>
                <Link to="/features" className="text-gray-400 hover:text-[#C6A55C]">Features</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-[#C6A55C]">Contact Us</Link>
              </li>
              <li>
                <Link to="faq" className="text-gray-400 hover:text-[#C6A55C]">FAQ</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Mail className="text-[#C6A55C]" size={24} />
                <p className="text-gray-400">muralinetha38@gmail.com</p>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="text-[#C6A55C]" size={24} />
                <p className="text-gray-400">8074756499</p>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="text-[#C6A55C]" size={24} />
                <p className="text-gray-400">Hyderabad</p>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 text-gray-900 rounded-md"
              />
              <button className="w-full bg-[#C6A55C] text-white px-4 py-2 rounded-md hover:bg-[#B89349]">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-[#ffffff]/20 mt-8 pt-8 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <Facebook className="text-gray-400 hover:text-[#C6A55C] cursor-pointer" size={28} />
            <Twitter className="text-gray-400 hover:text-[#C6A55C] cursor-pointer" size={28} />
            <Linkedin className="text-gray-400 hover:text-[#C6A55C] cursor-pointer" size={28} />
            <Instagram className="text-gray-400 hover:text-[#C6A55C] cursor-pointer" size={28} />
          </div>
          <p className="text-gray-400">&copy; 2024 KidsFin. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
