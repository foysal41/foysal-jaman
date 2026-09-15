"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi2";
import DownloadFileButton from "../ui/DownloadFileButton";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import foysalImage from "@/app/assets/foysal-upgrade.png"
import Image from "next/image";

export default function Hero() {
  const [prompt, setPrompt] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAsk = async (question = prompt) => {
    if (!question.trim()) return;

    try {
      setLoading(true);
      setAnswer("");

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: question,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setAnswer(data.answer);
    } catch (error) {
      console.log(error);
      setAnswer("Sorry, something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const suggestedQuestions = [
    "What are Foysal's core skills?",
    "Show his full stack projects",
    "Does he have backend experience?",
    "Tell me about his experience",
  ];

  return (
    <section className=" w-full px-4 py-30 md:px-8 lg:px-10 lg:py-50 ">
      <div className="mx-auto grid max-w-325 items-center gap-12 lg:grid-cols-2">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-left"
        >
          <p className="mb-4 text-lg">
            Hi! I&apos;m Foysal Jaman
          </p>

          <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Full Stack Web Developer
          </h1>

          <p className="mx-auto mt-6 max-w-162 text-sm leading-7 text-gray-600 md:text-base lg:mx-0">
            I build fast, modern web apps with React, Next.js & Node.js — with
            15+ projects deployed on Vercel, Netlify & GitHub.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <Link href="#projects">
              <button className="flex cursor-pointer items-center gap-2 rounded-full bg-black px-5 py-3 text-sm text-white transition hover:scale-105">
                View My Work
                <FaLongArrowAltRight />
              </button>
            </Link>

            <DownloadFileButton
              title="Download Resume"
              url="https://drive.google.com/file/d/1So85OW5B_1o6QXOtyJGR1b_f__LH5piR/view?usp=sharing"
            />
          </div>
        </motion.div>

        {/* RIGHT SIDE - ASK FOYSAL AI */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full min-w-0"
        >
          <div className="w-full min-w-0 overflow-hidden rounded-[28px] border border-purple-100 bg-white  shadow-[0_20px_70px_rgba(124,58,237,0.12)] md:p-7">

            {/* HEADER */}
            <div className="mb-6 flex min-w-0 items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-purple-100 text-2xl">
                
                <Image src={foysalImage} alt="foysal_jaman_image" height={40} width={40} className="rounded-full"></Image>
              </div>

              <div className="min-w-0">
                <h2 className="text-xl font-bold md:text-2xl">
                  Ask Foysal{" "}
                  <span className="text-purple-600">AI</span>
                </h2>

                <p className="mt-1 text-sm leading-6 text-gray-500">
                  Ask anything about my skills, projects, experience and
                  background.
                </p>
              </div>
            </div>

            {/* CHAT AREA */}
            <div className="min-w-0">

              {/* AI RESPONSE */}
              <div className="mb-4 min-w-0 rounded-2xl border border-gray-100 bg-gray-50 p-4">
                <div className="flex flex-col md:flex-row min-w-0 gap-3">

                  {/* AI ICON */}
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-purple-100">
                    <Image src={foysalImage} alt="foysal_jaman_image" height={40} width={40} className="rounded-full"></Image>
                  </div>

                  {/* ANSWER */}
                  <div className="min-w-0 max-w-full max-h-80 overflow-y-auto rounded-2xl rounded-tl-none bg-white px-4 py-3 shadow-sm">

                    {loading ? (
                      <p className="text-base leading-7 text-gray-500">
                        Foysal AI is thinking...
                      </p>
                    ) : answer ? (
                      <div className="min-w-0 wrap-break-word">
                        <ReactMarkdown
                          remarkPlugins={[remarkGfm]}
                          components={{
                            a: ({ href, children }) => (
                              <a
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="break-all text-purple-600 underline hover:text-purple-800"
                              >
                                {children}
                              </a>
                            ),

                            p: ({ children }) => (
                              <p className="mb-4 wrap-break-word text-base leading-7 text-gray-700 last:mb-0">
                                {children}
                              </p>
                            ),

                            ul: ({ children }) => (
                              <ul className="mb-4 list-disc space-y-2 overflow-hidden pl-5 text-base leading-7 text-gray-700">
                                {children}
                              </ul>
                            ),

                            ol: ({ children }) => (
                              <ol className="mb-4 list-decimal space-y-2 overflow-hidden pl-5 text-base leading-7 text-gray-700">
                                {children}
                              </ol>
                            ),

                            strong: ({ children }) => (
                              <strong className="font-semibold text-gray-900">
                                {children}
                              </strong>
                            ),

                            table: ({ children }) => (
                              <div className="mb-4 w-full max-w-full overflow-x-auto">
                                <table className="w-full min-w-125] border-collapse text-sm">
                                  {children}
                                </table>
                              </div>
                            ),

                            th: ({ children }) => (
                              <th className="border border-gray-200 bg-gray-50 px-3 py-2 text-left font-semibold">
                                {children}
                              </th>
                            ),

                            td: ({ children }) => (
                              <td className="border border-gray-200 px-3 py-2">
                                {children}
                              </td>
                            ),
                          }}
                        >
                          {answer}
                        </ReactMarkdown>
                      </div>
                    ) : (
                      <p className="text-base leading-7 text-gray-700">
                        Hi! 👋 Ask me anything about Foysal&apos;s experience,
                        skills, projects or education.
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* SUGGESTED QUESTIONS */}
              <div className="mb-4 min-w-0 px-3">
                <div className="mb-3 flex items-center gap-2">
                  <HiOutlineSparkles className="shrink-0 text-purple-500" />

                  <p className="text-sm font-semibold">
                    Try asking
                  </p>
                </div>

                <div className="flex min-w-0 flex-wrap gap-2">
                  {suggestedQuestions.map((question) => (
                    <button
                      type="button"
                      key={question}
                      onClick={() => {
                        setPrompt(question);
                        handleAsk(question);
                      }}
                      className="max-w-full rounded-full border border-gray-200 px-3 py-2 text-left text-xs text-gray-600 transition hover:border-purple-300 hover:bg-purple-50 hover:text-purple-600"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>

              {/* PROMPT */}
              <div className="flex min-w-0 items-center gap-2 rounded-2xl border-2 border-purple-200 bg-white p-2">

                <input
                  type="text"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleAsk();
                    }
                  }}
                  placeholder="Ask anything about Foysal..."
                  className="min-w-0 flex-1 bg-transparent px-3 py-2 text-sm outline-none"
                />

                <button
                  onClick={() => handleAsk()}
                  type="button"
                  disabled={loading}
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-600 text-white transition hover:bg-purple-700 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <FiSend className="text-lg" />
                </button>
              </div>

              <p className="mt-3 text-center text-[11px] text-gray-400">
                AI answers are based on Foysal&apos;s portfolio and resume.
              </p>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}