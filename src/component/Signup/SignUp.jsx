import React, { useState } from 'react';
import { FiUser, FiMail, FiMessageSquare, FiPhone, FiX } from 'react-icons/fi';
import bannerBg from '../../assets/Banner.jpg';

const inputClass =
  'w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-black text-sm transition-all bg-white/80';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = e => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Contact Form Data:', formData);
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center px-4 py-16 sm:py-20"
      style={{ backgroundImage: `url(${bannerBg})` }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Contact Container */}
      <div className="relative z-10 w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 bg-white/90 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-white/40">
        {/* Close Button */}
        <button
          type="button"
          onClick={() => window.history.back()}
          className="absolute top-3 right-3 z-30 w-10 h-10 flex items-center justify-center rounded-full bg-[#1B2422] text-white hover:bg-[#B5F285] hover:text-black transition-all cursor-pointer shadow-md"
          aria-label="Close contact form"
        >
          <FiX size={22} />
        </button>

        {/* Contact Information */}
        <div className="bg-[#1B2422] text-white p-7 sm:p-10 flex flex-col justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[3px] text-[#B5F285] mb-4">
              Get in Touch
            </p>

            <h2 className="text-3xl sm:text-4xl font-semibold leading-tight">
              Let's Find Your
              <span className="block text-[#B5F285] mt-1">Dream Property.</span>
            </h2>

            <p className="text-sm text-gray-300 leading-7 mt-5 max-w-sm">
              Have questions about a property or need help finding the right
              place? Send us a message and our team will be happy to help.
            </p>
          </div>

          <div className="space-y-5 mt-10">
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <FiMail className="text-[#B5F285] text-lg" />
              </div>
              <div>
                <p className="text-xs text-gray-400">Email Us</p>
                <p className="text-sm font-medium">Contact us for details</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <FiPhone className="text-[#B5F285] text-lg" />
              </div>
              <div>
                <p className="text-xs text-gray-400">Call Us</p>
                <p className="text-sm font-medium">We're here to help</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="p-6 sm:p-10">
          <h3 className="text-2xl font-bold text-gray-900">
            Send Us a Message
          </h3>

          <p className="text-sm text-gray-500 mt-2 mb-7">
            Fill out the form below and tell us how we can help.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-2">
                Full Name
              </label>

              <div className="relative">
                <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className={`${inputClass} pl-11`}
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-2">
                Email Address
              </label>

              <div className="relative">
                <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@gmail.com"
                  className={`${inputClass} pl-11`}
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-2">
                Phone Number
              </label>

              <div className="relative">
                <FiPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className={`${inputClass} pl-11`}
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-2">
                Your Message
              </label>

              <div className="relative">
                <FiMessageSquare className="absolute left-4 top-4 text-gray-400" />

                <textarea
                  name="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  className={`${inputClass} pl-11 resize-none`}
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#B5F285] hover:bg-[#a2e36f] text-black font-semibold py-3.5 rounded-full transition-all cursor-pointer shadow-sm text-sm"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
