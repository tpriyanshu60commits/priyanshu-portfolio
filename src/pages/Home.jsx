import React from "react";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import Experience from "../sections/Experience";
import Achievements from "../sections/Achievements";
import Education from "../sections/Education";
import Contact from "../sections/Contact";

export default function Home() {

  return (
    <div className="flex flex-col">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Achievements />
      <Education />
      <Contact />
    </div>
  );
}
