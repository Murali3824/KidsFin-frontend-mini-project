import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const LoginSignup = () => {
  const [currentState, setCurrentState] = useState('Login');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  // Check if user is already logged in
  useEffect(() => {
    const users = localStorage.getItem('user');
    if (users) {
      toast.info('You are already logged in');
      navigate('/');
    }
  }, [navigate]);

  const validateEmail = (email) => {
    return email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    // Basic validation
    if (!validateEmail(email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    if (!validatePassword(password)) {
      toast.error('Password must be at least 6 characters long');
      return;
    }

    if (currentState === 'Sign Up') {
      if (!firstname || !lastname) {
        toast.error('Please fill in all fields');
        return;
      }

      // Check if user already exists
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      if (users.some(user => user.email === email)) {
        toast.error('User already exists with this email');
        return;
      }

      // Create new user
      const newUser = {
        id: Date.now(),
        firstname,
        lastname,
        email,
        password // In a real app, never store plain text passwords
      };

      // Save user to localStorage
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));

      // Log user in
      const userData = { ...newUser };
      delete userData.password; // Don't store password in session
      localStorage.setItem('user', JSON.stringify(userData));

      toast.success('Registration successful!');
    } else {
      // Login logic
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const user = users.find(u => u.email === email && u.password === password);

      if (!user) {
        toast.error('Invalid email or password');
        return;
      }

      // Store user data without password
      const userData = { ...user };
      delete userData.password;
      localStorage.setItem('user', JSON.stringify(userData));
      window.location.reload();
      toast.success('Login successful!');
    }

    // Redirect and refresh
    navigate('/');
  };

  return (
    <div className="bg-[#1C1C1C] min-h-screen flex justify-center items-center">
      <div className="p-8 rounded-lg shadow-lg w-full sm:w-[500px]">
        <h2 className="text-3xl font-bold text-[#C6A55C] text-center mb-6">
          {currentState === 'Sign Up' ? 'Create an Account' : 'Welcome Back'}
        </h2>
        <form onSubmit={onSubmitHandler} className="space-y-6">
          {currentState === 'Sign Up' && (
            <>
              <input
                type="text"
                className="w-full p-4 border border-[#C6A55C] bg-[#1C1C1C] text-[#C6A55C] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C6A55C]"
                placeholder="First Name"
                required
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
              />
              <input
                type="text"
                className="w-full p-4 border border-[#C6A55C] bg-[#1C1C1C] text-[#C6A55C] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C6A55C]"
                placeholder="Last Name"
                required
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
            </>
          )}
          <input
            type="email"
            className="w-full p-4 border border-[#C6A55C] bg-[#1C1C1C] text-[#C6A55C] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C6A55C]"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="w-full p-4 border border-[#C6A55C] bg-[#1C1C1C] text-[#C6A55C] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C6A55C]"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-[#C6A55C] text-[#333333] py-3 rounded-lg focus:outline-none hover:bg-[#B68A4A] transition duration-300"
          >
            {currentState}
          </button>
        </form>
        <div className="mt-4 text-center">
          <p
            onClick={() => setCurrentState(currentState === 'Sign Up' ? 'Login' : 'Sign Up')}
            className="text-[#C6A55C] cursor-pointer hover:underline"
          >
            {currentState === 'Sign Up'
              ? 'Already have an account? Login'
              : "Don't have an account? Sign Up"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;