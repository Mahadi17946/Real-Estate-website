import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiCheckCircle } from 'react-icons/fi';
import aboutImage from '../../assets/Banner.jpg';

const features = [
  'Verified Properties',
  'Transparent Deals',
  'Expert Legal Support',
  '24/7 Client Guidance',
];

const statistics = [
  {
    value: '10+',
    title: 'Years Experience',
  },
  {
    value: '500+',
    title: 'Properties Sold',
  },
  {
    value: '99%',
    title: 'Happy Clients',
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="mx-auto max-w-7xl overflow-hidden bg-white px-6 py-16 sm:py-20 lg:px-8"
    >
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Left Column (Fast & Snappy Slide-in) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <span className="mb-4 inline-flex items-center rounded-full bg-[#A3E635]/20 px-3.5 py-1 text-xs font-semibold text-black tracking-wide">
            About Star Homes
          </span>

          <h2 className="mb-5 text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight text-black">
            Discover Your{' '}
            <span className="font-normal text-gray-500">Dream Property</span>
            <br className="hidden sm:inline" /> with Trusted Experts
          </h2>

          <p className="mb-8 max-w-xl text-sm sm:text-base leading-relaxed text-gray-600">
            At Star Homes, we help families and investors discover premium
            properties with confidence. From modern apartments to luxury villas,
            our experienced team provides trusted guidance throughout every step
            of your real estate journey.
          </p>

          {/* Features Staggered Fast Animation */}
          <div className="mb-10 grid gap-3 sm:grid-cols-2">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.25,
                  delay: index * 0.05,
                  ease: 'easeOut',
                }}
                className="flex items-center gap-2.5 rounded-lg p-1.5 transition-colors duration-200 hover:bg-gray-50"
              >
                <FiCheckCircle className="shrink-0 text-lg sm:text-xl text-[#A3E635]" />
                <span className="text-sm font-medium text-gray-800">
                  {feature}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Statistics Grid */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.15, ease: 'easeOut' }}
            className="grid grid-cols-3 gap-4 border-t border-gray-100 pt-6"
          >
            {statistics.map(item => (
              <div key={item.title} className="group">
                <h3 className="text-2xl sm:text-3xl font-bold text-black group-hover:text-[#8ce015] transition-colors duration-200">
                  {item.value}
                </h3>
                <p className="mt-1 text-xs font-medium text-gray-500">
                  {item.title}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Column (Image + Floating Badge) */}
        <div className="relative mt-4 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="overflow-hidden rounded-3xl shadow-lg group"
          >
            <img
              src={aboutImage}
              alt="Star Homes"
              className="h-[340px] sm:h-[440px] lg:h-[480px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </motion.div>

          {/* Floating Award Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2, ease: 'easeOut' }}
            className="absolute -bottom-5 left-4 sm:left-6 flex items-center gap-3.5 rounded-2xl border border-gray-100/80 bg-white/95 p-4 sm:p-5 shadow-xl backdrop-blur-md max-w-[280px] sm:max-w-none"
          >
            <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-xl bg-[#A3E635] text-xl sm:text-2xl text-black shadow-sm">
              <FiAward />
            </div>

            <div>
              <h4 className="text-sm sm:text-base font-semibold text-black">
                Top Rated Agency
              </h4>
              <p className="mt-0.5 text-xs text-gray-500 leading-snug">
                Trusted by hundreds of happy homeowners.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
