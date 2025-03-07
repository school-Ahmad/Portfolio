import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import melogo from "./assets/me-cartoon.png";
import "./App.css";

export const AboutMe = () => {
  return (
    <div className="bg-[#f2fa9b] w-full h-full rounded-2xl px-16 py-5 md:py-0 shadow-lg flex flex-col items-center relative ">
      <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[150px] font-cooper text-[#1f2e13] opacity-100 text-center mt-8 mb-8 lg:mb-16 ">
        AHMAD ARAB
      </h1>

      <div className="flex flex-col lg:flex-row justify-between items-center w-full relative z-10">
        <div className="w-full lg:w-1/3 text-center lg:text-left mb-8 lg:mb-0">
          <p className="text-[#1f2e13] mb-6 text-base lg:text-lg">
            Ik ben Ahmad, 19 jaar oud en volg de opleiding Software Developer
            aan het Grafisch Lyceum Rotterdam. Ik ben gepassioneerd over het
            bouwen van websites en het ontwikkelen van mijn technische
            vaardigheden.
          </p>
          <div className="flex justify-center lg:justify-start space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1f2e13]  text-[#f2fa9b] p-3 rounded-full hover:bg-[#1a260f]"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/ahmad-arab-9a8190340/?trk=opento_sprofile_topcard"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1f2e13] text-[#f2fa9b] p-3 rounded-full hover:bg-[#1a260f]"
            >
              <FaLinkedinIn size={24} />
            </a>
          </div>
        </div>

        <div className="z-0 w-full lg:w-1/2 lg:-mt-36">
          <img src={melogo} alt="Ahmad Arab" />
        </div>

        <div className="w-full lg:w-1/3 text-center lg:text-right">
          <p className="text-[#1f2e13] mb-6 text-base lg:text-lg">
            Ik wil mijn ervaring uit de opleiding Medewerker Sign combineren met
            mijn huidige studie Software Developer om creatieve en visueel
            sterke softwareoplossingen te bouwen.
          </p>
          <div className="w-full flex justify-end">
            <a
              href="/cv.pdf"
              download
              className="justify-self-end bg-[#1f2e13] text-[#f2fa9b] p-3 rounded-full w-max h-max hover:bg-[#1a260f] flex items-center justify-center mx-auto lg:mx-0"
            >
              CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
