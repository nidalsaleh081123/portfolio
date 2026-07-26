"use client";

import Particles from "@tsparticles/react";


export default function ParticleBackground() {

  return (

    <Particles

      id="particles"

      options={{

        background: {
          color: {
            value: "transparent",
          },
        },


        particles: {

          number: {
            value: 80,
          },


          size: {
            value: {
              min: 1,
              max: 3,
            },
          },


          opacity: {
            value: 0.4,
          },


          move: {
            enable: true,
            speed: 0.6,
          },


          links: {
            enable: true,
            opacity: 0.15,
          },

        },


        interactivity: {

          events: {

            onHover: {

              enable: true,

              mode: "repulse",

            },

          },

        },

      }}

      className="absolute inset-0 -z-10"

    />

  );
}