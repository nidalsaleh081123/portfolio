"use client";


import Particles from "./Particles";
import MatrixRain from "./MatrixRain";


export default function Background() {


  return (

    <div
      className="
        absolute
        inset-0
        z-0
        overflow-hidden
      "
    >


      {/* Base Black Background */}
      <div
        className="
          absolute
          inset-0
          bg-black
        "
      />


      {/* Matrix Effect */}
      <MatrixRain />


      {/* Particles */}
      <Particles />



      {/* Cyan Glow */}
      <div
        className="
          absolute
          top-0
          left-0
          w-[500px]
          h-[500px]
          rounded-full
          bg-cyan-500/20
          blur-[180px]
        "
      />



      {/* Blue Glow */}
      <div
        className="
          absolute
          bottom-0
          right-0
          w-[500px]
          h-[500px]
          rounded-full
          bg-blue-600/20
          blur-[180px]
        "
      />



      {/* Grid */}
      <div
        className="
          absolute
          inset-0
          bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
          bg-[size:50px_50px]
        "
      />


    </div>

  );

}