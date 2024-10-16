"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Currently second-year undergraduate student studying {" "}
        <span className="font-medium">Computer Science</span>, I love building tools and 
        applications as such I am an avid hackathon participator. I am a {" "}
        <span className="font-medium">full-stack app developer</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        creative problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          Java, Python, Dart, C, React, Next.js, Node.js, MongoDB, SQL
        </span>
        . I am also currently pursuing certifications in AI and Data analytics. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time internship position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy dancing, participating 
        in physical activites such as running or sports and playing my guitar. I also enjoy{" "}
        <span className="font-medium">learning new things</span> and enjoy reading I am
        currently reading{" "}
        <span className="font-medium">Stardust by Neil Gaiman</span>. 
      </p>
    </motion.section>
  );
}
