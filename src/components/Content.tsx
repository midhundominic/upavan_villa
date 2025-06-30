"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";
import Button from "./ui/Button";
import LearnButton from "./ui/LearnButton";
import { motion } from "framer-motion";
import Link from "next/link";

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
          <motion.h1
            initial={fadeUp.initial}
            whileInView={fadeUp.whileInView}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" as const }}
            viewport={fadeUp.viewport}
            className="text-4xl md:text-6xl font-semibold text-[#0F086A] leading-tight mb-6"
          >
            All-in-one email marketing platform
          </motion.h1>
          <motion.p
            initial={fadeUp.initial}
            whileInView={fadeUp.whileInView}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" as const }}
            viewport={fadeUp.viewport}
            className="text-base text-[#5E5B8A] leading-relaxed"
          >
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Lorem
            tristique cras ullamcorper est pharetra at sit condimentum sed arcu
            etiam aliquam.
          </motion.p>
          <motion.div
            initial={fadeUp.initial}
            whileInView={fadeUp.whileInView}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" as const }}
            viewport={fadeUp.viewport}
            className="pt-5 relative w-full max-w-xl"
          >
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full pr-40 px-6 py-6 rounded-lg border border-gray-200 shadow-sm text-base text-gray-600 outline-none"
            />
            <div className=" absolute right-2 top-1/2 -translate-y-1/2  pt-0.5 pb-3">
              <Button text="Get started" href="/" />
            </div>
            <div className="pt-3 flex items-center gap-2 text-[#0F086A] font-semibold text-base">
              <CheckCircle className="text-[#5850EC]" size={20} />
              No credit card required
            </div>
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
            src="/assets/images/img_front2.jpeg"
            alt="Email marketing illustration"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto"
            priority
          />
        </motion.div>
      </motion.section>
      <motion.p
        initial={fadeUp.initial}
        whileInView={fadeUp.whileInView}
        transition={fadeUp.transition}
        viewport={fadeUp.viewport}
        className="flex flex-col items-center text-center text-xl font-semibold text-[#0F086A] leading-tight mb-6"
      >
        Trusted by 10,000 companies around the world
      </motion.p>
      <motion.div
        initial={fadeUp.initial}
        whileInView={fadeUp.whileInView}
        transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" as const }}
        viewport={fadeUp.viewport}
        className="flex flex-wrap justify-center item-center  gap-10 pt-5"
      >
        <Link href="https://www.google.com/">
          <Image
            src="https://cdn.prod.website-files.com/61800161ed9edf6bdd5c6c4d/655b9aef4d5960a71f88a1da_agency-logo-techpool-x-webflow-template.svg"
            alt="Agency"
            width={120}
            height={40}
            className="h-auto transition-transform duration-400 hover:scale-105 hover:opacity-80"
            priority
          />
        </Link>
        <Link href="https://www.google.com/" className="company">
          <Image
            src="https://cdn.prod.website-files.com/61800161ed9edf6bdd5c6c4d/655b9aef097dddb009841ae8_application-logo-techpool-x-webflow-template.svg"
            alt="Startup"
            width={120}
            height={40}
            className="h-auto transition-transform duration-400 hover:scale-105 hover:opacity-80"
            priority
          />
        </Link>
        <Link href="https://www.google.com/" className="company">
          <Image
            src="https://cdn.prod.website-files.com/61800161ed9edf6bdd5c6c4d/655b9aee7c221202d33dc6ba_business-logo-techpool-x-webflow-template.svg"
            alt="second"
            width={120}
            height={40}
            className="h-auto transition-transform duration-400 hover:scale-105 hover:opacity-80"
            priority
          />
        </Link>
        <Link href="https://www.google.com/" className="company">
          <Image
            src="https://cdn.prod.website-files.com/61800161ed9edf6bdd5c6c4d/655b9aeeeecbab41bde190a1_company-logo-techpool-x-webflow-template.svg"
            alt="Agency"
            width={120}
            height={40}
            className="h-auto transition-transform duration-400 hover:scale-105 hover:opacity-80"
            priority
          />
        </Link>
        <Link href="https://www.google.com/" className="company">
          <Image
            src="https://cdn.prod.website-files.com/61800161ed9edf6bdd5c6c4d/655b9aef50d2eca1d811425d_venture-logo-techpool-x-webflow-template.svg"
            alt="venture"
            width={120}
            height={40}
            className="h-auto transition-transform duration-400 hover:scale-105 hover:opacity-80"
            priority
          />
        </Link>
        <Link href="https://www.google.com/" className="company">
          <Image
            src="https://cdn.prod.website-files.com/61800161ed9edf6bdd5c6c4d/655b9aeef080fc67b808eae4_startup-logo-techpool-x-webflow-template.svg"
            alt="Agency"
            width={120}
            height={40}
            className="h-auto transition-transform duration-400 hover:scale-105 hover:opacity-80"
            priority
          />
        </Link>
      </motion.div>

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
            src="/assets/home2.png"
            alt="Email marketing illustration"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto"
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
            1. Create beautiful email newsletters
          </h1>
          <p className="text-base text-[#5E5B8A] leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit turpis velit
            augue turpis etiam felis aliquam u.
          </p>

          <motion.div
            initial={fadeUp.initial}
            whileInView={fadeUp.whileInView}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" as const }}
            viewport={fadeUp.viewport}
            className="mt-4 flex items-start gap-4 mb-6"
          >
            <div className="min-w-[72px] min-h-[72px]">
              <Image
                src="https://cdn.prod.website-files.com/61800161ed9edf6bdd5c6c4d/61819699b67a2c0948dcdef8_home-perk-01-applay-x-template.svg"
                alt="Drag"
                width={72}
                height={72}
                sizes="100vw"
                className="h-auto rounded-lg"
                priority
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#0F086A]">
                Drag–and–drop builder
              </h3>
              <p className="text-[#5E5B8A] leading-relaxed">
                Odio pellentesque diam volutpat commodo sed egestas egestas
                fringilla phasellus
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={fadeUp.initial}
            whileInView={fadeUp.whileInView}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" as const }}
            viewport={fadeUp.viewport}
            className="flex items-start gap-4"
          >
            <div className="min-w-[72px] min-h-[72px]">
              <Image
                src="https://cdn.prod.website-files.com/61800161ed9edf6bdd5c6c4d/6181969935b63c7bfad6685d_home-perk-02-applay-x-template.svg"
                alt="Template"
                width={72}
                height={72}
                className="h-auto w-auto rounded-lg"
                priority
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#0F086A]">
                Pre made templates
              </h3>
              <p className="text-[#5E5B8A] leading-relaxed">
                Senectus et netus et malesuada pellentesque eu tincidunt tortor
                aliquam nulla facilisi.
              </p>
            </div>
          </motion.div>
          <div className="mt-5">
            <LearnButton href="/" />
          </div>
        </motion.div>
      </motion.div>

      {/*Section3*/}
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
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" as const }}
          viewport={fadeUp.viewport}
        >
          <h1 className="text-4xl md:text-6xl font-semibold text-[#0F086A] leading-tight mb-6">
            2. Send it to your email audience
          </h1>
          <p className="text-base text-[#5E5B8A] leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit turpis velit
            augue turpis etiam felis aliquam u.
          </p>
          <motion.div
            initial={fadeUp.initial}
            whileInView={fadeUp.whileInView}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" as const }}
            viewport={fadeUp.viewport}
            className="mt-4 flex items-start gap-4 mb-6"
          >
            <div className="min-w-[72px] min-h-[72px]">
              <Image
                src="https://cdn.prod.website-files.com/61800161ed9edf6bdd5c6c4d/618196991957736761ef4215_home-perk-03-applay-x-template.svg"
                alt="Drag"
                width={72}
                height={72}
                sizes="100vw"
                className="h-auto rounded-lg"
                priority
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#0F086A]">
                Delivery Optimization
              </h3>
              <p className="text-[#5E5B8A] leading-relaxed">
                Odio pellentesque diam volutpat commodolo sed egestas egestas
                fringilla phasellus
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={fadeUp.initial}
            whileInView={fadeUp.whileInView}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" as const }}
            viewport={fadeUp.viewport}
            className="mt-4 flex items-start gap-4 mb-6"
          >
            <div className="min-w-[72px] min-h-[72px]">
              <Image
                src="https://cdn.prod.website-files.com/61800161ed9edf6bdd5c6c4d/61819699fc84e783ee4bffc8_home-perk-04-applay-x-template.svg"
                alt="Drag"
                width={72}
                height={72}
                sizes="100vw"
                className="h-auto rounded-lg"
                priority
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#0F086A]">
                Advanced A/B Testing
              </h3>
              <p className="text-[#5E5B8A] leading-relaxed">
                Senectus et netus et malesuada pellentesque eu tincidunt tortor
                aliquam nulla facilisi.
              </p>
            </div>
          </motion.div>
          <div className="mt-5">
            <LearnButton href="/" />
          </div>
        </motion.div>
        <motion.div
          initial={fadeUp.initial}
          whileInView={fadeUp.whileInView}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" as const }}
          viewport={fadeUp.viewport}
          className="pt-5 w-full"
        >
          <Image
            src="/assets/home3.png"
            alt="Email Audience"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto"
            priority
          />
        </motion.div>
      </motion.div>

      {/*Section 4 */}
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
            src="/assets/home4.png"
            alt="measure email"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto"
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
            3. Measure email campaign results
          </h1>
          <p className="text-base text-[#5E5B8A] leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit turpis velit
            augue turpis etiam felis aliquam u.
          </p>

          <motion.div
            initial={fadeUp.initial}
            whileInView={fadeUp.whileInView}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" as const }}
            viewport={fadeUp.viewport}
            className="mt-4 flex items-start gap-4 mb-6"
          >
            <div className="min-w-[72px] min-h-[72px]">
              <Image
                src="https://cdn.prod.website-files.com/61800161ed9edf6bdd5c6c4d/618196993ebc8958b57ca85d_home-perk-05-applay-x-template.svg"
                alt="Drag"
                width={72}
                height={72}
                sizes="100vw"
                className="h-auto rounded-lg"
                priority
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#0F086A]">
                Granular reports
              </h3>
              <p className="text-[#5E5B8A] leading-relaxed">
                Odio pellentesque diam volutpat commodolo sed egestas egestas
                fringilla phasellus
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={fadeUp.initial}
            whileInView={fadeUp.whileInView}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" as const }}
            viewport={fadeUp.viewport}
            className="flex items-start gap-4"
          >
            <div className="min-w-[72px] min-h-[72px]">
              <Image
                src="https://cdn.prod.website-files.com/61800161ed9edf6bdd5c6c4d/61819699466df851b9ba41d3_home-perk-06-applay-x-template.svg"
                alt="Template"
                width={72}
                height={72}
                className="h-auto w-auto rounded-lg"
                priority
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#0F086A]">
                AI-based optimizations
              </h3>
              <p className="text-[#5E5B8A] leading-relaxed">
                Senectus et netus et malesuada pellentesque eu tincidunt tortor
                aliquam nulla facilisi.
              </p>
            </div>
          </motion.div>
          <div className="mt-5">
            <LearnButton href="/" />
          </div>
        </motion.div>
      </motion.div>

      {/*Next Section*/}
      <motion.div
        initial={fadeUp.initial}
        whileInView={fadeUp.whileInView}
        transition={fadeUp.transition}
        viewport={fadeUp.viewport}
        className="bg-[#524FFF]"
      >
        <div className="max-w-7xl mx-auto px-4 pt-20 pb-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={fadeUp.initial}
            whileInView={fadeUp.whileInView}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" as const }}
            viewport={fadeUp.viewport}
          >
            <h1 className="text-4xl md:text-5xl font-semibold text-[#FFFFFF] pt-10 pb-10">
              Take your email marketing game to the next level
            </h1>
          </motion.div>
          <motion.div
            initial={fadeUp.initial}
            whileInView={fadeUp.whileInView}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" as const }}
            viewport={fadeUp.viewport}
            className="pt-5 relative w-full max-w-xl"
          >
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full pr-40 px-6 py-6 rounded-lg border bg-[#FFFFFF] border-gray-200 shadow-sm text-base text-gray-600 outline-none"
            />
            <div className=" absolute right-2 top-1/2 -translate-y-1/2  pt-0.5 pb-3">
              <Button text="Get started" href="/" />
            </div>
            <div className="pt-3 flex items-center gap-2 text-[#FFFFF] font-semibold text-base">
              <CheckCircle className="text-[#FFFFFF]" size={20} />
              No credit card required
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
