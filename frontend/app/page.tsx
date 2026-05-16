"use client";

import { useState } from "react";

import api from "@/lib/api";

import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import KeywordTable from "@/components/KeywordTable";
import StatsCards from "@/components/StatsCards";
import LoadingSkeleton from "@/components/LoadingSkeleton";

import { Keyword } from "@/types/keyword";

import { motion } from "framer-motion";

export default function HomePage() {

  const [loading, setLoading] =
    useState(false);

  const [keywords, setKeywords] =
    useState<Keyword[]>([]);

  const searchKeywords = async (
    keyword: string
  ) => {

    try {

      setLoading(true);

      await api.post(
        "/keywords",
        {
          keyword,
        }
      );

      const keywordsResponse =
        await api.get("/keywords");

      setKeywords(
        keywordsResponse.data || []
      );

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);
    }
  };

  // AVERAGE CPC

  const averageCpc =
    keywords.filter(k => k.cpc).length > 0

      ? keywords
          .filter(k => k.cpc)
          .reduce(
            (acc, item) =>
              acc + (item.cpc || 0),
            0
          ) /
        keywords.filter(
          k => k.cpc
        ).length

      : 0;

  // AVERAGE COMPETITION

  const averageCompetition =
    keywords.filter(
      k => k.competition
    ).length > 0

      ? keywords
          .filter(
            k => k.competition
          )
          .reduce(
            (acc, item) =>
              acc +
              (item.competition || 0),
            0
          ) /
        keywords.filter(
          k => k.competition
        ).length

      : 0;

  return (

    <main
      className="
        min-h-screen

        transition-all
        duration-500

        bg-gradient-to-br

        from-slate-100
        via-white
        to-slate-200

        dark:from-[#020617]
        dark:via-[#081028]
        dark:to-[#020617]
      "
    >

      {/* NAVBAR */}

      <Navbar />

      {/* PAGE CONTENT */}

      <motion.div

        initial={{
          opacity: 0,
        }}

        animate={{
          opacity: 1,
        }}

        transition={{
          duration: 0.4,
        }}

        className="
          max-w-[1400px]
          mx-auto

          px-6

          pt-24
          pb-12

          space-y-10
        "
      >

        {/* HERO SECTION */}

        <motion.div

          initial={{
            opacity: 0,
            y: 20,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.5,
          }}

          className="space-y-6"
        >

          {/* BADGE */}

          <div
            className="
              inline-flex
              items-center

              rounded-full

              border

              border-slate-300
              dark:border-slate-700

              bg-white/70
              dark:bg-slate-900/40

              backdrop-blur-xl

              px-4
              py-2

              text-sm

              text-slate-700
              dark:text-slate-300

              shadow-sm
            "
          >

            🚀 AI Powered SEO Intelligence

          </div>

          {/* TITLE */}

          <h1
            className="
              max-w-5xl

              text-4xl
              md:text-6xl
              lg:text-7xl

              font-black

              tracking-tight
              leading-tight

              text-slate-900
              dark:text-white
            "
          >

            Discover{" "}

            <span
              className="
                bg-gradient-to-r

                from-blue-500
                via-violet-500
                to-purple-500

                bg-clip-text
                text-transparent
              "
            >

              High-Value

            </span>{" "}

            Keywords

          </h1>

          {/* SUBTITLE */}

          <p
            className="
              text-lg
              md:text-xl

              leading-relaxed

              max-w-3xl

              text-slate-600
              dark:text-slate-400
            "
          >

            SEO intelligence powered by
            autocomplete, scraping,
            clustering, and real-time
            keyword metrics.

          </p>

        </motion.div>

        {/* SEARCH */}

        <SearchBar
          onSearch={searchKeywords}
          loading={loading}
        />

        {/* STATS */}

        <StatsCards

          total={keywords.length}

          averageCpc={averageCpc}

          averageCompetition={
            averageCompetition
          }

        />

        {/* TABLE */}

        {loading ? (

          <LoadingSkeleton />

        ) : (

          <KeywordTable
            keywords={keywords}
          />

        )}

      </motion.div>

    </main>
  );
}