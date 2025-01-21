import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Contact = () => {

  return (
    <div className="bg-[#1C1C1C]">
      {/* Hero Section */}
      <div className=" text-white">
        <div className="max-w-7xl mx-auto px-4 py-24 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Get in <span className="text-[#C6A55C]">Touch</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have questions about our financial education platform? We're here to help and would love to hear from you.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 -mt-16">
        <div className=" rounded-xl shadow-xl p-8 mb-16">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">Send Us a Message</h2>
                <div className="w-20 h-1 bg-[#C6A55C]"></div>
              </div>
              
              <form action="https://api.web3forms.com/submit" 
                        method="post"
                        className="form"
                        data-form
                    >
                        <div className="text-white w-full input-wrapper gap-5 grid grid-cols-[1fr]">
                            <input type="hidden" name="access_key" value="5f960288-0acc-431b-a290-df7e24ba1693"></input>
                            <input
                                type="text"
                                name="fullname"
                                className="w-full form-input px-[13px] py-[10px] sm:py-[15px] md:py-[20px]  border border-[#C6A55C]/50 bg-[#1C1C1C] rounded outline-none"
                                placeholder="Full name"
                                required
                                data-form-input
                            />

                            <input
                                type="email"
                                name="email"
                                className="w-full form-input px-[13px] py-[10px] sm:py-[15px] md:py-[20px] border border-[#C6A55C]/50 bg-[#1C1C1C] rounded outline-none"
                                placeholder="Email address"
                                required
                                data-form-input
                            />
                            <textarea
                            name="message"
                            rows="15"
                            className="w-full form-input h-[200px] mb-[25px] px-[13px] py-[20px] border border-[#C6A55C]/50 bg-[#1C1C1C] rounded outline-none"
                            placeholder="Your Message"
                            required
                            data-form-input
                            ></textarea>
                        </div>
                        <button type="submit" className="w-1/2  bg-[#C6A55C] text-white px-8 py-3 rounded-lg hover:bg-[#B89349] transition-colors duration-300" > Send Message</button>
                    </form>
            </div>

            {/* Contact Details */}
            <div className="lg:border-l lg:border-[#ffffff]/20 lg:pl-16">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">Contact Information</h2>
                <div className="w-20 h-1 bg-[#C6A55C] mb-8"></div>
              </div>
              
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12  rounded-lg flex items-center justify-center">
                    <Mail className="text-[#C6A55C]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Email Us</h3>
                    <p className="text-gray-300">contact@kidsfin.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center">
                    <Phone className="text-[#C6A55C]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Call Us</h3>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12  rounded-lg flex items-center justify-center">
                    <MapPin className="text-[#C6A55C]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Visit Us</h3>
                    <p className="text-gray-300">123 Finance Street, Education City</p>
                  </div>
                </div>
                
                <div className="pt-8 ">
                  <h3 className="font-medium text-white mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                      <div key={index} className="w-10 h-10  rounded-lg flex items-center justify-center  transition-colors duration-300 cursor-pointer">
                        <Icon className="text-[#C6A55C]" size={20} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;