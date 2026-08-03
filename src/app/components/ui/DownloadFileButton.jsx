"use client";

import React, { useState } from "react";
import { MdOutlineDownload, MdCheck } from "react-icons/md";

const DownloadFileButton = ({title, url}) => {
  const [state, setState] = useState("idle");

  const handleDownload = () => {
    if (state !== "idle") return;

    setState("processing");

    setTimeout(() => {
      setState("success");

      window.open(
        url,
        "_blank"
      );

      setTimeout(() => {
        setState("idle");
      }, 5000);
    }, 1200);
  };

  return (
    <button onClick={handleDownload} disabled={state === "processing"}
      className={`border rounded-full cursor-pointer px-4 py-3 flex items-center justify-center gap-2 text-sm min-w-30 transition-all duration-300 ${ state === "success" ? "bg-green-50 text-green-700 border-green-200" : "hover:bg-gray-50"
      }`}
    >
      {state === "idle" && (
        <>
        <p className="text-md">{title}</p>
          
          <MdOutlineDownload />
        </>
      )}

      {state === "processing" && (
        <>
          Processing...
          <MdOutlineDownload className="animate-bounce" />
        </>
      )}

      {state === "success" && (
        <>
          Complete!
          <MdCheck />
        </>
      )}
    </button>
  );
};

export default DownloadFileButton;