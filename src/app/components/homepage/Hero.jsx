"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { MdBusiness, MdEmail } from "react-icons/md";
import { FiSend } from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi2";
import DownloadFileButton from "../ui/DownloadFileButton";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function Hero() {
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [started, setStarted] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const handleStart = (e) => {
    e.preventDefault();

    if (!company || !email) return;

    setStarted(true);
  };

  const handleAsk = async () => {
    if (!prompt.trim()) return;

    try {
      setLoading(true);
      setAnswer("");

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: prompt,
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

  return (
    <section className="w-full px-4 py-16 md:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto grid max-w-325 items-center gap-12 lg:grid-cols-2">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-left"
        >
          <p className="mb-4 text-lg">Hi! I&apos;m Foysal Jaman</p>

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
          className="w-full"
        >
          <div className="rounded-[28px] border border-purple-100 bg-white p-5 shadow-[0_20px_70px_rgba(124,58,237,0.12)] md:p-7">
            {/* HEADER */}
            <div className="mb-6 flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-purple-100 text-2xl">
                🤖
              </div>

              <div>
                <h2 className="text-xl font-bold md:text-2xl">
                  Ask Foysal <span className="text-purple-600">AI</span>
                </h2>

                <p className="mt-1 text-sm leading-6 text-gray-500">
                  Ask anything about my skills, projects, experience and
                  background.
                </p>
              </div>
            </div>

            {!started ? (
              <form onSubmit={handleStart}>
                <div className="rounded-2xl border border-gray-100 bg-gray-50 p-5">
                  <h3 className="font-semibold">
                    Let&apos;s get to know you first
                  </h3>

                  <p className="mt-1 text-xs text-gray-500">
                    Please share your company and work email before asking
                    questions.
                  </p>

                  {/* COMPANY */}
                  <div className="mt-5">
                    <label className="mb-2 block text-xs font-medium text-gray-600">
                      Company / Organization
                    </label>

                    <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3">
                      <MdBusiness className="text-xl text-gray-400" />

                      <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="e.g. Google, Microsoft..."
                        className="w-full bg-transparent text-sm outline-none"
                        required
                      />
                    </div>
                  </div>

                  {/* EMAIL */}
                  <div className="mt-4">
                    <label className="mb-2 block text-xs font-medium text-gray-600">
                      Work Email
                    </label>

                    <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3">
                      <MdEmail className="text-xl text-gray-400" />

                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@company.com"
                        className="w-full bg-transparent text-sm outline-none"
                        required
                      />
                    </div>
                  </div>

                  {/* CONTINUE */}
                  <button
                    type="submit"
                    className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-purple-600 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-purple-700"
                  >
                    Continue to Ask
                    <FaLongArrowAltRight />
                  </button>
                </div>

                {/* SUGGESTED QUESTIONS */}
                <div className="mt-5">
                  <div className="mb-3 flex items-center gap-2">
                    <HiOutlineSparkles className="text-purple-500" />

                    <p className="text-sm font-semibold">Try asking</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {[
                      "What are Foysal's core skills?",
                      "Show his full stack projects",
                      "Does he have backend experience?",
                      "Tell me about his experience",
                    ].map((question) => (
                      <button
                        type="button"
                        key={question}
                        className="rounded-full border border-gray-200 px-3 py-2 text-xs text-gray-600 transition hover:border-purple-300 hover:bg-purple-50 hover:text-purple-600"
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </div>
              </form>
            ) : (
              /* CHAT AREA */

              <div>
                <div className="mb-4 rounded-2xl bg-gray-50 p-4">
                  <p className="text-xs text-gray-400">Asking as</p>

                  <p className="mt-1 text-sm font-semibold">{company}</p>

                  <p className="text-xs text-gray-500">{email}</p>
                </div>

                <div className="mb-4 min-h-45 rounded-2xl border border-gray-100 bg-gray-50 p-4">
                  <div className="flex gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-purple-100">
                      🤖
                    </div>

                    <div className="rounded-2xl rounded-tl-none bg-white px-4 py-3 shadow-sm">
                      {loading ? (
                        <p className="text-base leading-7 text-gray-500">
                          Foysal AI is thinking...
                        </p>
                      ) : answer ? (
                        <ReactMarkdown
                          remarkPlugins={[remarkGfm]}
                          components={{
                            a: ({ href, children }) => (
                              <a
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-purple-600 underline hover:text-purple-800"
                              >
                                {children}
                              </a>
                            ),

                            p: ({ children }) => (
                              <p className="mb-4 text-base leading-7 text-gray-700">
                                {children}
                              </p>
                            ),

                            ul: ({ children }) => (
                              <ul className="mb-4 list-disc space-y-2 pl-5 text-base leading-7 text-gray-700">
                                {children}
                              </ul>
                            ),

                            ol: ({ children }) => (
                              <ol className="mb-4 list-decimal space-y-2 pl-5 text-base leading-7 text-gray-700">
                                {children}
                              </ol>
                            ),

                            strong: ({ children }) => (
                              <strong className="font-semibold text-gray-900">
                                {children}
                              </strong>
                            ),

                            table: ({ children }) => (
                              <div className="mb-4 overflow-x-auto">
                                <table className="w-full border-collapse text-sm">
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
                      ) : (
                        <p className="text-base leading-7 text-gray-700">
                          Hi! 👋 Ask me anything about Foysal&apos;s experience,
                          skills, projects or education.
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* PROMPT */}
                <div className="flex items-center gap-2 rounded-2xl border-2 border-purple-200 bg-white p-2">
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
                    className="w-full bg-transparent px-3 py-2 text-sm outline-none"
                  />

                  <button
                    onClick={handleAsk}
                    type="button"
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-600 text-white"
                  >
                    <FiSend className="text-lg" />
                  </button>
                </div>

                <p className="mt-3 text-center text-[11px] text-gray-400">
                  AI answers are based on Foysal&apos;s portfolio and resume.
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
