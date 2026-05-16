"use client";

import { Moon, Sun } from "lucide-react";

import { useTheme } from "next-themes";

export default function Navbar() {

  const { theme, setTheme } =
    useTheme();

  return (

    <div
      className="
        sticky
        top-0
        z-50

        border-b

        border-slate-200
        dark:border-slate-800

        bg-white/70
        dark:bg-slate-950/70

        backdrop-blur-2xl

        transition-all
        duration-300
      "
    >

      <div
        className="
          max-w-7xl
          mx-auto

          px-6
          py-4

          flex
          items-center
          justify-between
        "
      >

        {/* LEFT SIDE */}

        <div className="flex flex-col">

          <h1
            className="
              text-2xl
              font-black
              tracking-tight

              text-slate-900
              dark:text-white
            "
          >
            Keyword Intelligence
          </h1>

          <p
            className="
              text-sm

              text-slate-500
              dark:text-slate-400
            "
          >
            AI-Powered SEO Dashboard
          </p>

        </div>

        {/* RIGHT SIDE */}

        <div className="flex items-center gap-4">

          <div
            className="
              hidden
              md:flex

              items-center

              rounded-full

              border

              border-slate-200
              dark:border-slate-700

              bg-white/70
              dark:bg-slate-900/50

              px-4
              py-2

              text-sm

              text-slate-600
              dark:text-slate-300

              backdrop-blur-xl
            "
          >

            🚀 SEO Intelligence Platform

          </div>

          <button
            onClick={() =>
              setTheme(
                theme === "dark"
                  ? "light"
                  : "dark"
              )
            }

            className="
              p-3

              rounded-2xl

              border

              border-slate-200
              dark:border-slate-700

              bg-white/80
              dark:bg-slate-900/60

              text-slate-700
              dark:text-slate-200

              backdrop-blur-xl

              hover:scale-105
              hover:shadow-lg

              transition-all
              duration-300
            "
          >

            {theme === "dark" ? (

              <Sun className="w-5 h-5" />

            ) : (

              <Moon className="w-5 h-5" />

            )}

          </button>

        </div>

      </div>

    </div>
  );
}