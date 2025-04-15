'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    name: 'Mira Culos',
    role: 'Renter',
    avatar: '/avatar1.png',
    text: `Estatery is the platform I go to on almost a daily basis for 2nd home and vacation condo shopping, or to just look at dream homes in new areas. Thanks for fun home shopping and comparative analyzing, Estatery!`,
  },
  {
    name: 'Mark Brown',
    role: 'Renter',
    avatar: '/avatar2.png',
    text: `I check Estatery almost every day — whether I'm seriously house hunting or just daydreaming about future getaways. It makes exploring new locations and comparing properties incredibly easy and enjoyable.`,
  },
  {
    name: 'Jake White',
    role: 'Renter',
    avatar: '/avatar3.png',
    text: `Estatery turns home shopping into a daily delight. Whether I'm planning for the future or just exploring what's out there, I always find something exciting and new.`,
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full bg-gradient-to-b from-white to-[#f9f5ff] py-20 px-4 text-center">
      <h2 className="text-3xl font-bold mb-2 text-black">Testimonials</h2>
      <p className="text-gray-500 mb-10 max-w-md mx-auto text-sm">
        See what our property managers, landlords, and tenants have to say
      </p>

      <div className="relative min-h-[140px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <p className="text-lg md:text-xl font-medium text-black mb-6">
              “{testimonials[index].text}”
            </p>
            <p className="font-semibold text-black">
              {testimonials[index].name}, <span className="text-gray-500 font-normal">{testimonials[index].role}</span>
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-10 flex justify-center gap-6">
        {testimonials.map((t, i) => {
          const isActive = index === i;
          return (
            <div key={i} className="relative w-14 h-14 z-10">
              <svg
                viewBox="0 0 36 36"
                className="absolute top-0 left-0 w-full h-full rotate-[-90deg] z-20"
              >
                <circle
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  stroke="#eee"
                  strokeWidth="3"
                />
                {isActive && (
                  <motion.circle
                    cx="18"
                    cy="18"
                    r="16"
                    fill="none"
                    stroke="#7065F0"
                    strokeWidth="3"
                    strokeDasharray="100"
                    strokeDashoffset="100"
                    animate={{ strokeDashoffset: 0 }}
                    transition={{ duration: 5, ease: 'linear' }}
                  />
                )}
              </svg>
              <div className="absolute top-0 left-0 w-full h-full rounded-full overflow-hidden z-10">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={56}
                  height={56}
                  className="rounded-full border-2 border-white shadow-md object-cover w-full h-full"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;
