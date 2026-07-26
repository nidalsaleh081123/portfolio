"use client";

import { useEffect, useRef } from "react";


export default function MatrixRain() {

  const canvasRef = useRef<HTMLCanvasElement>(null);


  useEffect(() => {

    const canvas = canvasRef.current;

    if (!canvas) return;


    const ctx = canvas.getContext("2d");

    if (!ctx) return;


    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;


    const characters =
      "01アイウエオABCDEFGHIJKLMNOPQRSTUVWXYZ{}[]<>/\\$#";


    const fontSize = 16;

    const columns =
      Math.floor(canvas.width / fontSize);


    const drops: number[] =
      Array(columns).fill(1);



    const draw = () => {


      ctx.fillStyle = "rgba(0,0,0,0.08)";

      ctx.fillRect(
        0,
        0,
        canvas.width,
        canvas.height
      );


      ctx.fillStyle = "#00ff88";

      ctx.font =
        `${fontSize}px monospace`;



      for (
        let i = 0;
        i < drops.length;
        i++
      ) {


        const text =
          characters[
            Math.floor(
              Math.random() *
              characters.length
            )
          ];


        ctx.fillText(

          text,

          i * fontSize,

          drops[i] * fontSize

        );



        if (
          drops[i] * fontSize >
          canvas.height &&
          Math.random() > 0.975
        ) {

          drops[i] = 0;

        }


        drops[i]++;

      }

    };



    const interval =
      setInterval(draw, 40);



    const resize = () => {

      canvas.width =
        window.innerWidth;

      canvas.height =
        window.innerHeight;

    };


    window.addEventListener(
      "resize",
      resize
    );


    return () => {

      clearInterval(interval);

      window.removeEventListener(
        "resize",
        resize
      );

    };


  }, []);



  return (

    <canvas

      ref={canvasRef}

    className="
    absolute
    inset-0
    z-0
    opacity-30  
    pointer-events-none
    "

    />

  );

}