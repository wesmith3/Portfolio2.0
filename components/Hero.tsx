'use client'
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import TechStack from "./TechStack";
import Contact from "./Contact";

function Hero() {
  return (
    <div className="pb-20 pt-64">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="orange"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="orange" />
      </div>
      <div className="h-screen w-full dark:bg-black bg-white  dark:bg-grid-orange/[0.1] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
      </div>
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2l lg:max-w-[60vw] flex flex-col items-center justify-center">
            <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
                Hello World!
            </h2>
            <TextGenerateEffect 
            className="text-center text-[60px] md:text-5xl lg:text-6xl"
            words="I&apos;m Wesley Smith, Full Stack Developer"
            />
            <p className="text-center md:tracking-wider mb-4 text-small md:text-lg lg:text-2xl">
                Based in Chelan, WA
            </p>
            <TechStack />
            <a href="#projects">
              <MagicButton 
                title="Show My Work"
                icon={<FaLocationArrow />}
                position="right"
              />

            </a>
            <Contact />
        </div>

      </div>
    </div>
  );
}

export default Hero;
