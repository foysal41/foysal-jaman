import Image from "next/image";
import React from "react";
import projectOne from "@/app/assets/projectOne.png";
import projectTwo from "@/app/assets/skill-sphere-project.png";
import projectThree from "@/app/assets/keenkeeper-project.png";
import projectFour from "@/app/assets/docAppointMent-project.png";
import projectFive from "@/app/assets/digiTools-project.png";
import { IoArrowForward } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const projectData = [
  {
    id: 1,
    image: projectOne,
    technologies: ["Next.js", "React.Js", "Better Auth"],
    project_Name: "KeenKeeper-Social App",
    description:
      "KeenKeeper is a modern web application designed to help users maintain meaningful connections with their friends and family.",
    liveUrl: "https://project1.com",
    githubUrl: "https://github.com/foysal/project1",
  },
  {
    id: 2,
    image: projectTwo,
    technologies: [ "MongoDB", "Better Auth", "Toastify" , "(ES6+)"],
    project_Name: "SkillSphere – Online Learning Platform",
    description: "A secure online learning platform featuring authentication, course browsing, protected lessons, profile management, and dynamic course search functionality.",
    liveUrl: "https://b13-a8-skill-sphere-theta.vercel.app/",
    githubUrl: "https://github.com/foysal41/B13-A8-Skill-Sphere",
  },
   {
    id: 3,
    image: projectThree,
    technologies: ["React.js", "DaisyUI", "Tailwind CSS", "Context API", "Recharts"],
    project_Name: "Keen Keeper – Friend Connection Platform",
    description: "Interactive friend management platform enabling users to explore profiles, track activities, and manage communications through global state.",
    liveUrl: "https://b13-a7-keen-keeper-puce.vercel.app/",
    githubUrl: "https://github.com/foysal41/B13-A7-keen-keeper",
  },
   {
    id: 4,
    image: projectFour,
    technologies: ["Next.Js", "MongoDB", "JWT", "Better Auth"],
    project_Name: "Doc Appoint – Doctor Appointment Booking Platform",
    description: "Full-stack healthcare platform enabling secure doctor discovery, appointment booking, authentication, dashboard management, and personalized booking tracking.",
    liveUrl: "https://docappoint-murex.vercel.app/",
    githubUrl: "https://github.com/foysal41/docappoint",
  },
    {
    id: 5,
    image: projectFive,
    technologies: ["React.js,", "ES6+", "Toastify"],
    project_Name: "DigiTools – Digital Tools Marketplace",
    description: "Responsive digital marketplace for discovering productivity tools, managing purchases, and enhancing workflow through interactive shopping experiences.",
    liveUrl: "https://b13-a6-digi-tools-platform-ten.vercel.app/",
    githubUrl: "https://github.com/foysal41/B13-A6-DigiTools-Platform",
  },
];

export default function Projects() {
  return (
    <div className="px-4 " id="projects">
      <div className="text-center z-10 mb-10">
        <h2 className="text-5xl">Projects</h2>
        <p className="text-base">View my all projects here.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        {projectData.map((project, idx) => (
          <div key={idx} className="border border-black/10 ">
            <div className=" ">
              <Image src={project.image} alt="project_one"></Image>
            </div>

            <div className="flex flex-wrap  gap-3 justify-center items-center my-3 ">
              {project.technologies.map((technologie, idx) => (
                <span
                  key={idx}
                  className="border border-purple-500 rounded-full px-2 py-1 text-purple-500 text-sm"
                >
                  {technologie}
                </span>
              ))}
            </div>

            <div className="px-4">
              <h3 className="font-bold text-xl">{project.project_Name}</h3>
              <p>{project.description}</p>
            </div>

            <div className="flex items-center justify-between px-4 py-3">
              <Link href={project.liveUrl}   className="flex items-center gap-2"> Live Demo <IoArrowForward /></Link>
            
            <Link href={project.githubUrl}  className="flex items-center gap-2 text-sm text-black/50">  <FaGithub /> Github</Link>
             
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-5 ">
        <button className="  border inline-auto border-purple-500 px-3 py-2 text-purple-500  rounded-full">
          See All Projects
        </button>
      </div>
    </div>
  );
}
