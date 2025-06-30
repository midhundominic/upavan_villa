"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import Button from "./ui/Button";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-[#ffffff]"
    >
      <div className="max-w-7xl mx-auto pt-10 pb-3 px-3 flex justify-between items-center">
        <div className="flex items-center gap-10">
          <div className="w-[80px] md:w-[140px]">
            <Image
              src="/assets/logo3.png"
              alt="Upavan Villa Logo"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto  max-h-[100px]"
              priority
            />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-10">
            <Link
              href="/"
              className="text-lg font-medium text-[#2c2c2c] hover:text-[#d1452a]"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-lg font-medium text-[#2c2c2c] hover:text-[#d1452a]"
            >
              About
            </Link>
            <Link
              href="#pricing"
              className="text-lg font-medium text-[#2c2c2c] hover:text-[#d1452a]"
            >
              Pricing
            </Link>
            <Link
              href="/cart"
              className="text-lg font-medium text-[#2c2c2c] hover:text-[#d1452a]"
            >
              Cart(0)
            </Link>
          </nav>
        </div>

        <div className="hidden md:block">
          <Button
            text="Get started"
            href="/"
            className="bg-[#d1452a] text-white hover:brightness-110"
          />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none w-[60px] h-[60px] rounded-2xl bg-[#d1452a] flex items-center justify-center"
          >
            <svg
              className="w-7 h-7 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4 }}
            className="fixed top-[150px] left-0 w-full bg-[#ffffff] z-40 px-6 py-6 overflow-y-auto h-[calc(100vh-100px)]"
          >
            <nav className="hidden md:flex gap-10">
              <Link
                href="/"
                className="text-lg font-medium text-[#2c2c2c] hover:text-[#d1452a]"
              >
                Home
              </Link>
              <Link
                href="#about"
                className="text-lg font-medium text-[#2c2c2c] hover:text-[#d1452a]"
              >
                About
              </Link>
              <Link
                href="#pricing"
                className="text-lg font-medium text-[#2c2c2c] hover:text-[#d1452a]"
              >
                Pricing
              </Link>
              <Link
                href="/cart"
                className="text-lg font-medium text-[#2c2c2c] hover:text-[#d1452a]"
              >
                Cart(0)
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
