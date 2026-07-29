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

// Fast & Lightweight Slide Transition (Snappy Feel)
const cardVariants = {
  enter: direction => ({
    x: direction === 'right' ? 15 : -15,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: direction => ({
    x: direction === 'right' ? -15 : 15,
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
    <section id="gallery" className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header Animation */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="mb-10 transform-gpu"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-black max-w-2xl leading-tight">
            Your primary home might begin to feel left out.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left — Main Image Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="lg:col-span-5 relative rounded-[32px] overflow-hidden min-h-[420px] lg:min-h-full shadow-sm group transform-gpu"
          >
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-white text-black p-3 rounded-full transition-all cursor-pointer shadow-md hover:scale-105 active:scale-95"
            >
              <FiMaximize2 className="text-lg" />
            </button>

            <AnimatePresence mode="wait">
              <motion.img
                key={activeImgIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
                src={GALLERY_IMAGES[activeImgIndex]}
                alt="Main gallery view"
                className="w-full h-full object-cover transform-gpu"
              />
            </AnimatePresence>

            {/* Thumbnail Controls */}
            <div className="absolute bottom-4 right-4 z-10 bg-white/60 p-1.5 rounded-full flex items-center gap-2 border border-white/60 shadow-lg">
              {GALLERY_IMAGES.map((img, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveImgIndex(index)}
                  className={`w-10 h-10 rounded-full overflow-hidden border-2 transition-all cursor-pointer ${
                    activeImgIndex === index
                      ? 'border-[#82d636] scale-105 shadow-md'
                      : 'border-white/80 opacity-80 hover:opacity-100'
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
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: 0.1, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col justify-between gap-6 overflow-hidden transform-gpu"
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
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="transform-gpu"
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
                  className="mt-5 bg-white text-gray-800 text-xs font-medium px-5 py-2 rounded-full border border-gray-200 shadow-sm hover:bg-gray-50 transition-all cursor-pointer active:scale-95"
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
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="w-full flex flex-col items-center transform-gpu"
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
                      className="flex items-center gap-2 bg-black text-white text-xs font-medium px-5 py-2.5 rounded-full hover:bg-gray-800 transition-all cursor-pointer active:scale-95"
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
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/85 z-[999] flex items-center justify-center p-4 sm:p-8"
            onClick={() => setIsModalOpen(false)}
          >
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 z-10 text-white bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all cursor-pointer"
            >
              <FiX className="text-2xl" />
            </button>
            <div
              className="relative max-w-6xl max-h-[90vh] w-full h-full flex items-center justify-center"
              onClick={e => e.stopPropagation()}
            >
              <motion.img
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.2 }}
                src={GALLERY_IMAGES[activeImgIndex]}
                alt="Zoomed gallery view"
                className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

     
    </section>
  );
};

export default Gallery;
