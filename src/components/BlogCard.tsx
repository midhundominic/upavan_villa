"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type BlogCardProps = {
  title: string;
  description: string;
  image: string;
};

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 1, ease: "easeOut" as const },
  viewport: { once: true, amount: 0.3 },
};

export default function BlogCard({ title, description, image }: BlogCardProps) {
  return (
    <motion.div
      initial={fadeUp.initial}
      whileHover={{ scale: 1.05 }}
      whileInView={fadeUp.whileInView}
      transition={fadeUp.transition}
      viewport={fadeUp.viewport}
      className="bg-white rounded-2xl shadow-md overflow-hidden"
    >
      <div className="relative w-full" style={{ height: '300px' }}>
        <Image 
          src={image} 
          alt={title} 
          layout="fill" 
          objectFit="cover" 
          className="rounded-t-2xl" 
        />
      </div>

      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600 mt-5">{description}</p>
      </div>
    </motion.div>
  );
}
