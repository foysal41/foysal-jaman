import Image from "next/image";
import React from "react";
import projectOne from "@/app/assets/projectOne.png";
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
    image: projectOne,
    technologies: ["Next.Js", "MongoDB", "Tailwind CSS"],
    project_Name: "Hire Loop",
    description: "KeenKeeper is a modern web application designed to help users maintain meaningful connections with their friends and family.",
    liveUrl: "https://project2.com",
    githubUrl: "https://github.com/foysal/project2",
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

            <div className="flex flex-row gap-3 justify-center items-center my-3 ">
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
