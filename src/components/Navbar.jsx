import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, User, ChevronDown } from 'lucide-react';
import { assets } from '../assets/assets';
import { toast } from 'react-toastify';

const Navbar = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [user, setUser] = useState(null);
    // const navigate = useNavigate();

    // Handle scroll to make the navbar sticky
    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 100);
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
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
    

    // Logout handler
    const logoutHandler = () => {
        try {
            localStorage.removeItem('user');
            localStorage.removeItem('token');
            setUser(null);
            setIsDropdownOpen(false);
            toast.success('Logged out successfully');
            // navigate('/');
        } catch (error) {
            console.error('Logout error:', error);
            toast.error('Error logging out');
        }
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            const dropdown = document.getElementById('user-dropdown');
            if (dropdown && !dropdown.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Close mobile menu when route changes
    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className={`border-b lg:border-[#C6A55C]/20 shadow-md flex items-center justify-between py-3 font-medium transition-all duration-300 ${
            isSticky ? 'fixed top-0 bg-[#1C1C1C] shadow-lg' : 'bg-[#1C1C1C]'
        } w-full z-20`}>
            <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="flex justify-between items-center gap-10 h-20">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link to='/' className="flex-shrink-0 flex items-center">
                            <img 
                                className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#1C1C1C] flex items-center justify-center border-2 border-[#C6A55C]" 
                                src={assets.logo} 
                                alt="Logo" 
                            />
                            <span className="ml-3 text-4xl font-bold text-[#C6A55C]">KidsFin</span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-2 text-lg text-white">
                        <NavLink to="/" className="hover:text-[#C6A55C] px-4 py-2 font-medium transition-colors duration-300">Home</NavLink>
                        <NavLink to="/about" className="hover:text-[#C6A55C] px-4 py-2 font-medium transition-colors duration-300">About</NavLink>
                        <NavLink to="/features" className="hover:text-[#C6A55C] px-4 py-2 font-medium transition-colors duration-300">Features</NavLink>
                        <NavLink to="/contact" className="hover:text-[#C6A55C] px-4 py-2 font-medium transition-colors duration-300">Contact Us</NavLink>
                        <NavLink to="/faq" className="hover:text-[#C6A55C] px-4 py-2 font-medium transition-colors duration-300">FAQ</NavLink>
                    </div>

                    {/* User Authentication Section */}
                    {user ? (
                        <div className="relative" id="user-dropdown">
                            <button 
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)} 
                                className="text-white flex items-center hover:text-[#C6A55C] transition-colors duration-300"
                            >
                                <User size={24} />
                                <span className="ml-2">{user.firstname}</span>
                                <ChevronDown size={20} className="ml-1" />
                            </button>

                            {isDropdownOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-[#1C1C1C] rounded-lg shadow-lg border border-[#C6A55C]/20 text-white">
                                    <div className="py-1">
                                        <button 
                                            onClick={logoutHandler} 
                                            className="w-full text-left px-4 py-2 hover:bg-[#C6A55C]/10 hover:text-[#C6A55C] transition-colors duration-300"
                                        >
                                            Logout
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    ) : (
                        <NavLink 
                            to="/loginsignup" 
                            className="text-white flex items-center hover:text-[#C6A55C] transition-colors duration-300"
                        >
                            <User size={24} />
                            <span className="ml-2">Account</span>
                        </NavLink>
                    )}

                    {/* Mobile Menu Toggle */}
                    <button 
                        className="md:hidden flex items-center text-white" 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden fixed inset-0 bg-[#1C1C1C] z-30 pt-20">
                    <div className="flex flex-col items-center space-y-4 text-white">
                        <NavLink 
                            to="/" 
                            className="text-2xl hover:text-[#C6A55C]" 
                            onClick={closeMenu}
                        >
                            Home
                        </NavLink>
                        <NavLink 
                            to="/about" 
                            className="text-2xl hover:text-[#C6A55C]" 
                            onClick={closeMenu}
                        >
                            About
                        </NavLink>
                        <NavLink 
                            to="/features" 
                            className="text-2xl hover:text-[#C6A55C]" 
                            onClick={closeMenu}
                        >
                            Features
                        </NavLink>
                        <NavLink 
                            to="/contact" 
                            className="text-2xl hover:text-[#C6A55C]" 
                            onClick={closeMenu}
                        >
                            Contact Us
                        </NavLink>
                        <NavLink 
                            to="/faq" 
                            className="text-2xl hover:text-[#C6A55C]" 
                            onClick={closeMenu}
                        >
                            FAQ
                        </NavLink>

                        {user ? (
                            <div className="flex flex-col items-center space-y-4 mt-4">
                                <NavLink 
                                    to="/dashboard" 
                                    className="text-2xl hover:text-[#C6A55C]" 
                                    onClick={closeMenu}
                                >
                                    Dashboard
                                </NavLink>
                                <button 
                                    onClick={logoutHandler} 
                                    className="text-2xl hover:text-[#C6A55C]"
                                >
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <NavLink 
                                to="/loginsignup" 
                                className="text-2xl hover:text-[#C6A55C]" 
                                onClick={closeMenu}
                            >
                                Account
                            </NavLink>
                        )}
                    </div>

                    {/* Close Button */}
                    <button 
                        className="absolute top-4 right-4 text-white"
                        onClick={closeMenu}
                    >
                        <X size={32} />
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;