"use client";

import { motion } from "framer-motion";
import { Trophy, Presentation } from "lucide-react";

const achievements = [
  {
    icon: <Trophy className="w-8 h-8 text-yellow-400" />,
    title: "Teknofest 2026 AI in Health Competition",
    badge: "🏆 Finalist",
    description:
      "Reached the Finalist Stage as a member of Team InnovaX by developing an AI-powered healthcare solution focused on clinical decision support.",
  },

  {
    icon: <Presentation className="w-8 h-8 text-cyan-400" />,
    title: "UNRWA First SparkTech 2025 Exhibition",
    badge: "🎤 Exhibition Participant",
    description:
      "Presented an AI project at the UNRWA First SparkTech 2025 Exhibition, demonstrating technical innovation, teamwork, and problem-solving skills to visitors and judges.",
  },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="min-h-screen py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 uppercase tracking-[5px] mb-3">
            Recognition
          </p>

          <h2 className="text-5xl font-bold text-white">
            Achievements
          </h2>

          <p className="text-gray-400 mt-5">
            Competitions, exhibitions and milestones throughout my AI journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">

          {achievements.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -6,
                scale: 1.02,
              }}
              className="
                rounded-3xl
                border
                border-cyan-500/20
                bg-[#0B1120]
                p-8
                shadow-lg
                hover:shadow-cyan-500/20
                transition-all
              "
            >

              <div className="flex items-center gap-4 mb-6">
                {item.icon}

                <div>
                  <h3 className="text-xl font-bold text-white">
                    {item.title}
                  </h3>

                  <span
                    className="
                    inline-block
                    mt-2
                    px-3
                    py-1
                    rounded-full
                    bg-cyan-500/10
                    border
                    border-cyan-500/20
                    text-cyan-300
                    text-sm
                    "
                  >
                    {item.badge}
                  </span>
                </div>
              </div>

              <p className="text-gray-400 leading-7">
                {item.description}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}