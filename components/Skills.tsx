"use client";

import { motion } from "framer-motion";

const categories = [
  {
    title: "💻 Programming",
    skills: [
      "Python",
      "SQL",
    ],
  },

  {
    title: "🤖 Artificial Intelligence",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "Generative AI",
      "Natural Language Processing",
      "Large Language Models (LLMs)",
      "Retrieval-Augmented Generation (RAG)",
      "Model Training & Evaluation",
    ],
  },

  {
    title: "⚙️ Frameworks & Libraries",
    skills: [
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "OpenCV",
      "MediaPipe",
      "YOLO",
      "Pandas",
      "Matplotlib",
      "NumPy",
    ],
  },

  

  {
    title: "🌐 Backend & Development",
    skills: [
      "FastAPI",
      "REST APIs",
      "Git",
      "GitHub",
    ],
  },

  {
    title: "🗄 Databases",
    skills: [
      "SQLite",
      "Qdrant",
      "ChromaDB",
    ],
  },
  
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 uppercase tracking-[6px] mb-3">
            Technologies
          </p>

          <h2 className="text-5xl font-bold text-white">
            Technical Skills
          </h2>

          <p className="text-gray-400 mt-5">
            Technologies, frameworks and tools I use to build AI-powered applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {categories.map((category, index) => (

            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
              }}
              whileHover={{
                y: -6,
              }}
              className="
                rounded-3xl
                border
                border-cyan-500/20
                bg-[#0B1120]
                p-7
                hover:border-cyan-400
                hover:shadow-[0_0_35px_rgba(34,211,238,0.2)]
                transition-all
              "
            >

              <h3 className="text-2xl font-bold text-cyan-400 mb-6">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">

                {category.skills.map((skill) => (

                  <span
                    key={skill}
                    className="
                      px-4
                      py-2
                      rounded-full
                      bg-cyan-500/10
                      border
                      border-cyan-500/20
                      text-gray-200
                      text-sm
                      hover:bg-cyan-500/20
                      transition
                    "
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}