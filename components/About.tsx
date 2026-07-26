"use client";

import { motion } from "framer-motion";
// import Image from "next/image";


export default function About() {

  return (

    <section
      id="about"
      className="
      min-h-screen
      flex
      items-center
      px-10
      py-20
      "
    >

      <div
        className="
        max-w-6xl
        mx-auto
        grid
        md:grid-cols-2
        gap-16
        items-center
        "
      >


        {/* Image Left */}

        <motion.div

          initial={{
            opacity:0,
            x:-80
          }}

          whileInView={{
            opacity:1,
            x:0
          }}

          transition={{
            duration:0.8
          }}

          className="
          flex
          justify-center
          "
        >

          <div
            className="
            w-72
            h-72
            rounded-full
            overflow-hidden
            border-4
            border-cyan-400
            shadow-[0_0_40px_rgba(34,211,238,0.5)]
            "
          >

            <img

              src="/portfolio/image.jpeg"

              alt="Nidal Saleh"

              width={300}

              height={300}

              className="
              w-full
              h-full
              object-cover
              "

            />

          </div>


        </motion.div>




        {/* Text Right */}

        <motion.div

          initial={{
            opacity:0,
            x:80
          }}

          whileInView={{
            opacity:1,
            x:0
          }}

          transition={{
            duration:0.8
          }}

          className="
          text-right
          "
        >


          <h2
            className="
            text-5xl
            font-bold
            text-cyan-400
            mb-8
            "
          >
            About Me
          </h2>



          <div
            className="
            text-gray-300
            text-lg
            leading-9
            "
          >

            <h3
              className="
              text-3xl
              font-bold
              text-white
              mb-5
              "
            >
            Hi, I'm Nidal Saleh
            </h3>

            <p className="mb-5">
              An AI Engineer specialized in Artificial Intelligence, building intelligent systems and innovative solutions using Machine Learning, Deep Learning, Computer Vision, and Large Language Models (LLMs).
            </p>


          </div>


        </motion.div>


      </div>


    </section>

  );
}
