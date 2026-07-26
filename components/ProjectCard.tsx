"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface ProjectCardProps {
  title: string;
  image: string;
  description: string;
  technologies: string[];
  github: string;
  demo?: string;
  featured?: boolean;
}

export default function ProjectCard({
  title,
  image,
  description,
  technologies,
  github,
  demo,
  featured,
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -5,
        scale: 1.015,
      }}
      transition={{ duration: 0.3 }}
      className={`
        group
        overflow-hidden
        rounded-2xl
        border
        ${
          featured
            ? "border-cyan-400/60"
            : "border-cyan-500/20"
        }
        bg-[#0B1120]
        shadow-lg
        hover:shadow-cyan-500/20
        transition-all
        duration-300
      `}
    >
      {/* Image */}

      <div className="relative h-56 overflow-hidden">

        <Image
          src={image}
          alt={title}
          fill
          className="
            object-cover
            transition-transform
            duration-500
            group-hover:scale-110
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black
            via-black/30
            to-transparent
          "
        />
      </div>

      {/* Content */}

      <div className="p-5">

        <h3
          className="
            text-2xl
            font-bold
            text-white
            mb-3
          "
        >
          {title}
        </h3>

        <p
          className="
            text-gray-400
            text-sm
            leading-6
            mb-5
          "
        >
          {description}
        </p>

        {/* Technologies */}

        <div
          className="
            flex
            flex-wrap
            gap-2
            mb-6
          "
        >
          {technologies.map((tech) => (
            <span
              key={tech}
              className="
                px-3
                py-1
                rounded-full
                text-xs
                bg-cyan-500/10
                border
                border-cyan-500/20
                text-cyan-300
              "
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}

        <div className="flex gap-4">

          <a
            href={github}
            target="_blank"
            className="
              flex
              items-center
              gap-2
              px-4
              py-2
              rounded-lg
              bg-cyan-500/10
              border
              border-cyan-400/20
              hover:bg-cyan-500/20
              transition
            "
          >
            <FaGithub />
            GitHub
          </a>

          {demo && (
            <a
              href={demo}
              target="_blank"
              className="
                flex
                items-center
                gap-2
                px-4
                py-2
                rounded-lg
                bg-white/10
                hover:bg-white/20
                transition
              "
            >
              <FaExternalLinkAlt />
              Demo
            </a>
          )}

        </div>

      </div>
    </motion.div>
  );
}