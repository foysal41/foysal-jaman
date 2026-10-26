"use client";

import React, { useState } from "react";
import { FiSend } from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi2";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Image from "next/image";
import foysalImage from "@/app/assets/foysal-upgrade.png";

export default function AskFoysalAI() {
  const [prompt, setPrompt] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAsk = async (question = prompt) => {
    if (!question.trim() || loading) return;

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
      console.error("Ask Foysal AI error:", error);
      setAnswer("Sorry, something went wrong. Please try again.");
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
    <div className="w-full min-w-0 overflow-hidden rounded-[28px] border border-purple-100 bg-white p-4 shadow-[0_20px_70px_rgba(124,58,237,0.12)] sm:p-6">
      {/* HEADER */}
      <div className="mb-6 flex min-w-0 items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-purple-100">
          <Image
            src={foysalImage}
            alt="Foysal Jaman"
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
        </div>

        <div className="min-w-0">
          <h2 className="text-xl font-bold md:text-2xl">
            Ask Foysal <span className="text-purple-600">AI</span>
          </h2>

          <p className="mt-1 text-sm leading-6 text-gray-500">
            Ask anything about my skills, projects, experience and background.
          </p>
        </div>
      </div>

      {/* CHAT AREA */}
      <div className="min-w-0">
        {/* AI RESPONSE */}
        <div className="mb-4 min-w-0 rounded-2xl border border-gray-100 bg-gray-50 p-3 sm:p-4">
          <div className="flex min-w-0 flex-col gap-3 md:flex-row">
            {/* AI AVATAR */}
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-purple-100">
              <Image
                src={foysalImage}
                alt="Foysal AI"
                width={32}
                height={32}
                className="rounded-full object-cover"
              />
            </div>

            {/* ANSWER */}
            <div className="min-w-0 max-h-80 max-w-full flex-1 overflow-y-auto rounded-2xl rounded-tl-none bg-white px-4 py-3 shadow-sm">
              {loading ? (
                <p className="text-base leading-7 text-gray-500">
                  Foysal AI is thinking...
                </p>
              ) : answer ? (
                <div className="min-w-0 break-words">
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
                        <p className="mb-4 break-words text-base leading-7 text-gray-700 last:mb-0">
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
                          <table className="min-w-[500px] border-collapse text-sm">
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
        <div className="mb-4 min-w-0 px-1 sm:px-3">
          <div className="mb-3 flex items-center gap-2">
            <HiOutlineSparkles className="shrink-0 text-purple-500" />
            <p className="text-sm font-semibold">Try asking</p>
          </div>

          <div className="flex min-w-0 flex-wrap gap-2">
            {suggestedQuestions.map((question) => (
              <button
                type="button"
                key={question}
                disabled={loading}
                onClick={() => {
                  setPrompt(question);
                  handleAsk(question);
                }}
                className="max-w-full rounded-full border border-gray-200 px-3 py-2 text-left text-xs text-gray-600 transition hover:border-purple-300 hover:bg-purple-50 hover:text-purple-600 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {question}
              </button>
            ))}
          </div>
        </div>

        {/* PROMPT INPUT */}
        <form
          onSubmit={(event) => {
            event.preventDefault();
            handleAsk();
          }}
          className="flex min-w-0 items-center gap-2 rounded-2xl border-2 border-purple-200 bg-white p-2 focus-within:border-purple-400"
        >
          <input
            type="text"
            value={prompt}
            onChange={(event) => setPrompt(event.target.value)}
            placeholder="Ask anything about Foysal..."
            aria-label="Ask Foysal AI a question"
            className="min-w-0 flex-1 bg-transparent px-3 py-2 text-sm outline-none"
          />

          <button
            type="submit"
            disabled={loading || !prompt.trim()}
            aria-label="Send question"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-600 text-white transition hover:bg-purple-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <FiSend className="text-lg" />
          </button>
        </form>

        <p className="mt-3 text-center text-[11px] text-gray-400">
          AI answers are based on Foysal&apos;s portfolio and resume.
        </p>
      </div>
    </div>
  );
}