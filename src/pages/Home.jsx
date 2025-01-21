import React, { useState, useEffect } from 'react';
import { NavLink,Link} from 'react-router-dom';

const Home = () => {

  const [user, setUser] = useState(null);

  // Check for user on component mount
  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
        try {
            const parsedUser = JSON.parse(loggedInUser);
            setUser(parsedUser);
        } catch (error) {
            console.error('Error parsing user data:', error);
            setUser(null);
        }
    }
}, []); 

  return (
    <div className="bg-[#1C1C1C] min-h-screen">
      {/* Hero Section */}
      <div className=" text-white py-32">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold text-[#C6A55C] mb-8 leading-tight">
            Welcome to KidsFin
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Empowering the next generation with financial wisdom through elegant and engaging experiences.
          </p>
          <Link to='/features' className="bg-[#C6A55C] text-[#1C1C1C] px-10 py-4 rounded-lg text-lg font-semibold hover:bg-[#B89349] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Begin Your Journey
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 py-24">
        <h2 className="text-4xl font-bold text-center text-[#C6A55C] mb-16">
          Why Choose KidsFin?
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {/* Feature 1 */}
          <div className=" border border-[#C6A55C]/20 rounded-lg p-8 text-center transition-all duration-300 hover:transform hover:scale-105 hover:border-[#C6A55C]/40">
            <div className="w-16 h-16 bg-[#C6A55C]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">🎮</span>
            </div>
            <h3 className="text-xl font-semibold text-[#C6A55C] mb-4">Interactive Learning</h3>
            <p className="text-gray-300 leading-relaxed">
              Master essential financial concepts through sophisticated and engaging interactive experiences.
            </p>
          </div>

          {/* Feature 2 */}
          <div className=" border border-[#C6A55C]/20 rounded-lg p-8 text-center transition-all duration-300 hover:transform hover:scale-105 hover:border-[#C6A55C]/40">
            <div className="w-16 h-16 bg-[#C6A55C]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">📚</span>
            </div>
            <h3 className="text-xl font-semibold text-[#C6A55C] mb-4">Premium Curriculum</h3>
            <p className="text-gray-300 leading-relaxed">
              Access carefully curated, age-appropriate financial education modules designed for excellence.
            </p>
          </div>

          {/* Feature 3 */}
          <div className=" border border-[#C6A55C]/20 rounded-lg p-8 text-center transition-all duration-300 hover:transform hover:scale-105 hover:border-[#C6A55C]/40">
            <div className="w-16 h-16 bg-[#C6A55C]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">🌟</span>
            </div>
            <h3 className="text-xl font-semibold text-[#C6A55C] mb-4">Achievement System</h3>
            <p className="text-gray-300 leading-relaxed">
              Earn prestigious rewards and recognition as you progress through your financial journey.
            </p>
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div>
        <div className="max-w-7xl mx-auto px-4 py-24 text-center">
          <h2 className="text-4xl font-bold text-[#C6A55C] mb-6">Begin Your Financial Journey</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join our distinguished community and provide your children with the foundation for financial excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          {user ? (
              ""
            ) : <NavLink to="/loginsignup" className="bg-[#C6A55C] text-[#1C1C1C] px-10 py-4 rounded-lg text-lg font-semibold hover:bg-[#B89349] transition-all duration-300 shadow-lg hover:shadow-xl">
                  Create Account
                </NavLink> 
          }
            <NavLink to="/features" className="bg-transparent border-2 border-[#C6A55C] text-[#C6A55C] px-10 py-4 rounded-lg text-lg font-semibold hover:bg-[#C6A55C]/10 transition-all duration-300">
              Learn More
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;