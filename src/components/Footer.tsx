import { Copyright } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-white text-[#2c2c2c] py-6 text-center">
      <p className="flex items-center justify-center gap-1 text-sm">
        <Copyright size={16} className="text-[#d1452a]" />
        <span className="text-[#2c2c2c]">
          2025 Upavan Villa. All rights reserved.
        </span>
      </p>
    </footer>
  );
}
