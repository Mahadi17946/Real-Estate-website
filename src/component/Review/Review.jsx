import React, { useState, useEffect, useCallback } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { FaQuoteLeft } from 'react-icons/fa';
import review1 from '../../assets/Review1.jpg';
import review2 from '../../assets/Review2.png';
import review3 from '../../assets/Review3.png';

const REVIEWS = [
  {
    id: 1,
    image: review1,
    name: 'Sajibur Rahman',
    role: 'UI UX Designer',
    quote:
      'Working with this team was a pleasure. They understood our vision and helped us find a property that exceeded our expectations.',
  },
  {
    id: 2,
    image: review2,
    name: 'Michael Chen',
    role: 'Software Engineer',
    quote:
      'The team provided exceptional service and made our property buying experience completely stress-free.',
  },
  {
    id: 3,
    image: review3,
    name: 'Sarah Jenkins',
    role: 'Product Manager',
    quote:
      'Highly professional and attentive to every detail. They guided us through every step effortlessly.',
  },
];

const AVATAR_IMAGES = [review1, review2, review3, review1];

const SLIDE_STYLE = `
  @keyframes smoothSlideIn {
    from { opacity: 0; transform: translateX(20px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  .animate-smooth-slide {
    animation: smoothSlideIn 0.35s cubic-bezier(0.25, 1, 0.5, 1) forwards;
  }
`;

// Compact arrow buttons
const arrowBtnClass =
  'w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-black hover:text-white transition-all cursor-pointer shrink-0 z-10';

const Review = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = useCallback(() => {
    setCurrentIndex(prev => (prev + 1) % REVIEWS.length);
  }, []);

  const handlePrev = () => {
    setCurrentIndex(prev => (prev === 0 ? REVIEWS.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(handleNext, 3000);
    return () => clearInterval(timer);
  }, [handleNext]);

  const { image, name, role, quote } = REVIEWS[currentIndex];

  return (
    <section className="py-8 px-4 sm:px-6 max-w-4xl mx-auto bg-white overflow-hidden">
      <style>{SLIDE_STYLE}</style>

      {/* Compact Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-6">
        <h2 className="text-xl sm:text-2xl font-semibold text-black tracking-tight max-w-xs leading-snug">
          What our clients say about us
        </h2>
        <div className="flex items-center gap-2.5">
          <div className="flex -space-x-2">
            {AVATAR_IMAGES.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Client ${i + 1}`}
                className="h-7 w-7 rounded-full ring-2 ring-white object-cover"
              />
            ))}
          </div>
          <p className="text-xs text-gray-600 leading-tight">
            More than <span className="font-bold text-black">500+</span> Reviews
          </p>
        </div>
      </div>

      {/* Compact Slider Container */}
      <div className="relative flex items-center justify-between gap-2 sm:gap-4">
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous review"
          className={arrowBtnClass}
        >
          <FiArrowLeft className="text-sm" />
        </button>

        {/* Compact Active Card */}
        <div
          key={currentIndex}
          className="animate-smooth-slide flex-1 flex flex-col sm:flex-row gap-4 items-stretch max-w-2xl mx-auto"
        >
          {/* Small Image */}
          <div className="w-full sm:w-[150px] h-[150px] rounded-xl overflow-hidden shadow-sm shrink-0">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Compact Quote Content */}
          <div className="flex-1 bg-[#F8F9FA] rounded-xl p-4 sm:p-5 flex flex-col justify-between">
            <div>
              <FaQuoteLeft className="text-[#A3E635] text-xl mb-2" />
              <p className="text-gray-700 text-xs sm:text-sm leading-relaxed mb-4">
                {quote}
              </p>
            </div>
            <div>
              <h4 className="text-sm font-bold text-black leading-none">
                {name}
              </h4>
              <p className="text-[11px] text-gray-500 mt-1">{role}</p>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={handleNext}
          aria-label="Next review"
          className={arrowBtnClass}
        >
          <FiArrowRight className="text-sm" />
        </button>
      </div>

      {/* Small Indicator Dots */}
      <div className="flex justify-center items-center gap-1.5 mt-5">
        {REVIEWS.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              currentIndex === index
                ? 'w-5 h-1.5 bg-[#A3E635]'
                : 'w-1.5 h-1.5 bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Review;
