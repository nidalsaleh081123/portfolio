"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name:"Skills", href:"#skills"},
  { name: "Projects", href: "#projects" },
  { name: "Achievements",href: "#achievements"},
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {

  const [active, setActive] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {

    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(

      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            setActive(entry.target.id);

          }

        });

      },

      {
        threshold: 0.5,
      }

    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();

  }, []);

  return (

    <header
      className="
      fixed
      top-0
      left-0
      w-full
      z-50
      backdrop-blur-xl
      bg-black/20
      border-b
      border-cyan-500/10
      "
    >

      <div
        className="
        max-w-7xl
        mx-auto
        flex
        justify-between
        items-center
        px-8
        py-5
        "
      >

        {/* Logo */}

        <a
          href="#home"
          className="
          text-2xl
          font-bold
          text-cyan-400
          tracking-wider
          "
        >
          Nidal<span className="text-white">.</span>
        </a>

        {/* Desktop */}

        <nav
          className="
          hidden
          md:flex
          gap-10
          "
        >

          {links.map((link) => (

            <a
              key={link.name}
              href={link.href}
              className={`
              transition-all
              duration-300
              hover:text-cyan-400
              ${
                active === link.href.replace("#", "")
                  ? "text-cyan-400"
                  : "text-gray-300"
              }
              `}
            >
              {link.name}
            </a>

          ))}

        </nav>

        {/* Mobile Button */}

        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>

      </div>

      {/* Mobile Menu */}

      {mobileOpen && (

        <div
          className="
          md:hidden
          bg-black/90
          backdrop-blur-xl
          "
        >

          {links.map((link) => (

            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="
              block
              px-8
              py-4
              border-b
              border-cyan-500/10
              text-gray-300
              hover:text-cyan-400
              "
            >
              {link.name}
            </a>

          ))}

        </div>

      )}

    </header>

  );

}