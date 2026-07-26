"use client";

import { useEffect, useState } from "react";


export default function Cursor() {

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });


  const [hover, setHover] = useState(false);



  useEffect(() => {


    const move = (e: MouseEvent) => {

      setPosition({
        x: e.clientX,
        y: e.clientY,
      });

    };



    const mouseOver = (e: MouseEvent) => {

      const target = e.target as HTMLElement;


      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A"
      ) {

        setHover(true);

      } else {

        setHover(false);

      }

    };



    window.addEventListener(
      "mousemove",
      move
    );


    window.addEventListener(
      "mouseover",
      mouseOver
    );



    return () => {

      window.removeEventListener(
        "mousemove",
        move
      );


      window.removeEventListener(
        "mouseover",
        mouseOver
      );

    };


  }, []);



  return (

    <div

      className={`
        fixed
        top-0
        left-0
        pointer-events-none
        z-[9999]
        rounded-full
        transition-all
        duration-200
        ease-out
        ${
          hover
          ?
          "w-12 h-12 bg-cyan-400/30 blur-xl"
          :
          "w-6 h-6 bg-cyan-400/20 blur-md"
        }
      `}

      style={{

        transform:
        `translate(
          ${position.x - (hover ? 24 : 12)}px,
          ${position.y - (hover ? 24 : 12)}px
        )`

      }}

    />

  );

}