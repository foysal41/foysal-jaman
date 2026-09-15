import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Link2Icon } from "lucide-react";
import { FaGithubAlt } from "react-icons/fa6";

import ShopOraHero from "@/app/assets/shopora-hero.png";
import nextSkillHero from "@/app/assets/nextSkillHero.png";
import KeenKeeperHero from "@/app/assets/mini-crm-feature-image.jpg";
import skillSphereHero from "@/app/assets/skill-sphere-project.png";
import docAppointMentHero from "@/app/assets/docAppointMent-project.png";
import digiToolsHero from "@/app/assets/digiTools-project.png";



// ======================================================
// PROJECT DATA
// ======================================================

const projects = [
  {
    id: 1,
    title: "Shopora - AI-Powered E-commerce Platform",

    image: ShopOraHero,
    imageAlt: "Shopora AI-Powered E-commerce Platform",

    description:
      "The platform covers the complete e-commerce workflow, including product discovery, product management, shopping cart, wishlist, checkout, payment, order management, inventory management, coupons, order tracking, and administration.",

    liveLink: "https://shopora-ashen.vercel.app/",

    githubServer:
      "https://github.com/foysal41/Shopora-server/",

    githubClient:
      "https://github.com/foysal41/Shopora-client/",
  },

  {
    id: 2,
    title: "NextSkill - Learning Management System",

    image: nextSkillHero,
    imageAlt: "NextSkill LMS",

    description:
      "NextSkill is a modern Learning Management System (LMS) built with Next.js, TypeScript, Express.js, MongoDB, and Better Auth. The platform provides a modern learning experience with a scalable full-stack architecture.",

    liveLink: "https://nextskill-three.vercel.app/",

    githubServer:
      "https://github.com/foysal41/nextskill-server/",

    githubClient:
      "https://github.com/foysal41/nextskill/",
  },

  {
    id: 3,
    title: "KeenKeeper-Social App",

    image: KeenKeeperHero,
    imageAlt: "Keen Keeper Image",

    description:
      "A modern Mini Customer Relationship Management (CRM) System. The application role based authentication system and an intuitive dashboard.",

    liveLink: "https://mini-crm-two-pied.vercel.app/",

    githubClient:
      "https://github.com/foysal41/mini-crm",
  },

  {
    id: 4,
    title: "SkillSphere - Online Learning Platform",

    image: skillSphereHero,
    imageAlt: "SkillSphere Online Learning Platform",

    description:
      "A secure online learning platform featuring authentication, course browsing, protected lessons, profile management, and dynamic course search functionality.",

    liveLink:
      "https://b13-a8-skill-sphere-theta.vercel.app/",

    githubClient:
      "https://github.com/foysal41/B13-A8-Skill-Sphere",
  },

  {
    id: 5,
    title: "Doc Appoint - Doctor Appointment Booking Platform",

    image: docAppointMentHero,
    imageAlt: "Doc Appoint Doctor Appointment Booking Platform",

    description:
      "Full-stack healthcare platform enabling secure doctor discovery, appointment booking, authentication, dashboard management, and personalized booking tracking.",

    liveLink:
      "https://docappoint-murex.vercel.app/",

    githubServer:
      "https://github.com/foysal41/docappoint-server",

    githubClient:
      "https://github.com/foysal41/docappoint",
  },

  {
    id: 6,
    title: "DigiTools - Digital Tools Marketplace",

    image: digiToolsHero,
    imageAlt: "DigiTools Digital Tools Marketplace",

    description:
      "Responsive digital marketplace for discovering productivity tools, managing purchases, and enhancing workflow through interactive shopping experiences.",

    liveLink:
      "https://b13-a6-digi-tools-platform-ten.vercel.app/",

    githubClient:
      "https://github.com/foysal41/B13-A6-DigiTools-Platform",
  },

];

// ======================================================
// PROJECTS COMPONENT
// ======================================================

const Projects = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-32 sm:px-6 md:py-40 lg:px-8">
      {/* SECTION HEADER */}
      <div className="mb-10 space-y-3 text-center">
        <h1 className="text-4xl md:text-5xl">Projects I build_</h1>

        <p className="text-base text-gray-600 md:text-[18px]">
          I built projects with MERN Stack.
        </p>
      </div>

      {/* PROJECT LIST */}
      <div className="space-y-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="rounded-2xl border border-white/30 bg-white/20 p-4 shadow-lg backdrop-blur-md sm:p-6 md:p-8"
          >
            <div className="flex w-full flex-col items-center gap-8 md:flex-row md:items-center">
              {/* ==================================================
                  PROJECT IMAGE
              ================================================== */}

              <div className="w-full shrink-0 md:w-1/2">
                <Image
                  src={project.image}
                  height={1080}
                  width={1080}
                  alt={project.imageAlt}
                  className="mx-auto h-auto w-full max-w-150 rounded-md object-cover"
                />
              </div>

              {/* ==================================================
                  PROJECT CONTENT
              ================================================== */}

              <div className="w-full min-w-0 space-y-4 md:w-1/2">
                {/* PROJECT TITLE */}
                <h2 className="text-2xl font-semibold md:text-3xl">
                  {project.title}
                </h2>

                {/* PROJECT DESCRIPTION */}
                <p className="text-base leading-7 text-gray-700 md:text-[18px]">
                  {project.description}
                </p>

                {/* ==================================================
                    PROJECT LINKS
                ================================================== */}

                <div className="space-y-3 pt-2">
                  {/* LIVE LINK */}
                  <div className="flex min-w-0 items-start gap-2">
                    <Link2Icon className="mt-1 h-5 w-5 shrink-0" />

                    <span className="shrink-0 font-medium">Live Link:</span>

                    <Link
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-w-0 break-all text-purple-600 hover:underline"
                    >
                      {project.liveLink}
                    </Link>
                  </div>

                  {/* GITHUB SERVER */}
                  {project.githubServer && (
                    <div className="flex min-w-0 items-start gap-2">
                      <FaGithubAlt className="mt-1 h-5 w-5 shrink-0" />

                      <span className="shrink-0 font-medium">
                        Github Server:
                      </span>

                      <Link
                        href={project.githubServer}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="min-w-0 break-all text-purple-600 hover:underline"
                      >
                        {project.githubServer}
                      </Link>
                    </div>
                  )}

                  {/* GITHUB CLIENT */}
                  <div className="flex min-w-0 items-start gap-2">
                    <FaGithubAlt className="mt-1 h-5 w-5 shrink-0" />

                    <span className="shrink-0 font-medium">Github Client:</span>

                    <Link
                      href={project.githubClient}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-w-0 break-all text-purple-600 hover:underline"
                    >
                      {project.githubClient}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;