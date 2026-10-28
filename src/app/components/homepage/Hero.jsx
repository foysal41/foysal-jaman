
import Link from "next/link";
import DownloadFileButton from "../ui/DownloadFileButton";
import AskFoysalAI from "../AskFoysalAI";
import {Check, ChevronLeft, ChevronRight } from "lucide-react";
import HeroCodeCanvas from "../HeroCodeCanvas";


export default function Hero() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-white px-4 py-30 md:px-8 lg:px-10 lg:py-50">
      <HeroCodeCanvas></HeroCodeCanvas>
      {/* Hero content */}
      <div className="relative z-10 mx-auto grid w-full max-w-325 items-center gap-12 lg:grid-cols-2">
        {/* LEFT SIDE */}
        <div className="bg-white/70 ">
          <p className="mb-4 text-lg">Hi! It&apos;s Me Foysal Jaman</p>

          <h1 className="text-3xl font-bold leading-tight md:text-5xl flex">
            <div className="flex items-center bg-purple-500 text-white">
              <ChevronLeft size={30} ></ChevronLeft><span >Full Stack</span><ChevronRight size={30}></ChevronRight>             
            </div> 
             &nbsp;Web Developer
          </h1>
          

          <p className="mt-6 max-w-162 text-md leading-7 text-[#717171] md:text-lg lg:mx-0">
            I create websites and applications that solve real-world problems. Using React, Next.js, TypeScript, and Node.js, I build modern, user-friendly software with clean interfaces, reliable backend systems, and smooth performance.
          </p>

          <div className="mt-5">
            <ul className="space-y-1 text-[#717171]">
              <li className="flex items-center gap-2 text-md md:text-lg">
                <Check
                  size={25}
                  className="shrink-0 rounded-full bg-purple-400/30 p-1 text-black"
                />
                Full-Stack Web Development with React, Next.js &amp; Node.js
              </li>

              <li className="flex items-center gap-2 text-md md:text-lg">
                <Check
                  size={25}
                  className="shrink-0 rounded-full bg-purple-400/30 p-1 text-black"
                />
                REST API Development, Database Integration &amp; Authentication
              </li>

              <li className="flex items-center gap-2 text-md md:text-lg">
                <Check
                  size={25}
                  className="shrink-0 rounded-full bg-purple-400/30 p-1 text-black"
                />
                Deployment, Debugging &amp; Real-World Project Experience
              </li>
            </ul>
          </div>

          <div className="mt-8 flex w-full flex-col items-stretch gap-4 sm:flex-row sm:items-center lg:justify-start">
            <Link
              href="/projects"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-black px-5 py-3 text-sm text-white sm:w-auto"
            >
              View My Work
            </Link>

            <DownloadFileButton
              title="Download Resume"
              url="https://drive.google.com/file/d/1So85OW5B_1o6QXOtyJGR1b_f__LH5piR/view?usp=sharing"
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <AskFoysalAI />
      </div>
    </section>
  );
}
