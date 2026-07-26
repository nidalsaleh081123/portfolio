"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";

import Typing from "./Typing";
import Terminal from "./Terminal";
import AIObject from "./AIObject";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        flex
        items-center
      "
    >
      <div className="grid lg:grid-cols-2 gap-16 items-center w-full max-w-7xl mx-auto px-10">

        {/* Left Side */}

        <div>

          <h2 className="text-6xl font-bold leading-tight">
            Hello,
            <br />
            I'm
            <span className="text-cyan-400"> Nidal Saleh</span>
          </h2>

          <Typing />

          {/* Buttons */}

          <div className="relative z-50 flex gap-4 mt-8">
            <a
              href="#projects"
              className="
                px-6
                py-3
                rounded-lg
                bg-cyan-500
                hover:bg-cyan-400
                transition
                font-semibold
              "
            >
              Projects
            </a>

            <a
              href="/portfolio/cv/Nidal_Saleh_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-2
                px-6
                py-3
                rounded-lg
                border
                border-cyan-400
                hover:bg-cyan-500/20
                transition
                font-semibold
              "
            >
              <Download size={18} />
              Download CV
            </a>

          </div>

        </div>

        {/* Right Side */}

        <div className="relative">

          {/* <AIObject /> */}

          <div className="mt-8">
            <Terminal />
          </div>

        </div>

      </div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
      </motion.div>

    </section>
  );
}
