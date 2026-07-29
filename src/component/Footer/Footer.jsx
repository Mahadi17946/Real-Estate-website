import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import Logo from '../../assets/Logo.png';
import bg from '../../assets/Banner.jpg';
import { Link } from 'react-router-dom';

const NAV_LEFT = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Properties', href: '#properties' },
  { label: 'Services', href: '#services' },
];

const NAV_RIGHT = [
  { label: 'Gallery', href: '#gallery' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

const navLinkClass = 'hover:text-black transition-colors whitespace-nowrap';

// Nav Links Helper Component
const NavLinks = ({ links }) => (
  <ul className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 text-xs sm:text-sm font-medium text-gray-700">
    {links.map(({ label, href }) => (
      <li key={href}>
        <a href={href} className={navLinkClass}>
          {label}
        </a>
      </li>
    ))}
  </ul>
);

// Smooth Fade-Up Preset (Lightweight for GPU)
const fadeUpVariant = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: 'easeOut' },
  },
};

const Footer = () => (
  <footer id="contact" className="w-full bg-white pt-10 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* CTA Banner Animation */}
      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative rounded-[24px] sm:rounded-[32px] overflow-hidden bg-cover bg-center py-12 sm:py-20 px-4 sm:px-12 text-center text-white shadow-sm transform-gpu"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/30" />
        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-medium tracking-tight mb-3 sm:mb-4 leading-snug sm:leading-tight">
            Ready to Make Your Dream <br className="hidden sm:inline" />
            Property a Reality?
          </h2>
          <p className="text-gray-200 text-xs sm:text-sm md:text-base font-light mb-6 sm:mb-8 max-w-xl leading-relaxed">
            Explore a curated selection of properties that align with your
            vision and goals.
          </p>
          <Link to="/signup">
            <button
              type="button"
              className="group flex items-center gap-2 bg-white text-black hover:bg-gray-100 transition-all font-semibold text-xs sm:text-sm px-5 sm:px-6 py-2.5 sm:py-3 rounded-full cursor-pointer shadow-md whitespace-nowrap active:scale-95"
            >
              Get Started
              <FiArrowRight className="text-sm sm:text-base group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      </motion.div>

      {/* Headline & Contact Info (Lightweight Vertical Fade) */}
      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-10 sm:py-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 sm:gap-8 border-b border-gray-100"
      >
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold text-black max-w-xl leading-tight tracking-tight">
          Discover Nature's{' '}
          <span className="text-gray-500 font-normal">Wonders</span>
          <br />
          with Expert Guidance
        </h2>

        <div className="text-xs sm:text-sm text-gray-600 space-y-1 md:text-right">
          <p>12345, Gazipur, Dhaka Road, Bangladesh.</p>
          <p className="text-black font-bold text-sm sm:text-base pt-1">
            (+1) 839-849-8483
          </p>
        </div>
      </motion.div>

      {/* Navigation Links and Logo */}
      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-8 flex flex-col md:flex-row justify-between items-center gap-6 border-b border-gray-100"
      >
        <div className="order-2 md:order-1">
          <NavLinks links={NAV_LEFT} />
        </div>
        <img
          src={Logo}
          alt="EverGreen Logo"
          className="h-7 sm:h-8 w-auto object-contain order-1 md:order-2"
        />
        <div className="order-3">
          <NavLinks links={NAV_RIGHT} />
        </div>
      </motion.div>

      {/* Copyright & Policy Links */}
      <div className="py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500 text-center sm:text-left">
        <p>© 2025 EverGreen. All rights reserved.</p>
        <div className="flex items-center gap-2">
          <a href="#terms" className={navLinkClass}>
            Terms & Conditions
          </a>
          <span>|</span>
          <a href="#privacy" className={navLinkClass}>
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
