"use client";

import { TypeAnimation } from "react-type-animation";

export default function Typing() {

  return (

    <div className="mt-8 text-2xl text-cyan-300">

      <TypeAnimation
        sequence={[
          "AI Engineer ",
          2000,
          "Machine Learning ",
          2000,
          "Deep Learning ",
          2000,
          "Computer Vision ",
          2000,
          "RAG Systems ",
          2000,
          "LLM ",
          2000,
        ]}
        speed={45}
        repeat={Infinity}
      />

    </div>

  );

}