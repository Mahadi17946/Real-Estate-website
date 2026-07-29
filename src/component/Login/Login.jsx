import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiMail, FiLock, FiX } from 'react-icons/fi';
import bannerBg from '../../assets/Banner.jpg';

const Login = () => {
  const navigate = useNavigate();
  const [isExiting, setIsExiting] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Login Data:', formData);
  };

  const handleClose = e => {
    e.preventDefault();
    setIsExiting(true);
  };

  const handleAnimationComplete = () => {
    if (isExiting) {
      navigate('/');
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center relative bg-cover bg-center px-4 py-8 sm:py-12 overflow-hidden"
      style={{ backgroundImage: `url(${bannerBg})` }}
    >
      {/* Dark Overlay - Fades out instantly on exit */}
      <motion.div
        animate={{ opacity: isExiting ? 0 : 1 }}
        transition={{ duration: isExiting ? 0.15 : 0.3 }}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
      />

      {/* Animated Card - Fast Drop Down & Instant Slide Up */}
      <motion.div
        initial={{ y: '-120%', opacity: 0 }}
        animate={
          isExiting ? { y: '-120%', opacity: 0 } : { y: '0%', opacity: 1 }
        }
        transition={{
          duration: isExiting ? 0.18 : 0.4,
          ease: isExiting ? 'easeIn' : [0.16, 1, 0.3, 1],
        }}
        onAnimationComplete={handleAnimationComplete}
        className="relative z-10 max-w-md w-full bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-6 sm:p-8 border border-white/40 transform-gpu"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-full text-gray-500 hover:text-black hover:bg-white/50 transition-all cursor-pointer z-10 active:scale-95"
          aria-label="Close and return to home"
        >
          <FiX className="text-xl" />
        </button>

        {/* Header */}
        <div className="text-center mb-6 sm:mb-8 px-6 pt-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
            Welcome Back
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 mt-2">
            Please enter your details to log in.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
          {/* Email Field */}
          <div>
            <label className="block text-[11px] sm:text-xs font-semibold text-gray-700 uppercase mb-1.5 sm:mb-2">
              Email Address
            </label>
            <div className="relative flex items-center">
              <FiMail className="absolute left-4 text-gray-400 text-lg" />
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="example@gmail.com"
                className="w-full pl-11 pr-4 py-3 rounded-full border border-gray-200/80 focus:outline-none focus:border-black text-sm transition-all bg-white/70 backdrop-blur-sm"
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-[11px] sm:text-xs font-semibold text-gray-700 uppercase mb-1.5 sm:mb-2">
              Password
            </label>
            <div className="relative flex items-center">
              <FiLock className="absolute left-4 text-gray-400 text-lg" />
              <input
                type="password"
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full pl-11 pr-4 py-3 rounded-full border border-gray-200/80 focus:outline-none focus:border-black text-sm transition-all bg-white/70 backdrop-blur-sm"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-black hover:bg-gray-800 text-white font-semibold py-3.5 rounded-full transition-all cursor-pointer shadow-md text-sm mt-2 active:scale-95"
          >
            Log In
          </button>
        </form>

        {/* Signup Redirect */}
        <div className="text-center mt-6 pt-6 border-t border-gray-200/60">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <Link
              to="/signup"
              className="font-semibold text-black hover:underline cursor-pointer"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
