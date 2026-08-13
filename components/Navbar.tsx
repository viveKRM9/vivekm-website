"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Work", href: "/work" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled ? "border-b border-zinc-200/80 bg-white/95 shadow-sm backdrop-blur" : "bg-transparent"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        
        {/* Logo linking to Home */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 text-lg font-bold text-white shadow-lg">VM</div>
          <div>
            <div className="text-xl font-bold tracking-tight text-zinc-900">VivekM</div>
            <div className="-mt-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-blue-600">Technologies</div>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={`text-sm font-medium transition-all hover:text-blue-600 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full ${pathname === link.href ? "text-blue-600 after:w-full" : "text-zinc-600"}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="hidden rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-2.5 text-sm font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl md:block">
          Get a Quote
        </Link>

        {/* Mobile Menu Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="rounded-lg border border-zinc-200 px-3 py-2 transition hover:bg-zinc-50 md:hidden">
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="border-t border-zinc-200 bg-white px-6 py-5 shadow-lg md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} onClick={() => setMenuOpen(false)} className="text-left text-base font-medium text-zinc-600 transition hover:text-blue-600">
                {link.name}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setMenuOpen(false)} className="rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-5 py-3 text-center font-semibold text-white shadow-lg">
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}