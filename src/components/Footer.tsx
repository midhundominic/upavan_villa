"use client";

import { Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-[#CCCCCC] pt-16 pb-8 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Contacts */}
        <div>
          <h3 className="text-lg font-semibold text-[#E8542F] mb-4">
            Contacts
          </h3>
          <p className="text-sm">
            Upavan Villa "CARA 40", Convent road 1, Thottakkattukara,
            (Paroorkavala ) Velamparambu road, Aluva, Ernakulam District.
            <br />
            India, 683108
          </p>
          <p className="mt-4 text-sm text-[#FDEBC9]">
            reservation@upavanresort.com
            <br />
            +91 9961407770
            <br />
            +91 9946307770
          </p>
        </div>

        {/* Explore */}
        <div>
          <h3 className="text-lg font-semibold text-[#E8542F] mb-4">Explore</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="/"
                className="hover:text-[#FDEBC9] transition-all duration-300 hover:translate-x-1 inline-block"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/more"
                className="hover:text-[#FDEBC9] transition-all duration-300 hover:translate-x-1 inline-block"
              >
                More
              </a>
            </li>
            <li>
              <a
                href="/gallery"
                className="hover:text-[#FDEBC9] transition-all duration-300 hover:translate-x-1 inline-block"
              >
                Gallery
              </a>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold text-[#E8542F] mb-4">
            Follow Us
          </h3>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/upavanresort/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram
                className="text-[#CCCCCC] hover:text-[#FDEBC9] hover:scale-110 transition-transform duration-300"
                size={28}
              />
            </a>
            <a
              href="https://www.facebook.com/UpavanResort/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook
                className="text-[#CCCCCC] hover:text-[#FDEBC9] hover:scale-110 transition-transform duration-300"
                size={28}
              />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 text-center text-sm text-[#999999]">
        © Upavan Villa
      </div>
    </footer>
  );
}
