"use client";

import React, { useState } from "react";
import { ChevronDown, Code } from "lucide-react";

const timelineData = [
  {
    id: 1,
    title: "Full Stack Developer Intern",
    company: "Hadya Services",
    type: "Internship",
    duration: "Jul 2026 - Present",
    responsibilities: [
      "Building responsive user interfaces using React.js and Next.js.",
      "Developing reusable UI components.",
      "Integrating frontend applications with backend APIs.",
      "Working with Git and GitHub for team collaboration.",
    ],
    skills: ["React", "Next.js", "Tailwind CSS", "Node.js"],
  },
  {
    id: 2,
    title: "Digital Marketing & WordPress Support",
    company: "RishTech Global Ltd.",
    type: "Full-time",
    duration: "Jun 2025 - Present",
    responsibilities: [
      "Developing and maintaining WordPress websites.",
      "Creating responsive layouts using Elementor.",
      "Providing website and digital marketing support.",
    ],
    skills: ["WordPress", "Elementor", "WooCommerce"],
  },
  {
    id: 3,
    title: "CMS & Junior Backend Developer",
    company: "Code Prophet",
    type: "Contract",
    duration: "Jul 2024 - Jan 2025",
    responsibilities: [
      "Designed and maintained WordPress websites.",
      "Worked on backend functionality.",
      "Integrated third-party services.",
    ],
    skills: ["WordPress", "Laravel", "HTML", "CSS"],
  },
];

const ProfessionalTimeline = () => {
  const [openId, setOpenId] = useState(1);

  return (
    <section className="max-w-5xl mx-auto py-16 px-4">
      <div className="text-center z-10 pb-5">
        <h2 className="text-5xl">Professional Experience </h2>
        <p className="text-base">
          My professional journey and work experience.
        </p>
      </div>

      <div>
        {timelineData.map((item) => {
          const isOpen = openId === item.id;

          return (
            <div key={item.id} className="relative pl-12 pb-8">
              {/* Timeline Line */}
              <div className="absolute left-3.75 top-8 bottom-0 w-px bg-gray-300"></div>

              {/* Timeline Dot */}
              <div className="absolute left-2 top-6 w-4 h-4 rounded-full border-2 border-black bg-white"></div>

              {/* Card */}
              <div className="border rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  className="w-full p-5 flex items-start justify-between text-left cursor-pointer hover:bg-gray-50 transition"
                >
                  <div>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gray-100 rounded-lg">
                        <Code size={18} />
                      </div>

                      <div>
                        <h3 className="font-semibold">{item.title}</h3>
                        <p className="text-sm text-gray-500">{item.company}</p>
                      </div>
                    </div>

                    <div className="flex md:flex-row flex-col gap-2 mt-3 ml-11">
                      <span className="border rounded-full px-2 py-1 text-xs w-full md:w-fit  text-center">
                        {item.type}
                      </span>

                      <span className="text-xs text-gray-500 py-1 w-full md:w-fit text-center">
                        {item.duration}
                      </span>
                    </div>
                  </div>

                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Expand Content */}
                {isOpen && (
                  <div className="border-t px-5 py-5">
                    <div className="space-y-2">
                      {item.responsibilities.map((text, index) => (
                        <p
                          key={index}
                          className="text-sm text-gray-600 flex gap-2"
                        >
                          <span>•</span>
                          {text}
                        </p>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 mt-5 pt-4 border-t">
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className="bg-gray-100 rounded-md px-3 py-1 text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProfessionalTimeline;
