"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Amit S.",
    text: "A beautiful and peaceful place! The rooms were clean and the staff was very friendly. Highly recommended for families.",
  },
  {
    name: "Priya K.",
    text: "Loved the ambience and the food. The villa is surrounded by greenery and is perfect for a relaxing weekend.",
  },
  {
    name: "Rahul D.",
    text: "Great experience! The amenities were top-notch and the location is just perfect for a getaway.",
  },
  {
    name: "Sneha R.",
    text: "Exceptional service and scenic surroundings! Truly a luxury stay at a reasonable price.",
  },
  {
    name: "Vikram N.",
    text: "Impressed by the attention to detail. The rooms, the hospitality, the food — everything was spot on!",
  },
  {
    name: "Meera ",
    text: "From check-in to check-out, everything was seamless. The serene atmosphere and beautifully maintained interiors made our stay unforgettable.",
  }
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Testimonials() {
  return (
    <section className="bg-[#F5F7FA] py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-[#0F086A] mb-12"
        >
          What Our Guests Say
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-white rounded-2xl shadow-xl p-6 flex flex-col justify-between h-full"
            >
              <p className="text-gray-600 text-base italic mb-4 leading-relaxed">
                “{t.text}”
              </p>
              <div className="text-right font-semibold text-[#0F086A] mt-auto">
                – {t.name}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
