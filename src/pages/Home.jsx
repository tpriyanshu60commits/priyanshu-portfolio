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
    <div className="space-y-4 sm:space-y-8">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Achievements />
      <Education />
      <Contact />
    </div>
  );
}
