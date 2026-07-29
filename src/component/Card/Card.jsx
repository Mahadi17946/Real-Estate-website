import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiMapPin } from 'react-icons/fi';
import { TbBed, TbBath } from 'react-icons/tb';

import Card1 from '../../assets/Card1.jpg';
import Card2 from '../../assets/Card2.jpg';
import Card3 from '../../assets/Card3.jpg';
import Card4 from '../../assets/Card4.jpg';
import Card5 from '../../assets/Card5.jpg';
import Card6 from '../../assets/Card6.jpg';

const PROPERTIES = [
  {
    id: 1,
    image: Card1,
    tag: 'For Sale',
    bedrooms: '5 Bedrooms',
    bathrooms: '2 Bathrooms',
    title: 'The Pinnacle at Highland Park',
    price: '$3,567,980',
    location: '123 Maple Street, New York',
  },
  {
    id: 2,
    image: Card2,
    tag: 'For Sale',
    bedrooms: '4 Bedrooms',
    bathrooms: '3 Bathrooms',
    title: 'Modern Villa in Forest Lane',
    price: '$2,490,000',
    location: '789 Forest Lane, Denver, CO',
  },
  {
    id: 3,
    image: Card3,
    tag: 'For Sale',
    bedrooms: '5 Bedrooms',
    bathrooms: '4 Bathrooms',
    title: 'Serenity Drive Residence',
    price: '$4,567,000',
    location: '123 Serenity Drive, Austin, TX',
  },
  {
    id: 4,
    image: Card4,
    tag: 'For Sale',
    bedrooms: '3 Bedrooms',
    bathrooms: '2 Bathrooms',
    title: 'Highland Luxury Apartment',
    price: '$1,850,000',
    location: '456 Oak Avenue, Miami, FL',
  },
  {
    id: 5,
    image: Card5,
    tag: 'For Sale',
    bedrooms: '4 Bedrooms',
    bathrooms: '3 Bathrooms',
    title: 'Grand Horizon Heights',
    price: '$2,990,000',
    location: '321 Pine Street, Seattle, WA',
  },
  {
    id: 6,
    image: Card6,
    tag: 'For Sale',
    bedrooms: '5 Bedrooms',
    bathrooms: '4 Bathrooms',
    title: 'Sunset Boulevard Villa',
    price: '$5,200,000',
    location: '890 Ocean Drive, Los Angeles, CA',
  },
];

const PropertyCard = ({
  image,
  tag,
  bedrooms,
  bathrooms,
  title,
  price,
  location,
}) => (
  <div className="group flex flex-col cursor-pointer">
    {/* Image Container */}
    <div className="relative w-full h-[260px] sm:h-[280px] lg:h-[300px] rounded-3xl overflow-hidden mb-4 shadow-sm bg-gray-100">
      <img
        src={image}
        alt={title}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
      />
      <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-gray-900 text-xs font-semibold px-3.5 py-1 rounded-full shadow-sm">
        {tag}
      </span>
    </div>

    {/* Specs */}
    <div className="flex items-center gap-3 text-xs sm:text-sm font-medium text-gray-600 mb-2">
      <span className="flex items-center gap-1.5">
        <TbBed className="text-base text-gray-800" />
        {bedrooms}
      </span>
      <span className="text-gray-300">•</span>
      <span className="flex items-center gap-1.5">
        <TbBath className="text-base text-gray-800" />
        {bathrooms}
      </span>
    </div>

    {/* Title */}
    <h3 className="text-lg sm:text-xl font-semibold text-black mb-1.5 tracking-tight transition-colors duration-200 group-hover:text-gray-600 line-clamp-1">
      {title}
    </h3>

    {/* Price & Location */}
    <div className="flex items-center gap-2 text-xs sm:text-sm">
      <span className="font-bold text-black text-sm sm:text-base">{price}</span>
      <span className="text-gray-300">•</span>
      <span className="text-gray-500 truncate flex items-center gap-1">
        <FiMapPin className="shrink-0 text-gray-400" />
        <span className="truncate">{location}</span>
      </span>
    </div>
  </div>
);

const Card = () => (
  <section
    id="properties"
    className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white overflow-hidden"
  >
    {/* Header Section */}
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.01 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black tracking-tight mb-3">
          Explore our premier houses
        </h2>
        <p className="text-gray-500 text-xs sm:text-sm max-w-xl leading-relaxed">
          Each listing offers unique features, exceptional quality, and prime
          locations, ensuring an exclusive living experience.
        </p>
      </motion.div>

      {/* Action Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.01 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
        type="button"
        className="group flex items-center gap-2 bg-black text-white text-xs sm:text-sm font-medium px-6 py-3 rounded-full hover:bg-gray-800 transition-colors cursor-pointer w-fit shrink-0 shadow-sm"
      >
        See All Properties
        <FiArrowRight className="text-base transition-transform duration-200 group-hover:translate-x-1" />
      </motion.button>
    </div>

    {/* Staggered Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
      {PROPERTIES.map((property, index) => (
        <motion.div
          key={property.id}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.01 }}
          transition={{
            duration: 0.25,
            delay: (index % 3) * 0.04,
            ease: 'easeOut',
          }}
          className="transform-gpu"
        >
          <PropertyCard {...property} />
        </motion.div>
      ))}
    </div>
  </section>
);

export default Card;
