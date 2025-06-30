'use client';

import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface LearnButtonProps{
    href: string;
    text?: string;
}

export default function LearnButton({href,text="Learn More"}:LearnButtonProps){
    return(
        <Link
           href={href}
           className="inline-flex items-center gap-2 px-5 py-8 rounded-2xl border border-gray-200 bg-white text-[#0F086A] font-medium shadow-sm hover:shadow-md transition-shadow duration-200"
        >
            {text}
            <ArrowRight size={20}/>
        </Link>
    );
}