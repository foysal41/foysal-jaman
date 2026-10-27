
"use client";

import { GitHubCalendar } from "react-github-calendar";
import { ExternalLink, GitBranch } from "lucide-react";

export default function GitHubContributions() {
  return (
    <section className="w-full bg-[#f7f7f9] px-4 py-10 sm:px-6 lg:px-8">
      {/* Main container */}
      <div className="mx-auto w-full max-w-7xl rounded-3xl border border-neutral-200 bg-white p-5 sm:p-8">
        {/* Heading */}
        <div className="flex items-center gap-4">
          <div className="flex shrink-0 items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-neutral-900 shadow-[0_0_8px_rgba(0,0,0,0.3)]" />

            <h2 className="text-lg font-bold tracking-tight text-neutral-900">
              GitHub Contributions
            </h2>
          </div>

          <div
            aria-hidden="true"
            className="h-px min-w-0 flex-1 border-t border-dashed border-neutral-300"
            style={{
              maskImage: "linear-gradient(to right, black, transparent)",
              WebkitMaskImage:
                "linear-gradient(to right, black, transparent)",
            }}
          />

          <a
            href="https://github.com/foysal41"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden shrink-0 items-center gap-1.5 text-sm text-neutral-500 transition-colors hover:text-neutral-900 sm:flex"
          >
            @foysal41
            <ExternalLink size={13} />
          </a>
        </div>

        {/* Centered GitHub contribution calendar */}
        <div className="mt-6 w-full min-w-0">
          <div className="flex w-full justify-center overflow-x-auto pb-2">
            <div className="mx-auto w-fit">
              <GitHubCalendar
                username="foysal41"
                colorScheme="light"
                blockSize={14}
                blockMargin={3}
                fontSize={12}
                showTotalCount
                showColorLegend
              />
            </div>
          </div>
        </div>

        {/* Mobile profile link */}
        <a
          href="https://github.com/foysal41"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-2 text-sm text-neutral-600 transition-colors hover:text-neutral-900 sm:hidden"
        >
          <GitBranch size={16} />
          View GitHub profile
          <ExternalLink size={13} />
        </a>
      </div>
    </section>
  );
}
