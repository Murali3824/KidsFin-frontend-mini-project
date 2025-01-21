import React, { useState } from 'react';
import { Menu, X, ChevronDown, Search, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const FinancialEducationPlatform = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? '' : id);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    setIsSubscribed(true);
    // Add actual subscription logic here
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-blue-600">KidsFin</div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-blue-600">Home</a>
              <a href="#" className="text-gray-700 hover:text-blue-600">About</a>
              <a href="#" className="text-gray-700 hover:text-blue-600">Features</a>
              <a href="#" className="text-gray-700 hover:text-blue-600">Contact</a>
              <a href="#" className="text-gray-700 hover:text-blue-600">FAQ</a>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">
                Get Started
              </button>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-blue-50">Home</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-blue-50">About</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-blue-50">Features</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-blue-50">Contact</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-blue-50">FAQ</a>
              <button className="w-full text-left px-3 py-2 bg-blue-600 text-white rounded-md">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Making Financial Literacy Fun for Kids!
          </h1>
          <p className="text-xl mb-8">Learn money management through interactive games and activities</p>
          <button className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-yellow-300">
            Join Now
          </button>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-3xl mx-auto px-4 py-16">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
            <div className="relative">
              <Search className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search FAQs..."
                className="pl-10 pr-4 py-2 border rounded-full"
              />
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {['4-8', '9-12', '13-16', '16+'].map((age) => (
              <div key={age} className="border rounded-lg">
                <button
                  onClick={() => toggleAccordion(`age-${age}`)}
                  className="w-full px-6 py-4 flex justify-between items-center bg-white hover:bg-gray-50"
                >
                  <span className="font-semibold">Age {age} Years</span>
                  <ChevronDown
                    className={`transform transition-transform ${
                      activeAccordion === `age-${age}` ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {activeAccordion === `age-${age}` && (
                  <div className="px-6 py-4 bg-gray-50">
                    <p>Content for age group {age} years...</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-md"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-md"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  className="w-full px-4 py-2 border rounded-md"
                  rows="4"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
                Send Message
              </button>
            </form>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Mail className="text-blue-600" size={24} />
                <div>
                  <h3 className="font-medium">Email Us</h3>
                  <p className="text-gray-600">contact@kidsfin.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="text-blue-600" size={24} />
                <div>
                  <h3 className="font-medium">Call Us</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="text-blue-600" size={24} />
                <div>
                  <h3 className="font-medium">Visit Us</h3>
                  <p className="text-gray-600">123 Finance Street, Education City</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">KidsFin</h3>
              <p className="text-gray-400">Empowering the next generation with financial wisdom</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <Facebook className="text-gray-400 hover:text-white cursor-pointer" size={24} />
                <Twitter className="text-gray-400 hover:text-white cursor-pointer" size={24} />
                <Linkedin className="text-gray-400 hover:text-white cursor-pointer" size={24} />
                <Instagram className="text-gray-400 hover:text-white cursor-pointer" size={24} />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              {!isSubscribed ? (
                <form onSubmit={handleSubscribe} className="space-y-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 rounded-md text-gray-900"
                  />
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                    Subscribe
                  </button>
                </form>
              ) : (
                <p className="text-green-400">Thanks for subscribing!</p>
              )}
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 KidsFin. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FinancialEducationPlatform;