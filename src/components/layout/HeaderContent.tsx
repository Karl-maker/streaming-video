'use client'

import { useState, useEffect } from "react";
import Link from "next/link";
import { HeaderContentParams } from "@/types/header.types";

const HeaderContent: React.FC<HeaderContentParams> = ({ logoSrc, items }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full flex items-center justify-between p-4 transition-all z-50 ${scrolled ? "dark:bg-black/80  bg-black/80 backdrop-blur-sm shadow-lg" : "bg-transparent"}`}
    >
      <div className="flex items-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} alt="Logo" className="h-10 mr-5" />
        <nav className="flex space-x-6">
        {items.map(({ name, icon, path }) => (
          <Link key={name} href={path} className="text-xl text-white hover:opacity-80">
            {icon}
          </Link>
        ))}
      </nav>
      </div>
    </header>
  );
};

export default HeaderContent;
