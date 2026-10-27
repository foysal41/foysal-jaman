
"use client";

import {
  Atom,
  Braces,
  CalendarDays,
  Code2,
  Database,
  ExternalLink,
  FileCode,
  FileText,
  Globe,
  Layers,
  MapPin,
  Palette,
  Server,
  ShieldCheck,
  Wind,
} from "lucide-react";

const courses = [
  {
    title: "Complete Web Development Course",
    provider: "Programming Hero",
    period: "January – August 2026",
    badge: "Batch 13",
    description:
      "Completed comprehensive training in HTML, CSS, JavaScript, React, Next.js, Node.js, Express.js, MongoDB, and AI-powered development.",
    certificateId: "1vqiqYhplaIs-_Gq0h0Ut9_TIW6URnAFs",
  },
  {
    title: "React Essential Training",
    provider: "LinkedIn Learning",
    period: "September 29, 2026",
    description:
      "Completed training in core React concepts, component-based development, and modern frontend practices.",
    certificateId: "1JDsAmCIkC7LGe3u3EV_T7g7jHMpQRWNN",
  },
];

const skillGroups = [
  {
    title: "CORE STACK",
    skills: [
      { name: "React.js", icon: Atom },
      { name: "Next.js", icon: Layers },
      { name: "TypeScript", icon: FileCode },
      { name: "JavaScript", icon: Braces },
      { name: "Node.js", icon: Server },
      { name: "Express.js", icon: Code2 },
      { name: "Tailwind CSS", icon: Wind },
      { name: "HTML5", icon: Globe },
      { name: "CSS3", icon: Palette },
      { name: "PostgreSQL", icon: Database },
      { name: "Prisma ORM", icon: Database },
      { name: "MongoDB", icon: Database },
      { name: "REST APIs", icon: Server },
      { name: "JWT", icon: ShieldCheck },
      { name: "Git & GitHub", icon: Code2 },
      { name: "Better Auth", icon: ShieldCheck },
      { name: "Vercel", icon: Globe },
      { name: "Netlify", icon: Globe },
      { name: "ImgBB API", icon: Code2 },
      { name: "n8n", icon: Layers },
    ],
  },
  {
    title: "CMS & TOOLS",
    skills: [
      { name: "WordPress", icon: Globe },
      { name: "Elementor", icon: Layers },
      { name: "Figma", icon: Palette },
      { name: "Supabase", icon: Database },
    ],
  },
];

function SectionHeading({ title }) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex shrink-0 items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-neutral-900 shadow-[0_0_8px_rgba(0,0,0,0.3)]" />
        <h2 className="text-lg font-bold tracking-tight text-neutral-900">
          {title}
        </h2>
      </div>

      <div
        aria-hidden="true"
        className="h-px min-w-0 flex-1 border-t border-dashed border-neutral-300"
        style={{
          maskImage:
            "linear-gradient(to right, black 0%, black 15%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, black 0%, black 15%, transparent 100%)",
        }}
      />
    </div>
  );
}

function CourseItem({ course, index }) {
  const viewUrl = `https://drive.google.com/file/d/${course.certificateId}/view`;

  return (
    <article
      className={`py-5 ${
        index !== courses.length - 1
          ? "border-b border-neutral-200"
          : ""
      }`}
    >
      <div className="flex items-start gap-3">
        <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-neutral-200 bg-neutral-50">
          <FileText size={17} className="text-neutral-600" />
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="text-sm font-semibold leading-5 text-neutral-900">
            {course.title}
          </h3>

          <p className="mt-1 text-sm text-neutral-600">
            {course.provider}
            {course.badge && (
              <span className="ml-2 rounded-full bg-neutral-100 px-2 py-0.5 text-xs text-neutral-600">
                {course.badge}
              </span>
            )}
          </p>

          <p className="mt-2 flex items-center gap-1.5 font-mono text-xs text-neutral-500">
            <CalendarDays size={13} />
            {course.period}
          </p>

          <p className="mt-2 text-md lg:text-md leading-relaxed text-neutral-600">
            {course.description}
          </p>

          <a
            href={viewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-neutral-800 underline decoration-neutral-300 underline-offset-4 transition-colors hover:text-neutral-500"
          >
            View certificate
            <ExternalLink size={13} />
          </a>
        </div>
      </div>
    </article>
  );
}

function SkillBadge({ name, icon: Icon }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-800 shadow-sm transition-colors hover:border-neutral-300">
      <Icon size={14} strokeWidth={1.8} />
      {name}
    </span>
  );
}

export default function ExperienceSkills() {
  return (
    <section className="w-full bg-[#f7f7f9] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-stretch gap-5 lg:grid-cols-2">
        {/* Left: Courses & certificates */}
        <div className="rounded-3xl border border-neutral-200 bg-white p-5 sm:p-7">
          <SectionHeading title="Courses & Certifications" />

          <div className="mt-2">
            {courses.map((course, index) => (
              <CourseItem
                key={course.certificateId}
                course={course}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Right: Existing skills */}
        <div className="rounded-3xl border border-emerald-800/30 bg-white p-5 sm:p-7">
          <SectionHeading title="Skills" />

          <div className="mt-6 space-y-6">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <h3 className="mb-3 text-xs font-bold tracking-wide text-neutral-800">
                  {group.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <SkillBadge key={skill.name} {...skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Add more skill groups here if needed */}
        </div>
      </div>
    </section>
  );
}
