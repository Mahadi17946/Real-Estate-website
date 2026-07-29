import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiUser, FiMail, FiLock, FiX } from 'react-icons/fi';
import bannerBg from '../../assets/Banner.jpg'; // তোমার ব্যানার ইমেজের সঠিক Path দাও

const FIELDS = [
  {
    name: 'name',
    label: 'Full Name',
    type: 'text',
    icon: FiUser,
    placeholder: 'Mahadi Hasan',
  },
  {
    name: 'email',
    label: 'Email Address',
    type: 'email',
    icon: FiMail,
    placeholder: 'example@gmail.com',
  },
  {
    name: 'password',
    label: 'Password',
    type: 'password',
    icon: FiLock,
    placeholder: '••••••••',
  },
];

const inputClass =
  'w-full pl-11 pr-4 py-3 rounded-full border border-gray-200/80 focus:outline-none focus:border-black text-sm transition-all bg-white/70 backdrop-blur-sm';

const SignUp = () => {
  const navigate = useNavigate();
  const [isExiting, setIsExiting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = e =>
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Sign Up Data:', formData);
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
      {/* Dark Overlay over the Background Image */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Animated Glassmorphism Container Card */}
      <motion.div
        initial={{ y: '-100vh', opacity: 0 }}
        animate={isExiting ? { y: '-100vh', opacity: 0 } : { y: 0, opacity: 1 }}
        transition={{
          duration: isExiting ? 0.35 : 0.6,
          ease: isExiting ? [0.4, 0, 1, 1] : [0.16, 1, 0.3, 1],
        }}
        onAnimationComplete={handleAnimationComplete}
        className="relative z-10 max-w-md w-full bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-6 sm:p-8 border border-white/40"
      >
        {/* Safe Positioned Close Button */}
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-full text-gray-500 hover:text-black hover:bg-white/50 transition-all cursor-pointer z-10"
          aria-label="Close and return to home"
        >
          <FiX className="text-xl" />
        </button>

        {/* Header */}
        <div className="text-center mb-6 sm:mb-8 px-6 pt-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
            Create Account
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 mt-2">
            Join us today and explore dream properties!
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
          {FIELDS.map(({ name, label, type, icon: Icon, placeholder }) => (
            <div key={name}>
              <label className="block text-[11px] sm:text-xs font-semibold text-gray-700 uppercase mb-1.5 sm:mb-2">
                {label}
              </label>
              <div className="relative flex items-center">
                <Icon className="absolute left-4 text-gray-400 text-lg" />
                <input
                  type={type}
                  name={name}
                  required
                  value={formData[name]}
                  onChange={handleChange}
                  placeholder={placeholder}
                  className={inputClass}
                />
              </div>
            </div>
          ))}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#B5F285] hover:bg-[#a2e36f] text-black font-semibold py-3.5 rounded-full transition-all cursor-pointer shadow-md text-sm mt-2"
          >
            Sign Up
          </button>
        </form>

        {/* Login Redirect */}
        <div className="text-center mt-6 pt-6 border-t border-gray-200/60">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <Link
              to="/login"
              className="font-semibold text-black hover:underline cursor-pointer"
            >
              Log In
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default SignUp;
