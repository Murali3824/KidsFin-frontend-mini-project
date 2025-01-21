import React from 'react';
import { Link} from 'react-router-dom';
import { Users } from 'lucide-react';
import { assets } from '../assets/assets';

const About = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      description: "Former educator with 15 years in financial literacy"
    },
    {
      name: "Michael Chen",
      role: "Head of Education",
      description: "Certified financial planner & curriculum specialist"
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Child Psychology Expert",
      description: "Specializes in educational psychology & learning"
    }
  ];

  return (
    <div className=" bg-[#1C1C1C] min-h-screen">
      {/* Hero Section */}
      <div className=" text-white">
        <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              Empowering Young Minds with
              <span className="text-[#C6A55C]"> Financial Wisdom</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              At KidsFin, we believe that financial education should be engaging, 
              accessible, and fun for every child. Our mission is to create the next 
              generation of financially responsible individuals.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className=" text-white py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Our Vision & <span className="text-[#C6A55C]">Mission</span>
              </h2>
              <p className="text-gray-300 mb-6">
                We envision a world where every child has the knowledge and confidence 
                to make sound financial decisions. Through interactive learning experiences, 
                gamified education, and real-world applications, we're making financial 
                literacy accessible and enjoyable for all ages.
              </p>
              <ul className="space-y-4">
                {['Innovative Learning Methods', 'Age-Appropriate Content', 'Real-World Applications', 'Continuous Support'].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-[#C6A55C] rounded-full mr-3"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img 
                src={assets.edu}
                alt="Educational illustration" 
                className="rounded-lg w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto px-4 py-24">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          Meet Our <span className="text-[#C6A55C]">Team</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className=" p-8 rounded-xl shadow-lg">
              <div className="w-24 h-24  rounded-full mx-auto mb-6 flex items-center justify-center">
                <Users className="w-12 h-12 text-[#C6A55C]" />
              </div>
              <h3 className="text-xl font-bold text-[#C6A55C] text-center mb-2">
                {member.name}
              </h3>
              <p className="text-white text-center mb-4">{member.role}</p>
              <p className="text-gray-300 text-center">{member.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#1C1C1C] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Start Your Child's Financial Journey?
          </h2>
          <p className="text-gray-300 mb-8">
            Join thousands of parents who trust KidsFin to prepare their children 
            for a financially secure future.
          </p>
          <Link to="/features" className="bg-[#C6A55C] text-gray-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-yellow-400 transition-colors duration-300">
            Get Started Today
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;