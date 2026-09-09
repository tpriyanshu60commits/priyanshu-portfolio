import React from "react";
import SectionHeading from "../components/SectionHeading";
import SkillCard from "../components/SkillCard";
import { skillsCategories } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="TECHNOLOGIES"
          title="My Skills."
          subtitle="Tools and technologies I use to build scalable full-stack applications."
        />

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {skillsCategories.map((cat) => (
            <SkillCard
              key={cat.category}
              category={cat.category}
              skills={cat.skills}
              description={cat.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
