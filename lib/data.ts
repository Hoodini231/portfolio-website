import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
// import corpcommentImg from "@/public/corpcomment.png";
// import rmtdevImg from "@/public/rmtdev.png";
// import wordanalyticsImg from "@/public/wordanalytics.png";
import hack4goodImg from "@/public/hack4good.png";
import ideajamImg from "@/public/ideajam.png";
import TBSImg from "@/public/TBS.png";
import turtleImg from "@/public/turtogotchi.png";
import runnerImg from "@/public/run.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  // {
  //   name: "Experience",
  //   hash: "#experience",
  // },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

// export const experiencesData = [
//   {
//     title: "Hack for Good, DSC",
//     location: "Singapore, NUS",
//     description:
//       "Back-end developer devel",
//     icon: React.createElement(LuGraduationCap),
//     date: "2024",
//   },
//   {
//     title: "IdeaJam 2024",
//     location: "Singapore, NTU",
//     description:
//       "Participated in a ideathon which focused on supply chain issues, in particular agritech and food security in Singapore. My team proposed a solution which helps local suppliers with sales and reducing food wastage for suppliers and retailers.",
//     icon: React.createElement(CgWorkAlt),
//     date: "2024",
//   },
//   {
//     title: "BrainHack 2024, Runner's up for People's Choice",
//     location: "Singapore, DSTA",
//     description:
//       "Full-stack developer for turtogotchi, ",
//     icon: React.createElement(FaReact),
//     date: "2021 - present",
//   },
// ] as const;

export const projectsData = [
  {
    title: "Turtogatchi",
    description:
      "I worked as a full-stack developer, while also being the lead backend developer in charge of integration and design of our database. This project aims to promote education on conservation efforts and links with the local Singaporean turtle musesum to assist them financially.",
    tags: ["Flutter", "DART", "Firebase"],
    imageUrl: turtleImg,
  },
  {
    title: "Hack for Good",
    description:
      "I was the lead back-end developer for this project in charge of implementing all API calls to the back-end and integrating them to the frontend. This project aims to revamp the volunteer experience in Singapore for NPO's",
    tags: ["React", "TypeScript", "Node.js", "Express", "MongoDB"],
    imageUrl: hack4goodImg,
  },
  {
    title: "Super Fresh",
    description:
      "Participated with my team of 4 to produce a innovative idea in tackling supply chain agricultural issues in Singapore, in particular food security. We proposed a solution which helps local suppliers with sales and reducing food wastage for suppliers and retailers.",
    tags: ["Figma"],
    imageUrl: ideajamImg,
  },
  {
    title: "Runner's High",
    description:
      "Participated in a team of 2 to develop a running app that revamps the running experience for users. Through campaign mission gamification, challenges, achievements and AI produced work out plans",
    tags: ["Flutter", "DART", "Firebase",  "Gemini-API"],
    imageUrl: runnerImg,
  },
  {
    title: "Train Management System",
    description:
      "Created a full-stack desktop application for a train management system. Developed for managing train routes and booking seats in real time. This project was inspired by my curosity in how bullet train system worked in Japan.",
    tags: ["Tkinter", "Python", "MYSQL" ],
    imageUrl: TBSImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Java",
  "C",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "MongoDB",
  "Express",
  "PostgreSQL",
  "Python",
  
] as const;
