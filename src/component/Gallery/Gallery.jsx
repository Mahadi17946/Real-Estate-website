import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowLeft, FiArrowRight, FiMaximize2, FiX } from 'react-icons/fi';
import gallery1 from '../../assets/Gallery1.jpg';
import gallery2 from '../../assets/Gallery2.jpg';
import gallery3 from '../../assets/Gallery3.jpg';

const GALLERY_IMAGES = [gallery1, gallery2, gallery3];

const PRICING_CARDS = [
  {
    id: 1,
    img: gallery3,
    price: 'Pricing Start at $256K',
    title: 'Big things can happen in small spaces.',
    desc: 'With thoughtful design and smart organization, you can maximize every inch, making room for creativity.',
  },
  {
    id: 2,
    img: gallery1,
    price: 'Pricing Start at $320K',
    title: 'Modern luxury with natural views.',
    desc: 'Experience elegant architecture with spacious open plans designed for modern living.',
  },
  {
    id: 3,
    img: gallery2,
    price: 'Pricing Start at $450K',
    title: 'Cozy spaces built for comfort.',
    desc: 'Surround yourself with nature while enjoying state-of-the-art smart home amenities.',
  },
];

const STATS = [
  { value: '100%', label: 'Satisfaction Clients' },
  { value: '500+', label: 'Property Sells' },
  { value: '150+', label: 'Countries & Cities' },
  { value: '2,00+', label: 'Positive Reviews' },
];

const arrowBtnClass =
  'w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-gray-100 hover:border-black transition-all cursor-pointer active:scale-95';

// Dynamic Slide Variants for Framer Motion
const cardVariants = {
  enter: direction => ({
    x: direction === 'right' ? 50 : -50,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: direction => ({
    x: direction === 'right' ? -50 : 50,
    opacity: 0,
  }),
};

const Gallery = () => {
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [direction, setDirection] = useState('right');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const currentCard = PRICING_CARDS[activeCardIndex];

  const handleNext = () => {
    setDirection('right');
    setActiveCardIndex(prev => (prev + 1) % PRICING_CARDS.length);
  };

  const handlePrev = () => {
    setDirection('left');
    setActiveCardIndex(prev =>
      prev === 0 ? PRICING_CARDS.length - 1 : prev - 1,
    );
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-10"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-black max-w-2xl leading-tight">
            Your primary home might begin to feel left out.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left — Main Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-5 relative rounded-[32px] overflow-hidden min-h-[420px] lg:min-h-full shadow-sm group"
          >
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="absolute top-4 right-4 z-10 bg-white/70 hover:bg-white text-black p-3 rounded-full backdrop-blur-md transition-all cursor-pointer shadow-md hover:scale-110"
            >
              <FiMaximize2 className="text-lg" />
            </button>

            <AnimatePresence mode="wait">
              <motion.img
                key={activeImgIndex}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                src={GALLERY_IMAGES[activeImgIndex]}
                alt="Main gallery view"
                className="w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* Thumbnail Controls */}
            <div className="absolute bottom-4 right-4 z-10 bg-white/40 backdrop-blur-md p-1.5 rounded-full flex items-center gap-2 border border-white/40 shadow-lg">
              {GALLERY_IMAGES.map((img, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveImgIndex(index)}
                  className={`w-10 h-10 rounded-full overflow-hidden border-2 transition-all cursor-pointer ${
                    activeImgIndex === index
                      ? 'border-[#82d636] scale-105 shadow-md'
                      : 'border-white/70 opacity-80 hover:opacity-100'
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Right — Pricing Cards + Controls */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col justify-between gap-6 overflow-hidden"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 grow">
              {/* Text Card */}
              <div className="bg-[#F8F8F8] rounded-[28px] p-6 flex flex-col justify-between items-center text-center overflow-hidden">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={`title-${activeCardIndex}`}
                    custom={direction}
                    variants={cardVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                  >
                    <h3 className="text-xl sm:text-2xl font-normal text-black mb-3 leading-snug">
                      {currentCard.title}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed max-w-xs mx-auto">
                      {currentCard.desc}
                    </p>
                  </motion.div>
                </AnimatePresence>
                <button
                  type="button"
                  className="mt-5 bg-white text-gray-800 text-xs font-medium px-5 py-2 rounded-full border border-gray-200 shadow-sm hover:bg-gray-50 transition-all cursor-pointer"
                >
                  Details
                </button>
              </div>

              {/* Pricing Card */}
              <div className="bg-[#F8F8F8] rounded-[28px] p-4 flex flex-col justify-between items-center text-center overflow-hidden">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={`card-${activeCardIndex}`}
                    custom={direction}
                    variants={cardVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className="w-full flex flex-col items-center"
                  >
                    <div className="w-full h-[170px] sm:h-[180px] rounded-[20px] overflow-hidden mb-3">
                      <img
                        src={currentCard.img}
                        alt={currentCard.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-xs sm:text-sm font-medium text-gray-800 mb-3">
                      {currentCard.price}
                    </p>
                    <button
                      type="button"
                      className="flex items-center gap-2 bg-black text-white text-xs font-medium px-5 py-2.5 rounded-full hover:bg-gray-800 transition-all cursor-pointer"
                    >
                      Explore Properties
                      <span className="text-sm">→</span>
                    </button>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Controls */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <p className="text-xs text-gray-500 max-w-xs text-center sm:text-left leading-relaxed">
                Whether it's creating a cozy corner for relaxation or
                transforming a small area into a workspace.
              </p>
              <div className="flex items-center gap-2.5 shrink-0">
                <button
                  type="button"
                  onClick={handlePrev}
                  className={arrowBtnClass}
                >
                  <FiArrowLeft className="text-base" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className={arrowBtnClass}
                >
                  <FiArrowRight className="text-base" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Fullscreen Animated Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-[999] flex items-center justify-center p-4 sm:p-8"
            onClick={() => setIsModalOpen(false)}
          >
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 z-10 text-white bg-white/20 hover:bg-white/40 p-3 rounded-full transition-all cursor-pointer"
            >
              <FiX className="text-2xl" />
            </button>
            <div
              className="relative max-w-6xl max-h-[90vh] w-full h-full flex items-center justify-center"
              onClick={e => e.stopPropagation()}
            >
              <motion.img
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.85, opacity: 0 }}
                transition={{ duration: 0.3 }}
                src={GALLERY_IMAGES[activeImgIndex]}
                alt="Zoomed gallery view"
                className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Stats Section Animation */}
      {/* Stats Section Animation */}
      <div className="w-full bg-white pt-24 px-4 overflow-hidden">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15, // একটির পর একটি স্মুথলি আসবে
              },
            },
          }}
          className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-gray-300"
        >
          {STATS.map(({ value, label }) => (
            <motion.div
              key={label}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1],
                  },
                },
              }}
              className="flex flex-col items-center justify-center text-center px-4"
            >
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-black tracking-tight mb-2">
                {value}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500">{label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
