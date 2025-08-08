"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const contentList = [
  {
    title: "Escape to Nature’s Comfort",
    description:
      "Experience serene living at our homestay nestled in the lush countryside. Perfect for families, couples, and solo travelers.",
  },
  {
    title: "Unwind in Rustic Luxury",
    description:
      "Enjoy the calm of traditional settings blended with modern comforts for an unforgettable retreat.",
  },
  {
    title: "Breathe. Relax. Rejuvenate.",
    description:
      "Reconnect with nature and yourself in a peaceful, refreshing environment surrounded by greenery.",
  },
];

const Hero: React.FC = () => {
  const [index, setIndex] = useState(0);
  const { ref } = useInView({ threshold: 0.1 });

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % contentList.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative h-screen w-full overflow-hidden"
      style={{
        backgroundImage: "url('/assets/images/img_front2.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/40 z-0" />

      <div
        ref={ref}
        className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center text-white"
      >
        <AnimatePresence mode="wait">
          <motion.h1
            key={contentList[index].title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            {contentList[index].title}
          </motion.h1>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.p
            key={contentList[index].description}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 1 }}
            className="text-lg md:text-xl max-w-2xl"
          >
            {contentList[index].description}
          </motion.p>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Hero;
