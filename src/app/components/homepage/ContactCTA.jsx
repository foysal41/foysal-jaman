
import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  Github as GithubIcon,
  Linkedin as LinkedinIcon,
  GitBranch,
  BriefcaseBusiness,
} from "lucide-react";

export default function ContactCTA() {
  return (
    <section
      id="contact"
      className="w-full border-t border-neutral-200 bg-neutral-50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-4xl text-center">
        {/* Section label */}
        <div className="mb-5 flex items-center justify-center gap-3">
          <span className="h-px w-7 bg-purple-400" />
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-purple-600">
            Get in touch
          </span>
          <span className="h-px w-7 bg-purple-400" />
        </div>

        {/* Heading */}
        <h2 className="text-3xl font-semibold leading-tight tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
          Let’s build something{" "}
          <span className="text-purple-600">meaningful.</span>
        </h2>

        {/* Description */}
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-neutral-600 sm:text-base">
          Have a project in mind or an opportunity to discuss? I build modern,
          user-focused web applications and would love to hear what you’re
          working on.
        </p>

        {/* Primary actions */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="mailto:mdfoysal.mf33@gmail.com"
            className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-700"
          >
            <Mail size={16} />
            Get in touch
            <ArrowUpRight size={15} />
          </a>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 px-5 py-3 text-sm font-medium text-neutral-800 transition-colors hover:border-purple-300 hover:bg-purple-50"
          >
            Explore my work
            <ArrowUpRight size={15} />
          </Link>
        </div>

        {/* Social links */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://github.com/foysal41"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-2.5 text-sm text-neutral-600 transition-colors hover:border-neutral-300 hover:text-neutral-900"
          >
            <GitBranch  size={16} />
            GitHub
            <ArrowUpRight size={13} />
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-2.5 text-sm text-neutral-600 transition-colors hover:border-neutral-300 hover:text-neutral-900"
          >
            <BriefcaseBusiness size={16} />
            LinkedIn
            <ArrowUpRight size={13} />
          </a>
        </div>
      </div>
    </section>
  );
}
