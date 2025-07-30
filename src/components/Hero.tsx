"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.1 });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const variants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

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

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center text-white">
        <motion.h1
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={variants}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Escape to Nature’s Comfort
        </motion.h1>

        <motion.p
          initial="hidden"
          animate={controls}
          variants={variants}
          className="text-lg md:text-xl max-w-2xl"
        >
          Experience serene living at our homestay nestled in the lush
          countryside. Perfect for families, couples, and solo travelers.
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
