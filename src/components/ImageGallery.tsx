"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/assets/images/img_front1.jpeg",
  "/assets/images/img_front2.jpeg",
  "/assets/images/img_front3.jpeg",
  "/assets/images/living.jpeg",
  "/assets/images/interior.jpeg",
  "/assets/images/kitchen.jpeg",
  "/assets/images/kitchen3.jpeg",
  "/assets/images/kitchen4.jpeg",
  "/assets/images/kitchen2.jpeg",
  "/assets/images/library.jpeg",
  "/assets/images/room1.jpeg",
  "/assets/images/room1_new.jpeg",
  "/assets/images/room2.jpeg",
  "/assets/images/sitout.jpeg",
  "/assets/images/stair1.jpeg",
  "/assets/images/stair2.jpeg",
  "/assets/images/stair3.jpeg",
  "/assets/images/stair4.jpeg",
  "/assets/images/balcony.jpeg",
  "/assets/images/dining.jpeg",
];

const COLUMNS = 2;
const ROWS = 2;
const IMAGES_PER_PAGE = COLUMNS * ROWS;
const AUTO_SLIDE_INTERVAL = 5500;

const fadeInScaleVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7 } },
};

function chunkArray<T>(arr: T[], chunkSize: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    result.push(arr.slice(i, i + chunkSize));
  }
  return result;
}

const ImageGallery: React.FC = () => {
  const pages = chunkArray(images, IMAGES_PER_PAGE);
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(1);
  const [fadeOnMount, setFadeOnMount] = useState(true); // control fade only once

  useEffect(() => {
    const timer = setTimeout(() => setFadeOnMount(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setPage((prev) => (prev + 1) % pages.length);
    }, AUTO_SLIDE_INTERVAL);
    return () => clearInterval(interval);
  }, [pages.length]);

  const handlePrev = () => {
    setDirection(-1);
    setPage((prev) => (prev - 1 + pages.length) % pages.length);
  };
  const handleNext = () => {
    setDirection(1);
    setPage((prev) => (prev + 1) % pages.length);
  };

  return (
    <motion.section
      className="w-full py-12 px-4 md:px-8"
      initial="hidden"
      animate="visible"
      variants={fadeInScaleVariants}
    >
      <h2 className="text-3xl font-bold mb-8 text-center">Gallery</h2>
      <div className="relative w-full">
        {/* Navigation */}
        <button
          className="absolute left-4 top-1/2 -translate-y-[calc(50%-90px)] z-10 bg-white/80 hover:bg-white rounded-full p-3 shadow transition"
          onClick={handlePrev}
          aria-label="Previous"
        >
          <ChevronLeft size={32} />
        </button>
        <button
          className="absolute right-4 top-1/2 -translate-y-[calc(50%-90px)] z-10 bg-white/80 hover:bg-white rounded-full p-3 shadow transition"
          onClick={handleNext}
          aria-label="Next"
        >
          <ChevronRight size={32} />
        </button>

        {/* Gallery */}
        <div className="overflow-hidden w-full">
          <AnimatePresence initial={false}>
            {fadeOnMount ? (
              <motion.div
                key={page}
                className="grid grid-cols-2 grid-rows-2 gap-4"
                initial={{ opacity: 0, y: 40, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                {pages[page].map((img, idx) => (
                  <motion.div
                    key={img}
                    className="relative w-full h-[32vw] min-h-[180px] max-h-[360px] rounded-xl overflow-hidden shadow-md"
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Image
                      src={img}
                      alt={`Gallery image ${page * IMAGES_PER_PAGE + idx + 1}`}
                      fill
                      className="object-cover"
                      sizes="100vw"
                      priority={idx === 0}
                    />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <div
                key={page}
                className="grid grid-cols-2 grid-rows-2 gap-4"
              >
                {pages[page].map((img, idx) => (
                  <div
                    key={img}
                    className="relative w-full h-[32vw] min-h-[180px] max-h-[360px] rounded-xl overflow-hidden shadow-md"
                  >
                    <Image
                      src={img}
                      alt={`Gallery image ${page * IMAGES_PER_PAGE + idx + 1}`}
                      fill
                      className="object-cover"
                      sizes="100vw"
                      priority={idx === 0}
                    />
                  </div>
                ))}
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
};

export default ImageGallery;
