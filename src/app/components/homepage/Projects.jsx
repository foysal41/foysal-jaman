
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
 ArrowDownRight,
  ArrowUpRight,
  GitBranch,
  ExternalLink,
} from "lucide-react";

import shoporaImage from "@/app/assets/shopora-hero.png";
import skillSphereImage from "@/app/assets/skill-sphere-project.png";
import docAppointImage from "@/app/assets/docAppointMent-project.png";
import digiToolsImage from "@/app/assets/digiTools-project.png";
import SectionHeading from "../ui/SectionHeading";

const projects = [
  {
    number: "01",
    name: "Shopora",
    category: "AI-powered e-commerce platform",
    description:
      "A modern multi-vendor shopping platform featuring product discovery, inventory management, checkout workflows, and AI-powered shopping assistance.",
    image: shoporaImage,
    imageAlt: "Shopora e-commerce platform interface",
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "AI Integration",
    ],
    liveUrl: "https://shopora-ashen.vercel.app/",
    repositoryUrl: "https://github.com/foysal41/Shopora-client/",
    imageSide: "left",
  },
  {
    number: "02",
    name: "SkillSphere",
    category: "Online learning platform",
    description:
      "An interactive learning platform with authentication, course browsing, protected lessons, profile management, and dynamic course discovery.",
    image: skillSphereImage,
    imageAlt: "SkillSphere online learning platform",
    technologies: [
      "Next.js",
      "React",
      "MongoDB",
      "Better Auth",
      "Tailwind CSS",
    ],
    liveUrl: "https://b13-a8-skill-sphere-theta.vercel.app/",
    repositoryUrl:
      "https://github.com/foysal41/B13-A8-Skill-Sphere",
    imageSide: "right",
  },
  {
    number: "03",
    name: "Doc Appoint",
    category: "Healthcare appointment platform",
    description:
      "A full-stack healthcare application for discovering doctors, viewing specialties, booking appointments, and managing personalized bookings.",
    image: docAppointImage,
    imageAlt: "Doc Appoint doctor appointment booking platform",
    technologies: [
      "Next.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "REST APIs",
    ],
    liveUrl: "https://docappoint-murex.vercel.app/",
    repositoryUrl: "https://github.com/foysal41/docappoint",
    imageSide: "left",
  },
  {
    number: "04",
    name: "DigiTools",
    category: "Digital productivity marketplace",
    description:
      "A responsive digital tools marketplace where users can explore productivity tools and interact with a streamlined shopping experience.",
    image: digiToolsImage,
    imageAlt: "DigiTools digital productivity marketplace",
    technologies: [
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "DaisyUI",
      "Vite",
    ],
    liveUrl:
      "https://b13-a6-digi-tools-platform-ten.vercel.app/",
    repositoryUrl:
      "https://github.com/foysal41/B13-A6-DigiTools-Platform",
    imageSide: "right",
  },
];

function ProjectItem({ project, index }) {
  const itemRef = useRef(null);
  const imageOnRight = project.imageSide === "right";

  useEffect(() => {
    const element = itemRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("project-visible");
          observer.unobserve(element);
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <article
      ref={itemRef}
      className="project-reveal grid grid-cols-1 items-center gap-4 py-4 md:grid-cols-12 md:gap-6 md:py-6 lg:gap-8"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Project image */}
      <div
        className={`md:col-span-7 ${
          imageOnRight ? "md:order-2" : "md:order-1"
        }`}
      >
        <Link
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${project.name}`}
          className="group relative block overflow-hidden rounded-xl border border-neutral-200 bg-neutral-100"
        >
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 58vw"
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.035]"
            />

            <div className="absolute inset-0 bg-neutral-900/0 transition-colors duration-300 group-hover:bg-neutral-900/5" />

            <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/70 bg-white/90 text-neutral-900 opacity-0 shadow-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 translate-y-2">
              <ArrowUpRight size={19} />
            </span>
          </div>

          <div className="flex items-center justify-between border-t border-neutral-200 bg-white px-4 py-3">
            <span className=" text-md tracking-wide text-neutral-500">
              {project.name.toLowerCase().replaceAll(" ", "")}.com
            </span>
            <ArrowUpRight
              size={15}
              className="text-neutral-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </div>
        </Link>
      </div>

      {/* Project details */}
      <div
        className={`md:col-span-5 ${
          imageOnRight ? "md:order-1" : "md:order-2"
        }`}
      >
        <div className="flex items-center gap-4">
          <span className=" text-md text-purple-500">
            /{project.number}
          </span>

         

          <span className="text-md text-neutral-500">
            {project.category}
          </span>
        </div>

        <h3 className="mt-5 text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
          {project.name}
        </h3>

        <p className="mt-4 max-w-lg text-sm leading-7 text-neutral-600 sm:text-base">
          {project.description}
        </p>

        {/* Technology list */}
        <div className="mt-5 flex flex-wrap gap-x-3 gap-y-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="border-b border-neutral-200 pb-1  text-sm text-neutral-700"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
          <Link
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-purple-500 transition-colors hover:text-amber-900"
          >
            Live preview
            <ArrowUpRight size={16} />
          </Link>

          <Link
            href={project.repositoryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-neutral-500 transition-colors hover:text-neutral-900"
          >
            <GitBranch size={15} />
            Repository
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-12"
    >
      <style jsx global>{`
        .project-reveal {
          opacity: 0;
          transform: translateY(28px);
          transition:
            opacity 700ms ease,
            transform 700ms cubic-bezier(0.2, 0.65, 0.3, 1);
        }

        .project-reveal.project-visible {
          opacity: 1;
          transform: translateY(0);
        }

        @media (prefers-reduced-motion: reduce) {
          .project-reveal,
          .project-reveal.project-visible {
            opacity: 1;
            transform: none;
            transition: none;
          }
        }
      `}</style>

      <div className="mx-auto max-w-7xl">
        <SectionHeading title={"Selected work"}></SectionHeading>

        <div className="">
          <h2 className=" text-2xl md:text-4xl">Professional Experience </h2>
        </div>

        {/* Alternating project showcase */}
        <div className=" ">
          {projects.map((project, index) => (
            <ProjectItem
              key={project.number}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* More projects */}
        <div className=" flex justify-center">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-3 rounded-full border border-neutral-300 px-5 py-3 text-sm font-medium text-neutral-800 transition-all duration-300 hover:border-neutral-900 hover:bg-neutral-900 hover:text-white"
          >
            Explore all projects
            <ArrowDownRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
