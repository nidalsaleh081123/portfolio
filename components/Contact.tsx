"use client";

import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

export default function Contact() {

const whatsapp =
  `https://wa.me/963935315265?text=${encodeURIComponent(
    "مرحبًا نضال، اطلعت على معرض أعمالك وأرغب في مناقشة مشروع معك."
  )}`;
  
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center px-10 py-20"
    >
      <div className="max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-24">

        {/* Left Side */}
        <div>

          <h2 className="text-5xl font-bold text-cyan-400 mb-10">
            Contact
          </h2>

          <div className="space-y-8">

            <div className="flex items-start gap-4">
              <MdEmail
                size={28}
                className="text-cyan-400 mt-1"
              />

              <div>
                <h4 className="text-white font-semibold">
                  Email
                </h4>

                <p className="text-gray-400">
                  nidalsaleh081123@gmail.com
                </p>
              </div>
            </div>



            <div className="flex items-start gap-4">
              <FaPhoneAlt
                size={24}
                className="text-cyan-400 mt-1"
              />

              <div>
                <h4 className="text-white font-semibold">
                  Phone
                </h4>

                <p className="text-gray-400">
                  +963949509743
                </p>
              </div>
            </div>



            <div className="flex items-start gap-4">
              <FaWhatsapp
                size={28}
                className="text-green-400 mt-1"
              />

              <div>
                <h4 className="text-white font-semibold">
                  WhatsApp
                </h4>

                <p className="text-gray-400">
                  +963935315265
                </p>
              </div>
            </div>



            <div className="flex items-start gap-4">
              <FaMapMarkerAlt
                size={28}
                className="text-red-400 mt-1"
              />

              <div>
                <h4 className="text-white font-semibold">
                  Location
                </h4>

                <p className="text-gray-400">
                  Syria, Damascus, Al-Hussainiya
                </p>
              </div>
            </div>

          </div>

        </div>





        {/* Right Side */}

        <div className="flex flex-col justify-center">

          <h3 className="text-4xl font-bold text-white mb-8">
            Let's build something intelligent together 
          </h3>

          <p className="text-gray-400 mb-10">
            Feel free to contact me through any platform below.
          </p>


          <div className="flex gap-8">

            <a
              href="https://github.com/nidalsaleh081123"
              target="_blank"
              className="
              w-14
              h-14
              rounded-full
              bg-cyan-500/10
              border
              border-cyan-400/30
              flex
              items-center
              justify-center
              hover:bg-cyan-500/20
              hover:scale-110
              transition
              "
            >
              <FaGithub size={28} />
            </a>


            <a
              href="https://www.linkedin.com/in/nidalsaleh081123/"
              target="_blank"
              className="
              w-14
              h-14
              rounded-full
              bg-cyan-500/10
              border
              border-cyan-400/30
              flex
              items-center
              justify-center
              hover:bg-cyan-500/20
              hover:scale-110
              transition
              "
            >
              <FaLinkedin size={28} />
            </a>



            <a
              href={whatsapp}
              target="_blank"
              className="
              w-14
              h-14
              rounded-full
              bg-green-500/10
              border
              border-green-400/30
              flex
              items-center
              justify-center
              hover:bg-green-500/20
              hover:scale-110
              transition
              "
            >
              <FaWhatsapp size={28} />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}