"use client";

import { useEffect, useRef, useState } from "react";

type HistoryItem = {
  type: "command" | "output";
  text: string;
};

const COMMANDS: Record<string, string[]> = {
  help: [
    "Available Commands",
    "",
    "about",
    "skills",
    "projects",
    "achievements",
    "github",
    "cv",
    "contact",
  ],

  about: [
    "Nidal Saleh",
    "",
    "AI Developer",
    "Machine Learning Engineer",
    "Computer Vision Engineer",
    "RAG Systems Developer",
  ],

  skills: [
    "Python",
    "PyTorch",
    "TensorFlow",
    "OpenCV",
    "FastAPI",
    "LangChain",
    "Qdrant",
    "Git & GitHub",
  ],

  projects: [
    "DentalVision AI",
    "SMART STORE RAG",
    "Driver Alert System",
    "Missense Mutation Classification",
    "AI First Aid Assistant",
  ],

  achievements: [
    "Reached the Finalist Stage as a member of Team InnovaX by developing an AI-powered healthcare solution focused on clinical decision support.",
    "\n",
    "Presented an AI project at the UNRWA First SparkTech 2025 Exhibition, demonstrating technical innovation, teamwork, and problem-solving skills to visitors and judges."
  ],
  contact: [
    "Email:",
    "nidalsaleh081123@gmail.com",
    "",
    "GitHub:",
    "https://github.com/nidalsaleh081123",
  ],
};

export default function Terminal() {
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      type: "output",
      text: "Welcome to Nidal Saleh Portfolio ",
    },
    {
      type: "output",
      text: "Type 'help' to get started.",
    },
    {
      type: "output",
      text: "",
    },
  ]);

  const [input, setInput] = useState("");

  const [typing, setTyping] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    terminalRef.current?.scrollTo({
      top: terminalRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [history]);

  const addOutputLine = (text: string) => {
    setHistory((prev) => [
      ...prev,
      {
        type: "output",
        text,
      },
    ]);
  };

  const typeLines = async (lines: string[]) => {
    setTyping(true);

    for (const line of lines) {
      let current = "";

      addOutputLine("");

      for (let i = 0; i < line.length; i++) {
        current += line[i];

        await new Promise((r) => setTimeout(r, 18));

        setHistory((prev) => {
          const copy = [...prev];

          copy[copy.length - 1] = {
            type: "output",
            text: current,
          };

          return copy;
        });
      }

      await new Promise((r) => setTimeout(r, 120));
    }

    addOutputLine("");

    setTyping(false);
  };
  const executeCommand = async (command: string) => {
    const cmd = command.trim().toLowerCase();

    if (!cmd) return;

    setHistory((prev) => [
      ...prev,
      {
        type: "command",
        text: `visitor@nidal:~$ ${cmd}`,
      },
    ]);

    setInput("");

    if (cmd === "clear") {
      setHistory([]);
      return;
    }


    if (cmd === "github") {

      await typeLines([
        "Opening GitHub profile...",
      ]);

      window.open(
        "https://github.com/nidalsaleh081123",
        "_blank"
      );

      return;
    }


    if (cmd === "cv") {

      await typeLines([
        "Preparing CV download...",
      ]);

      window.open(
        "public/cv/Nidal_Saleh_CV.pdf",
        "_blank"
      );

      return;
    }


    if (COMMANDS[cmd]) {

      await typeLines(
        COMMANDS[cmd]
      );

      return;
    }


    await typeLines([
      `Command not found: ${cmd}`,
      "Type 'help' to see available commands.",
    ]);
  };



  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {

    if (e.key === "Enter" && !typing) {

      executeCommand(input);

    }

  };



  const focusTerminal = () => {

    inputRef.current?.focus();

  };
  return (
    <div
      onClick={focusTerminal}
      className="
        w-full
        max-w-2xl
        rounded-2xl
        overflow-hidden
        border
        border-cyan-500/20
        bg-[#0d1117]
        shadow-2xl
        shadow-cyan-500/10
      "
    >

      {/* Terminal Header */}
      <div
        className="
          h-11
          flex
          items-center
          gap-2
          px-4
          bg-[#161b22]
          border-b
          border-white/5
        "
      >

        <div className="w-3 h-3 rounded-full bg-red-500" />

        <div className="w-3 h-3 rounded-full bg-yellow-500" />

        <div className="w-3 h-3 rounded-full bg-green-500" />


        <span
          className="
            ml-3
            text-xs
            text-gray-400
            font-mono
          "
        >
          nidal@portfolio:~ 
        </span>

      </div>



      {/* Terminal Body */}
      <div
        ref={terminalRef}
        className="
          h-[420px]
          overflow-y-auto
          p-6
          font-mono
          text-sm
          text-green-400
        "
      >

        {
          history.map((item, index) => (

            <div
              key={index}
              className={`
                whitespace-pre-wrap
                leading-7
                ${
                  item.type === "command"
                    ? "text-cyan-400"
                    : "text-green-400"
                }
              `}
            >
              {item.text}
            </div>

          ))
        }



        {/* Input Line */}
        <div
          className="
            flex
            items-center
            leading-7
          "
        >

          <span
            className="
              text-cyan-400
              mr-2
              whitespace-nowrap
            "
          >
            visitor@nidal:~$
          </span>


          <input
            ref={inputRef}

            value={input}

            disabled={typing}

            onChange={(e) =>
              setInput(e.target.value)
            }

            onKeyDown={handleKeyDown}

            className="
              flex-1
              bg-transparent
              outline-none
              text-green-300
              caret-green-400
              font-mono
            "
          />


          <span
            className="
              animate-pulse
              text-green-400
            "
          >
            █
          </span>

        </div>


      </div>

    </div>
  );
}
