"use client";

import { useState } from "react";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Background from "@/components/Background";
import BootScreen from "@/components/BootScreen";
import Cursor from "@/components/Cursor";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Achievements from "@/components/Achievements";
export default function Home() {

  const [bootFinished, setBootFinished] = useState(false);

  return (

<main className="relative min-h-screen bg-black text-white overflow-hidden">

  <Cursor />
    
  <Background />


  <div className="relative z-10">

    {!bootFinished && (
      <BootScreen 
        onFinish={() => setBootFinished(true)}
      />
    )}


    {bootFinished && (
      <>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </>
    )}

  </div>


</main>

  );

}
