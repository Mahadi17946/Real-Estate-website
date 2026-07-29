import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
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
    bathrooms: '2 Bathroom',
    title: 'The Pinnacle at Highland Park',
    price: '$3,567,980.00',
    location: '123 Maple Street, New York',
  },
  {
    id: 2,
    image: Card2,
    tag: 'For Sale',
    bedrooms: '5 Bedrooms',
    bathrooms: '2 Bathroom',
    title: 'The Pinnacle at Highland Park',
    price: '$2,490,89.99',
    location: '789 Forest Lane, Denver, CO',
  },
  {
    id: 3,
    image: Card3,
    tag: 'For Sale',
    bedrooms: '5 Bedrooms',
    bathrooms: '2 Bathroom',
    title: 'The Pinnacle at Highland Park',
    price: '$4,567,45.00',
    location: '123 Serenity Drive, Austin, TX',
  },
  {
    id: 4,
    image: Card4,
    tag: 'For Sale',
    bedrooms: '5 Bedrooms',
    bathrooms: '2 Bathroom',
    title: 'The Pinnacle at Highland Park',
    price: '$3,567,980.00',
    location: '123 Maple Street, New York',
  },
  {
    id: 5,
    image: Card5,
    tag: 'For Sale',
    bedrooms: '5 Bedrooms',
    bathrooms: '2 Bathroom',
    title: 'The Pinnacle at Highland Park',
    price: '$2,490,89.99',
    location: '789 Forest Lane, Denver, CO',
  },
  {
    id: 6,
    image: Card6,
    tag: 'For Sale',
    bedrooms: '5 Bedrooms',
    bathrooms: '2 Bathroom',
    title: 'The Pinnacle at Highland Park',
    price: '$4,567,45.00',
    location: '123 Serenity Drive, Austin, TX',
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
    <div className="relative w-full h-[280px] sm:h-[300px] rounded-[24px] overflow-hidden mb-4">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-black text-xs font-medium px-3 py-1 rounded-full shadow-sm">
        {tag}
      </span>
    </div>

    <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-700 mb-2">
      <span className="flex items-center gap-1.5">
        <TbBed className="text-base" />
        {bedrooms}
      </span>
      <span className="text-gray-400">•</span>
      <span className="flex items-center gap-1.5">
        <TbBath className="text-base" />
        {bathrooms}
      </span>
    </div>

    <h3 className="text-xl sm:text-2xl font-normal text-black mb-2 tracking-tight">
      {title}
    </h3>

    <div className="flex items-center gap-2 text-xs sm:text-sm">
      <span className="font-bold text-black">{price}</span>
      <span className="text-gray-400">•</span>
      <span className="text-gray-500 truncate">{location}</span>
    </div>
  </div>
);

const Card = () => (
  <section
    id="properties"
    className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white overflow-hidden"
  >
    {/* Header Section Animation */}
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-black tracking-tight mb-3">
          Explore our premier houses
        </h2>
        <p className="text-gray-500 text-xs sm:text-sm max-w-xl leading-relaxed">
          Each listing offers unique features, exceptional quality, and prime
          locations, ensuring an exclusive living experience.
        </p>
      </motion.div>

      {/* Button Animation */}
      <motion.button
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.2 }}
        type="button"
        className="flex items-center gap-2 bg-black text-white text-xs sm:text-sm font-medium px-5 py-3 rounded-full hover:bg-gray-800 transition-all cursor-pointer w-fit shrink-0 shadow-sm"
      >
        See All Properties
        <FiArrowRight className="text-base" />
      </motion.button>
    </div>

    {/* Staggered Grid Animation for Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {PROPERTIES.map((property, index) => (
        <motion.div
          key={property.id}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.5,
            delay: (index % 3) * 0.15, 
            ease: 'easeOut',
          }}
        >
          <PropertyCard {...property} />
        </motion.div>
      ))}
    </div>
  </section>
);

export default Card;
