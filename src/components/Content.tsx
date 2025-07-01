"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";
import Button from "./ui/Button";
import LearnButton from "./ui/LearnButton";
import { motion } from "framer-motion";
import Link from "next/link";
import logo3 from "../../public/assets/logo3.png";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" as const },
  viewport: { once: true, amount: 0.3 },
};

export default function Content() {
  return (
    <div>
      <motion.section
        initial={fadeUp.initial}
        whileInView={fadeUp.whileInView}
        transition={fadeUp.transition}
        viewport={fadeUp.viewport}
        className="max-w-7xl mx-auto px-4 pt-20 pb-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        <div>
          <motion.div
            initial={fadeUp.initial}
            whileInView={fadeUp.whileInView}
            transition={{
              duration: 0.7,
              delay: 0.05,
              ease: "easeOut" as const,
            }}
            viewport={fadeUp.viewport}
            className="mb-6"
          ></motion.div>
          <motion.h1
            initial={fadeUp.initial}
            whileInView={fadeUp.whileInView}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" as const }}
            viewport={fadeUp.viewport}
            className="text-4xl md:text-6xl font-semibold text-[#0F086A] leading-tight mb-6"
          >
            Welcome to Upavan Villa
          </motion.h1>
          <motion.p
            initial={fadeUp.initial}
            whileInView={fadeUp.whileInView}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" as const }}
            viewport={fadeUp.viewport}
            className="text-base text-[#5E5B8A] leading-relaxed"
          >
            Experience tranquility and luxury at Upavan Villa, your perfect
            homestay nestled amidst lush greenery. Enjoy modern amenities,
            spacious rooms, and a serene environment for families, couples, and
            solo travelers.
          </motion.p>
          <motion.div
            initial={fadeUp.initial}
            whileInView={fadeUp.whileInView}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" as const }}
            viewport={fadeUp.viewport}
            className="pt-5"
          >
            <Button text="Book Now" href="/booking" />
          </motion.div>
        </div>
        <motion.div
          initial={fadeUp.initial}
          whileInView={fadeUp.whileInView}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" as const }}
          viewport={fadeUp.viewport}
          className="pt-5 w-full"
        >
          <Image
            src="/assets/images/img_front1.jpeg"
            alt="Upavan Villa Front"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto rounded-lg shadow-lg"
            priority
          />
        </motion.div>
      </motion.section>

      {/*Next Section*/}
      <motion.div
        initial={fadeUp.initial}
        whileInView={fadeUp.whileInView}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" as const }}
        viewport={fadeUp.viewport}
        className="max-w-7xl mx-auto px-4 pt-20 pb-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        <motion.div
          initial={fadeUp.initial}
          whileInView={fadeUp.whileInView}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" as const }}
          viewport={fadeUp.viewport}
          className="pt-5 w-full"
        >
          <Image
            src="/assets/images/room2.jpeg"
            alt="Room"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto rounded-lg shadow-lg"
            priority
          />
        </motion.div>

        <motion.div
          initial={fadeUp.initial}
          whileInView={fadeUp.whileInView}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" as const }}
          viewport={fadeUp.viewport}
        >
          <h1 className="text-4xl md:text-6xl font-semibold text-[#0F086A] leading-tight mb-6">
            Relax. Refresh. Rejuvenate.
          </h1>
          <p className="text-base text-[#5E5B8A] leading-relaxed">
            Step into your private A/C luxury room, where elegance meets
            comfort. Thoughtfully designed interiors, plush bedding, and modern
            amenities ensure a stay that feels just like home — only better.
          </p>

          <motion.div
            initial={fadeUp.initial}
            whileInView={fadeUp.whileInView}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" as const }}
            viewport={fadeUp.viewport}
            className="mt-4 flex items-start pt-5 gap-4 mb-6"
          >
            {/* <div className="min-w-[72px] min-h-[72px]">
              <Image
                src="/assets/images/stair4.jpeg"
                alt="Drag"
                width={72}
                height={72}
                sizes="100vw"
                className="h-auto rounded-lg"
                priority
              />
            </div> */}
            <div>
              <h3 className="text-lg font-semibold text-[#0F086A]">
              Fully Air-Conditioned – Stay cool and relaxed, no matter the weather.
              </h3>
              {/* <p className="text-[#5E5B8A] leading-relaxed">
                Odio pellentesque diam volutpat commodo sed egestas egestas
                fringilla phasellus
              </p> */}
            </div>
          </motion.div>
          <motion.div
            initial={fadeUp.initial}
            whileInView={fadeUp.whileInView}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" as const }}
            viewport={fadeUp.viewport}
            className="flex items-start gap-4"
          >
            {/* <div className="min-w-[72px] min-h-[72px]">
              <Image
                src="https://cdn.prod.website-files.com/61800161ed9edf6bdd5c6c4d/6181969935b63c7bfad6685d_home-perk-02-applay-x-template.svg"
                alt="Template"
                width={72}
                height={72}
                className="h-auto w-auto rounded-lg"
                priority
              />
            </div> */}
            <div>
              <h3 className="text-lg font-semibold text-[#0F086A]">
              Spacious Interiors – Designed for both style and comfort.
              </h3>
            </div>
          </motion.div>

          <motion.div
            initial={fadeUp.initial}
            whileInView={fadeUp.whileInView}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" as const }}
            viewport={fadeUp.viewport}
            className="mt-4 flex items-start gap-4 mb-6"
          >
            <div>
              <h3 className="text-lg font-semibold text-[#0F086A]">
               Complimentary Breakfast – Start your day the right way.
              </h3>
             
            </div>
            
          </motion.div>

          <motion.div
            initial={fadeUp.initial}
            whileInView={fadeUp.whileInView}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" as const }}
            viewport={fadeUp.viewport}
            className="mt-4 flex items-start gap-4 mb-6"
          >
            <div>
              <h3 className="text-lg font-semibold text-[#0F086A]">
              24/7 Service Support – Always available to assist you.
              </h3>
             
            </div>
            
          </motion.div>

          <motion.div
            initial={fadeUp.initial}
            whileInView={fadeUp.whileInView}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" as const }}
            viewport={fadeUp.viewport}
            className="mt-4 flex items-start gap-4 mb-6"
          >
            <div>
              <h3 className="text-lg font-semibold text-[#0F086A]">
              Private Balcony/View – Enjoy scenic views and fresh air.
              </h3>
             
            </div>
            
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
