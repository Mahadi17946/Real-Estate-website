import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';
import Faq1 from '../../assets/Gallery2.jpg';

const FAQ_DATA = [
  {
    id: 0,
    question: 'What types of properties do you sell?',
    answer:
      "We specialize in residential, commercial, and luxury properties, offering a wide range of options to suit every buyer's needs and preferences. We connect you with trusted lenders offering competitive mortgage options and financial advice. We arrange private showings for you to visit and evaluate properties before making a decision. Properties range across different price points, catering to various budgets and investment goals.",
    image: Faq1,
  },
  {
    id: 1,
    question: 'How do I know if a property is a good investment?',
    answer:
      'Evaluating a property involves analyzing market trends, location value, potential rental yield, and future growth prospects in the area.',
  },
  {
    id: 2,
    question: 'Do I need to hire a real estate agent?',
    answer:
      'While not legally mandatory, working with an experienced real estate agent ensures seamless negotiations, legal protection, and access to exclusive listings.',
  },
  {
    id: 3,
    question: "What's the process for buying a property?",
    answer:
      'The process includes setting a budget, getting pre-approved for a mortgage, viewing properties, making an offer, conducting home inspections, and closing the deal.',
  },
  {
    id: 4,
    question: 'Can I tour a property before purchasing?',
    answer:
      'Yes, absolutely! We encourage private tours and virtual walkthroughs so you can thoroughly evaluate the property prior to making any commitment.',
  },
];

const AccordionItem = ({ item, isOpen, onToggle }) => (
  <div className="border border-gray-200 rounded-2xl p-5 sm:p-6 bg-white overflow-hidden transition-all">
    <button
      type="button"
      onClick={onToggle}
      className="w-full flex items-center justify-between text-left cursor-pointer focus:outline-none"
    >
      <h3 className="text-lg sm:text-xl font-normal text-black tracking-tight">
        {item.question}
      </h3>
      <FiChevronDown
        className={`text-gray-600 text-xl ml-4 shrink-0 transition-transform duration-300 ease-in-out ${
          isOpen ? 'rotate-180' : 'rotate-0'
        }`}
      />
    </button>

    {/* Smooth & Fast Height Expand/Collapse */}
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          key="content"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="overflow-hidden transform-gpu"
        >
          <div className="pt-4 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
            <p className="flex-1 text-gray-500 text-xs sm:text-sm leading-relaxed">
              {item.answer}
            </p>
            {item.image && (
              <div className="w-full md:w-[220px] h-[110px] shrink-0 rounded-xl overflow-hidden mt-2 md:mt-0">
                <img
                  src={item.image}
                  alt={item.question}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = index =>
    setOpenIndex(prev => (prev === index ? null : index));

  // Stagger Container for Smooth Entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.25, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="faq"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white overflow-hidden"
    >
      {/* Header Section Animation */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 transform-gpu"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-black tracking-tight max-w-md leading-tight">
          Frequently asked questions
        </h2>
        <p className="text-gray-500 text-xs sm:text-sm max-w-md leading-relaxed">
          Our experts guide you in making informed investment decisions based on
          market insights. We offer residential, commercial, and luxury
          properties tailored to different preferences and budgets.
        </p>
      </motion.div>

      {/* Accordion List Animation */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="space-y-4"
      >
        {FAQ_DATA.map((item, index) => (
          <motion.div
            key={item.id}
            variants={itemVariants}
            className="transform-gpu"
          >
            <AccordionItem
              item={item}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default FAQ;
