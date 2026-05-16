"use client";

import { useState } from "react";

import { Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Props {
  onSearch: (keyword: string) => void;
  loading: boolean;
}

export default function SearchBar({
  onSearch,
  loading,
}: Props) {

  const [keyword, setKeyword] = useState("");

  return (

    <div
      className="
        flex
        flex-col
        md:flex-row

        items-center

        gap-4
        w-full
      "
    >

      <Input
        placeholder="Enter seed keyword..."
        value={keyword}
        onChange={(e) =>
          setKeyword(e.target.value)
        }

        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onSearch(keyword);
          }
        }}

        className="
          h-14
          w-full

          rounded-2xl

          border
          border-slate-300
          dark:border-slate-700

          bg-white
          dark:bg-slate-900/60

          text-slate-900
          dark:text-white

          placeholder:text-slate-400
          dark:placeholder:text-slate-500

          backdrop-blur-xl

          px-5

          shadow-sm
          focus-visible:ring-2
          focus-visible:ring-blue-500

          transition-all
          duration-300
        "
      />

      <Button
        className="
          h-14

          w-full
          md:w-auto

          px-10

          rounded-2xl

          bg-slate-900
          hover:bg-slate-800

          text-white

          dark:bg-white
          dark:text-black
          dark:hover:bg-slate-200

          shadow-lg
          hover:shadow-xl

          transition-all
          duration-300

          hover:scale-[1.02]
        "

        onClick={() =>
          onSearch(keyword)
        }

        disabled={loading}
      >

        <Search className="w-4 h-4 mr-2" />

        {loading
          ? "Searching..."
          : "Search"}

      </Button>

    </div>
  );
}