"use client";

import React, { useState } from "react";

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { DiJavascript, DiMongodb } from "react-icons/di";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiBetterauth, SiFigma } from "react-icons/si";

const skills = [
  {
    name: "HTML5",
    icon: <FaHtml5 className="text-[#E34F26]" />,
    category: "frontend",
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt className="text-[#1572B6]" />,
    category: "frontend",
  },
  {
    name: "JavaScript",
    icon: <DiJavascript className="text-[#F7DF1E]" />,
    category: "frontend",
  },
  {
    name: "React JS",
    icon: <FaReact className="text-[#61DAFB]" />,
    category: "frontend",
  },
  {
    name: "Next JS",
    icon: <RiNextjsFill className="text-black" />,
    category: "frontend",
  },
  {
    name: "Tailwind CSS",
    icon: <RiTailwindCssFill className="text-[#06B6D4]" />,
    category: "frontend",
  },

  {
    name: "Node JS",
    icon: <FaNodeJs className="text-[#339933]" />,
    category: "backend",
  },
  {
    name: "Express JS",
    icon: <SiExpress className="text-black" />,
    category: "backend",
  },
  {
    name: "MongoDB",
    icon: <DiMongodb className="text-[#47A248]" />,
    category: "backend",
  },
  {
    name: "Better Auth",
    icon: <SiBetterauth className="text-[#F97316]" />,
    category: "backend",
  },

  {
    name: "Git",
    icon: <FaGitAlt className="text-[#F05032]" />,
    category: "tools",
  },
  {
    name: "GitHub",
    icon: <FaGithub className="text-black" />,
    category: "tools",
  },
  {
    name: "Figma",
    icon: <SiFigma className="text-[#F24E1E]" />,
    category: "tools",
  },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredSkills =
    activeTab === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeTab);

  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      {/* Heading */}
      <div className="text-center z-10 pb-5">
        <h2 className="text-5xl">My Skills </h2>
        <p className="text-base">
          Technologies and tools I use to build modern web applications.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex items-center justify-center mb-12">
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => setActiveTab("all")}
            className={`border rounded-full px-6 py-2 cursor-pointer transition-all duration-300 ${
              activeTab === "all"
                ? "bg-black text-white border-black"
                : "border-black/20 hover:bg-black hover:text-white"
            }`}
          >
            All
          </button>

          <button
            onClick={() => setActiveTab("frontend")}
            className={`border rounded-full px-6 py-2 cursor-pointer transition-all duration-300 ${
              activeTab === "frontend"
                ? "bg-black text-white border-black"
                : "border-black/20 hover:bg-black hover:text-white"
            }`}
          >
            Frontend
          </button>

          <button
            onClick={() => setActiveTab("backend")}
            className={`border rounded-full px-6 py-2 cursor-pointer transition-all duration-300 ${
              activeTab === "backend"
                ? "bg-black text-white border-black"
                : "border-black/20 hover:bg-black hover:text-white"
            }`}
          >
            Backend
          </button>

          <button
            onClick={() => setActiveTab("tools")}
            className={`border rounded-full px-6 py-2 cursor-pointer transition-all duration-300 ${
              activeTab === "tools"
                ? "bg-black text-white border-black"
                : "border-black/20 hover:bg-black hover:text-white"
            }`}
          >
            Tools
          </button>
        </div>
      </div>

      {/* Skills */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {filteredSkills.map((skill) => (
          <div
            key={skill.name}
            className="min-h-40 border border-black/15 rounded-2xl flex flex-col items-center justify-center gap-4 p-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
          >
            <div className="text-4xl md:text-6xl ">{skill.icon}</div>

            <h3 className="text-md md:text-xl font-semibold">{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
