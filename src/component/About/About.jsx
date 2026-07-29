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
      className="mx-auto max-w-7xl overflow-hidden bg-white px-6 py-20 lg:px-8"
    >
      <div className="grid items-center gap-14 lg:grid-cols-2">
        {/* Left Column Animation (Slide in from Left) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="mb-5 inline-flex rounded-full bg-[#A3E635]/20 px-4 py-1.5 text-xs font-semibold text-black">
            About Star Homes
          </span>

          <h2 className="mb-6 text-4xl font-semibold leading-tight tracking-tight text-black lg:text-5xl">
            Discover Your
            <span className="font-normal text-gray-500"> Dream Property</span>
            <br />
            with Trusted Experts
          </h2>

          <p className="mb-8 max-w-xl text-[15px] leading-7 text-gray-600">
            At Star Homes, we help families and investors discover premium
            properties with confidence. From modern apartments to luxury villas,
            our experienced team provides trusted guidance throughout every step
            of your real estate journey.
          </p>

          {/* Features Staggered Animation */}
          <div className="mb-10 grid gap-4 sm:grid-cols-2">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                className="flex items-center gap-3"
              >
                <FiCheckCircle className="shrink-0 text-xl text-[#A3E635]" />
                <span className="text-[15px] font-medium text-gray-800">
                  {feature}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Statistics Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="grid grid-cols-3 gap-5 border-t border-gray-100 pt-7"
          >
            {statistics.map(item => (
              <div key={item.title}>
                <h3 className="text-3xl font-bold text-black">{item.value}</h3>
                <p className="mt-1 text-xs text-gray-500">{item.title}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Column Animation (Slide in from Right) */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="overflow-hidden rounded-[32px] shadow-lg"
          >
            <img
              src={aboutImage}
              alt="Star Homes"
              className="h-[380px] w-full object-cover sm:h-[480px]"
            />
          </motion.div>

          {/* Floating Award Badge Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4, ease: 'backOut' }}
            className="absolute -bottom-6 left-5 flex items-center gap-4 rounded-3xl border border-gray-100 bg-white p-5 shadow-xl sm:left-8 sm:p-6"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#A3E635] text-2xl text-black">
              <FiAward />
            </div>

            <div>
              <h4 className="text-base font-semibold text-black">
                Top Rated Agency
              </h4>
              <p className="mt-1 text-sm text-gray-500">
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
