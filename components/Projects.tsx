// "use client";

// import { motion } from "framer-motion";


// const projects = [

// {
// title:"DentalVision AI",
// desc:"AI dental shape prediction system using Computer Vision and Deep Learning.",
// tech:"Python • PyTorch • OpenCV"
// },

// {
// title:"SMART STORE RAG",
// desc:"RAG based intelligent shopping assistant with vector search.",
// tech:"LangChain • Qdrant • Gemini"
// },

// {
// title:"Driver Alert System",
// desc:"Real-time driver monitoring using facial landmarks.",
// tech:"OpenCV • MediaPipe • Python"
// },

// {
// title:"Missense Mutation Classification",
// desc:"Machine learning pipeline for pathogenic mutation classification.",
// tech:"Scikit-learn • XGBoost"
// }

// ];



// export default function Projects(){


// return (

// <section
// id="projects"
// className="
// min-h-screen
// px-6
// py-20
// "
// >


// <h2
// className="
// text-center
// text-5xl
// font-bold
// text-cyan-400
// mb-16
// "
// >
// Projects
// </h2>



// <div
// className="
// grid
// md:grid-cols-2
// gap-8
// max-w-5xl
// mx-auto
// "
// >


// {
// projects.map((p,i)=>(

// <motion.div

// key={i}

// initial={{
// opacity:0,
// y:50
// }}

// whileInView={{
// opacity:1,
// y:0
// }}

// transition={{
// delay:i*0.15
// }}

// className="
// p-8
// rounded-2xl
// bg-[#0d1117]
// border
// border-cyan-500/20
// hover:border-cyan-400
// transition
// "

// >


// <h3
// className="
// text-2xl
// font-bold
// text-white
// mb-4
// "
// >
// {p.title}
// </h3>


// <p
// className="
// text-gray-400
// mb-4
// "
// >
// {p.desc}
// </p>


// <span
// className="
// text-cyan-400
// "
// >
// {p.tech}
// </span>


// </motion.div>


// ))
// }


// </div>


// </section>

// )

// }
"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="
        relative
        min-h-screen
        py-24
        px-6
      "
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Title */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* <p className="text-cyan-400 uppercase tracking-[6px] mb-4">
            Portfolio
          </p> */}

          <h2 className="text-5xl font-bold text-white">
             Projects
          </h2>

          {/* <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            A collection of AI, Machine Learning, Computer Vision,
            and Full Stack projects demonstrating real-world problem solving.
          </p> */}
        </motion.div>

        {/* Projects Grid */}

        <div
          // className="
          //   grid
          //   lg:grid-cols-2
          //   gap-10
          // "
            className="
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
            gap-6
            "
        >
          {projects.map((project, index) => (

            <motion.div
              key={project.id}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
              }}
            >
              <ProjectCard
                title={project.title}
                image={project.image}
                description={project.description}
                technologies={project.technologies}
                github={project.github}
                demo={project.demo}
                featured={project.featured}
              />
            </motion.div>

          ))}
        </div>

      </div>
    </section>
  );
}