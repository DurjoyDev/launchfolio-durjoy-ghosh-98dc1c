"use client";

"use client";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  
  const [isOpen, setIsOpen] = useState(false);
  
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-3" : "py-5"}`}>
      <div className={`max-w-6xl mx-auto px-6 flex items-center justify-between transition-all duration-300 ${scrolled ? "bg-[var(--color-nav-bg)] backdrop-blur-md rounded-2xl border shadow-lg border-[var(--color-border)] py-3 px-6" : ""}`}>
        <a href="#hero" className="text-xl font-bold tracking-tight" style={{color:"var(--color-heading)"}}>
          Durjoy<span style={{color:"#e11d48"}}>.</span>
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="nav-link font-medium text-sm transition-colors hover:opacity-80 block md:inline-block py-2 md:py-0">About</a>
            <a href="#gallery" className="nav-link font-medium text-sm transition-colors hover:opacity-80 block md:inline-block py-2 md:py-0">Gallery</a>
            <a href="#skills" className="nav-link font-medium text-sm transition-colors hover:opacity-80 block md:inline-block py-2 md:py-0">Skills</a>
            <a href="#achievements" className="nav-link font-medium text-sm transition-colors hover:opacity-80 block md:inline-block py-2 md:py-0">Achievements</a>
            <a href="#education" className="nav-link font-medium text-sm transition-colors hover:opacity-80 block md:inline-block py-2 md:py-0">Education</a>
            <a href="#contact" className="nav-link font-medium text-sm transition-colors hover:opacity-80 block md:inline-block py-2 md:py-0">Contact</a>
          <a href="#contact" className="px-5 py-2 rounded-full text-sm font-semibold btn-primary shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5">Let's Talk</a>
        </div>

        <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)} style={{color:"var(--color-heading)"}}>
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 w-full p-4 md:hidden">
          <div className="p-6 rounded-2xl backdrop-blur-xl border shadow-xl flex flex-col gap-4" style={{background:"var(--color-nav-bg)", borderColor:"var(--color-border)"}}>
            <a href="#about" className="nav-link font-medium text-sm transition-colors hover:opacity-80 block md:inline-block py-2 md:py-0">About</a>
            <a href="#gallery" className="nav-link font-medium text-sm transition-colors hover:opacity-80 block md:inline-block py-2 md:py-0">Gallery</a>
            <a href="#skills" className="nav-link font-medium text-sm transition-colors hover:opacity-80 block md:inline-block py-2 md:py-0">Skills</a>
            <a href="#achievements" className="nav-link font-medium text-sm transition-colors hover:opacity-80 block md:inline-block py-2 md:py-0">Achievements</a>
            <a href="#education" className="nav-link font-medium text-sm transition-colors hover:opacity-80 block md:inline-block py-2 md:py-0">Education</a>
            <a href="#contact" className="nav-link font-medium text-sm transition-colors hover:opacity-80 block md:inline-block py-2 md:py-0">Contact</a>
            <a href="#contact" className="mt-4 px-5 py-3 text-center rounded-xl font-bold btn-primary">Let's Talk</a>
          </div>
        </div>
      )}
    </nav>
  );
}