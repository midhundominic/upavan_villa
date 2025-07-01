"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
};

const roomImages = [
  "/assets/images/kitchen.jpeg",
  "/assets/images/kitchen2.jpeg",
  "/assets/images/kitchen3.jpeg",
];

export default function RoomSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % roomImages.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-4 py-20">
      {/* LEFT SIDE */}
      <motion.div
        initial={fadeUp.initial}
        whileInView={fadeUp.whileInView}
        viewport={fadeUp.viewport}
        transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
      >
        <h1 className="text-4xl md:text-6xl font-semibold text-[#0F086A] leading-tight mb-6">
          The Heart of Every Home – A Luxury Kitchen
        </h1>
        <p className="text-base text-[#5E5B8A] leading-relaxed">
          Our fully equipped kitchen offers everything you need – from modern
          ovens and gas stoves to elegant dishware and a clean, contemporary
          design. Ideal for a home-cooked meal, even on your getaway.
        </p>

        {[
          "Modern Gas Stove – Safe and efficient cooking anytime.",
          "Oven & Microwave – Perfect for quick or gourmet meals.",
          "Cutlery & Plates – Ready for a full dining experience.",
          "Spacious Layout – Clean, organized, and functional.",
        ].map((point, idx) => (
          <motion.div
            key={idx}
            initial={fadeUp.initial}
            whileInView={fadeUp.whileInView}
            viewport={fadeUp.viewport}
            transition={{
              duration: 0.7,
              delay: 0.2 + idx * 0.1,
              ease: "easeOut",
            }}
            className="mt-4 mb-3"
          >
            <h3 className="text-lg font-semibold text-[#0F086A]">{point}</h3>
          </motion.div>
        ))}
      </motion.div>

      {/* RIGHT SIDE – Enlarged Image Carousel */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={fadeUp.viewport}
        className="relative w-full h-[380px] md:h-[550px] rounded-2xl overflow-hidden shadow-xl"
      >
        <motion.div
          key={current}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute top-0 left-0 w-full h-full"
        >
          <Image
            src={roomImages[current]}
            alt={`Kitchen Image ${current + 1}`}
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
