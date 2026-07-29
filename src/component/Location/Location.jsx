import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const MAP_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6950.870190201727!2d-82.20808320540273!3d29.4160773341842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e62700536b07ad%3A0x337c764d183c6f43!2sCamp%20Margaritaville%20Resort%20Orange%20Lake!5e0!3m2!1sen!2sbd!4v1785259088795!5m2!1sen!2sbd';

const Location = () => {
  // Stagger Container for Content Side
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="location"
      className="py-16 bg-[#F9F9F9] px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Map Embed Container Animation */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="lg:col-span-6 w-full h-[320px] sm:h-[380px] lg:h-[420px] rounded-[32px] overflow-hidden shadow-sm transform-gpu"
        >
          <iframe
            src={MAP_SRC}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title="Location Map"
          />
        </motion.div>

        {/* Content Side Animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="lg:col-span-6 flex flex-col items-start justify-center transform-gpu"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-medium text-black leading-tight tracking-tight mb-4"
          >
            Discover Properties with the Best Value
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-gray-500 text-sm sm:text-base leading-relaxed mb-8 max-w-lg"
          >
            From minimalist interiors to compact solutions, small spaces inspire
            big ideas, proving that you don't need much room.
          </motion.p>

          <motion.button
            type="button"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-3 bg-black text-white text-xs sm:text-sm font-medium px-6 py-3.5 rounded-full hover:bg-gray-800 transition-all cursor-pointer shadow-sm active:scale-95"
          >
            Find Nearest Properties
            <FiArrowRight className="text-base" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Location;
