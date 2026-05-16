import {
  BarChart3,
  DollarSign,
  TrendingUp,
} from "lucide-react";

import { Card } from "@/components/ui/card";

interface Props {
  total: number;
  averageCpc: number;
  averageCompetition: number;
}

export default function StatsCards({
  total,
  averageCpc,
  averageCompetition,
}: Props) {

  return (

    <div
      className="
        grid
        grid-cols-1
        md:grid-cols-3

        gap-6
      "
    >

      {/* TOTAL KEYWORDS */}

      <Card
        className="
          group
          relative
          overflow-hidden

          p-6
          rounded-3xl

          border
          border-slate-200
          dark:border-slate-800

          bg-white/90
          dark:bg-slate-900/70

          backdrop-blur-xl

          shadow-xl
          hover:shadow-2xl

          transition-all
          duration-300

          hover:-translate-y-1
        "
      >

        {/* GLOW */}

        <div
          className="
            absolute
            top-0
            right-0

            h-32
            w-32

            bg-blue-500/10

            blur-3xl
          "
        />

        <div
          className="
            relative
            z-10

            flex
            items-center
            justify-between
          "
        >

          <div>

            <h2
              className="
                text-sm
                font-medium

                text-slate-500
                dark:text-slate-400
              "
            >
              Total Keywords
            </h2>

            <p
              className="
                text-4xl
                font-black
                mt-4

                text-slate-950
                dark:text-white
              "
            >
              {total.toLocaleString()}
            </p>

          </div>

          <div
            className="
              p-4
              rounded-2xl

              bg-blue-100
              dark:bg-blue-500/10

              border
              border-blue-200
              dark:border-blue-500/20
            "
          >

            <BarChart3
              className="
                w-6
                h-6

                text-blue-600
                dark:text-blue-400
              "
            />

          </div>

        </div>

      </Card>

      {/* AVERAGE CPC */}

      <Card
        className="
          group
          relative
          overflow-hidden

          p-6
          rounded-3xl

          border
          border-slate-200
          dark:border-slate-800

          bg-white/90
          dark:bg-slate-900/70

          backdrop-blur-xl

          shadow-xl
          hover:shadow-2xl

          transition-all
          duration-300

          hover:-translate-y-1
        "
      >

        {/* GLOW */}

        <div
          className="
            absolute
            top-0
            right-0

            h-32
            w-32

            bg-green-500/10

            blur-3xl
          "
        />

        <div
          className="
            relative
            z-10

            flex
            items-center
            justify-between
          "
        >

          <div>

            <h2
              className="
                text-sm
                font-medium

                text-slate-500
                dark:text-slate-400
              "
            >
              Average CPC
            </h2>

            <p
              className="
                text-4xl
                font-black
                mt-4

                text-slate-950
                dark:text-white
              "
            >

              {averageCpc > 0

                ? `$${averageCpc.toFixed(2)}`

                : "--"}

            </p>

          </div>

          <div
            className="
              p-4
              rounded-2xl

              bg-green-100
              dark:bg-green-500/10

              border
              border-green-200
              dark:border-green-500/20
            "
          >

            <DollarSign
              className="
                w-6
                h-6

                text-green-600
                dark:text-green-400
              "
            />

          </div>

        </div>

      </Card>

      {/* COMPETITION */}

      <Card
        className="
          group
          relative
          overflow-hidden

          p-6
          rounded-3xl

          border
          border-slate-200
          dark:border-slate-800

          bg-white/90
          dark:bg-slate-900/70

          backdrop-blur-xl

          shadow-xl
          hover:shadow-2xl

          transition-all
          duration-300

          hover:-translate-y-1
        "
      >

        {/* GLOW */}

        <div
          className="
            absolute
            top-0
            right-0

            h-32
            w-32

            bg-violet-500/10

            blur-3xl
          "
        />

        <div
          className="
            relative
            z-10

            flex
            items-center
            justify-between
          "
        >

          <div>

            <h2
              className="
                text-sm
                font-medium

                text-slate-500
                dark:text-slate-400
              "
            >
              Competition
            </h2>

            <p
              className="
                text-4xl
                font-black
                mt-4

                text-slate-950
                dark:text-white
              "
            >

              {averageCompetition > 0

                ? averageCompetition.toFixed(2)

                : "--"}

            </p>

          </div>

          <div
            className="
              p-4
              rounded-2xl

              bg-violet-100
              dark:bg-violet-500/10

              border
              border-violet-200
              dark:border-violet-500/20
            "
          >

            <TrendingUp
              className="
                w-6
                h-6

                text-violet-600
                dark:text-violet-400
              "
            />

          </div>

        </div>

      </Card>

    </div>
  );
}