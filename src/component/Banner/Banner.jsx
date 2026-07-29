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
  { value: '4', label: '4 Bed 2 rooms' },
];

const inputBase =
  'w-full bg-[#F3F4F6] text-xs rounded-xl px-3.5 py-2.5 outline-none focus:ring-1 focus:ring-black cursor-pointer';

// Animation variants
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
});

const fadeLeft = (delay = 0) => ({
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay },
});

const Banner = () => {
  const [activeFilter, setActiveFilter] = useState('City');

  return (
    <section
      id="home"
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat flex flex-col px-4 sm:px-8 py-6"
      style={{ backgroundImage: `url(${BannerImg})` }}
    >
      <div className="absolute inset-0 bg-black/25 pointer-events-none" />

      <div className="relative z-10 container mx-auto flex flex-col justify-between h-full grow pt-20 pb-2">
        {/* Hero Text */}
        <div className="my-auto">
          {/* Pills — fade up one by one */}
          <motion.div
            className="flex flex-wrap gap-2.5 mb-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            {CATEGORY_PILLS.map((pill, i) => (
              <motion.span
                key={pill}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.2 + i * 0.1,
                }}
                className="bg-white/90 backdrop-blur-md text-black text-xs font-medium px-4 py-1.5 rounded-full shadow-sm"
              >
                {pill}
              </motion.span>
            ))}
          </motion.div>

          {/* Heading — slide from right */}
          <motion.h1
            {...fadeLeft(0.4)}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal font-Poppins leading-tight text-white tracking-wide pt-5 max-w-3xl"
          >
            Build Your Future, One <br className="hidden sm:block" />
            Property at a Time.
          </motion.h1>
        </div>

        {/* Search Box — fade up from bottom */}
        <motion.div
          {...fadeUp(0.6)}
          className="bg-white/80 rounded-[28px] p-5 md:p-6 text-black shadow-2xl mb-2"
        >
          <motion.h3
            {...fadeUp(0.75)}
            className="text-lg md:text-xl font-bold mb-4"
          >
            Find the best place
          </motion.h3>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-4"
          >
            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] font-bold text-black">
                Looking for
              </label>
              <input
                type="text"
                placeholder="Enter type"
                className={`${inputBase} text-gray-800`}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] font-bold text-gray-800">
                Price
              </label>
              <select className={`${inputBase} text-gray-500`}>
                <option value="">Price</option>
                {PRICE_OPTIONS.map(({ value, label }) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] font-bold text-gray-800">
                Locations
              </label>
              <select className={`${inputBase} text-gray-500`}>
                <option value="">Location</option>
                {LOCATION_OPTIONS.map(({ value, label }) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] font-bold text-gray-800">
                Number of rooms
              </label>
              <select className={`${inputBase} text-gray-700`}>
                {ROOM_OPTIONS.map(({ value, label }) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.05 }}
            className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-1"
          >
            <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
              <span className="text-xs font-bold text-gray-800 mr-1">
                Filter:
              </span>
              {FILTER_TAGS.map(tag => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setActiveFilter(tag)}
                  className={`text-[11px] font-medium px-3.5 py-1.5 rounded-full transition-all cursor-pointer ${
                    activeFilter === tag
                      ? 'bg-[#F3F4F6] text-gray-700 hover:bg-gray-200'
                      : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-100'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>

            <button
              type="button"
              className="w-full sm:w-auto bg-black text-white text-xs font-semibold px-6 py-3 rounded-full hover:bg-gray-800 transition-all cursor-pointer shadow-md"
            >
              Search Properties
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
