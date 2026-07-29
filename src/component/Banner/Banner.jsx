import React, { useState } from 'react';
import BannerImg from '../../assets/Banner.jpg';
import { motion } from 'framer-motion';

const CATEGORY_PILLS = ['House', 'Apartment', 'Residential'];
const FILTER_TAGS = ['City', 'House', 'Residential', 'Apartment'];

const PRICE_OPTIONS = [
  { value: '100k', label: '$100k - $200k' },
  { value: '200k', label: '$200k - $500k' },
];

const LOCATION_OPTIONS = [
  { value: 'dhaka', label: 'Dhaka' },
  { value: 'chittagong', label: 'Outside Dhaka' },
];

const ROOM_OPTIONS = [
  { value: '2', label: '2 Bed rooms' },
  { value: '3', label: '3 Bed rooms' },
  { value: '4', label: '4 Bed rooms' },
];

const inputBase =
  'w-full bg-[#F3F4F6] text-xs font-medium rounded-xl px-3.5 py-2.5 outline-none border border-transparent focus:border-black/20 focus:bg-white transition-all duration-200 cursor-pointer';

const Banner = () => {
  const [activeFilter, setActiveFilter] = useState('City');

  return (
    <section
      id="home"
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat flex flex-col px-4 sm:px-8 py-6"
      style={{ backgroundImage: `url(${BannerImg})` }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/35 pointer-events-none" />

      <div className="relative z-10 container mx-auto flex flex-col justify-between h-full grow pt-24 pb-4">
        {/* Hero Text */}
        <div className="my-auto max-w-3xl">
          {/* Pills — Fast Stagger */}
          <div className="flex flex-wrap gap-2 mb-3">
            {CATEGORY_PILLS.map((pill, i) => (
              <motion.span
                key={pill}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: i * 0.05 }}
                className="bg-white/90 backdrop-blur-md text-black text-xs font-medium px-4 py-1.5 rounded-full shadow-sm hover:bg-white transition-colors cursor-default"
              >
                {pill}
              </motion.span>
            ))}
          </div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, delay: 0.15, ease: 'easeOut' }}
            className="text-3xl sm:text-5xl lg:text-6xl font-normal leading-tight text-white tracking-wide drop-shadow-sm"
          >
            Build Your Future, One <br className="hidden sm:block" />
            Property at a Time.
          </motion.h1>
        </div>

        {/* Search Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.25, ease: 'easeOut' }}
          className="bg-white/90 backdrop-blur-xl rounded-3xl p-5 sm:p-6 text-black shadow-2xl border border-white/40"
        >
          <h3 className="text-lg sm:text-xl font-bold mb-4 text-gray-900">
            Find the best place
          </h3>

          {/* Form Fields Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mb-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] font-bold tracking-wide text-gray-700">
                Looking for
              </label>
              <input
                type="text"
                placeholder="Enter property type..."
                className={`${inputBase} text-gray-800 placeholder:text-gray-400`}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] font-bold tracking-wide text-gray-700">
                Price
              </label>
              <select className={`${inputBase} text-gray-700`}>
                <option value="">Select Price Range</option>
                {PRICE_OPTIONS.map(({ value, label }) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] font-bold tracking-wide text-gray-700">
                Locations
              </label>
              <select className={`${inputBase} text-gray-700`}>
                <option value="">Select Location</option>
                {LOCATION_OPTIONS.map(({ value, label }) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] font-bold tracking-wide text-gray-700">
                Number of rooms
              </label>
              <select className={`${inputBase} text-gray-700`}>
                <option value="">Select Rooms</option>
                {ROOM_OPTIONS.map(({ value, label }) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Filter Tags & Search Button */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 border-t border-gray-100">
            <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
              <span className="text-xs font-bold text-gray-700 mr-1">
                Filter:
              </span>
              {FILTER_TAGS.map(tag => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setActiveFilter(tag)}
                  className={`text-[11px] font-medium px-3.5 py-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                    activeFilter === tag
                      ? 'bg-black text-white shadow-sm'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="button"
              className="w-full sm:w-auto bg-black text-white text-xs font-semibold px-7 py-3 rounded-full hover:bg-gray-800 transition-colors cursor-pointer shadow-md shrink-0"
            >
              Search Properties
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
