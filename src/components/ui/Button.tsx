'use client';

import { useRouter } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

interface ButtonProps {
  text?: string;
  href: string;
  className?: string;
}

export default function Button({ text = 'Get Started', href, className }: ButtonProps) {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={() => router.push(href)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group flex items-center gap-2 bg-[#d1452a] text-white font-semibold text-md px-6 py-3 rounded-lg transition-all duration-300 ease-in-out hover:scale-[1.03] hover:shadow-lg ${className || ''}`}
    >
      <span className="transition-all duration-300">{text}</span>
      <ArrowRight
        size={18}
        className={`transition-transform duration-300 ${isHovered ? 'translate-x-1' : 'translate-x-0'}`}
      />
    </button>
  );
}
