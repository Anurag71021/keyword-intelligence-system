import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Keyword } from "@/types/keyword";

interface Props {
  keywords: Keyword[];
}

export default function KeywordTable({
  keywords,
}: Props) {

  return (

    <div
      className="
        rounded-3xl
        overflow-hidden

        border
        border-slate-200
        dark:border-slate-800

        bg-white
        dark:bg-slate-900/80

        shadow-xl
      "
    >

      <Table>

        <TableHeader
          className="
            bg-slate-100
            dark:bg-slate-800
          "
        >

          <TableRow
            className="
              border-slate-200
              dark:border-slate-700
            "
          >

            <TableHead
              className="
                text-slate-700
                dark:text-slate-300

                font-semibold
              "
            >
              Keyword
            </TableHead>

            <TableHead
              className="
                text-slate-700
                dark:text-slate-300

                font-semibold
              "
            >
              Volume
            </TableHead>

            <TableHead
              className="
                text-slate-700
                dark:text-slate-300

                font-semibold
              "
            >
              CPC
            </TableHead>

            <TableHead
              className="
                text-slate-700
                dark:text-slate-300

                font-semibold
              "
            >
              Competition
            </TableHead>

          </TableRow>

        </TableHeader>

        <TableBody>

          {keywords.map((item, index) => (

            <TableRow
              key={index}
              className="
                border-slate-100
                dark:border-slate-800

                hover:bg-slate-50
                dark:hover:bg-slate-800/50

                transition-all
                duration-200
              "
            >

              <TableCell
                className="
                  font-medium

                  text-slate-900
                  dark:text-slate-200
                "
              >

                {item.keyword}

              </TableCell>

              <TableCell
                className="
                  text-slate-700
                  dark:text-slate-300
                "
              >

                {item.volume
                  ? item.volume.toLocaleString()
                  : "--"}

              </TableCell>

              <TableCell
                className="
                  text-slate-700
                  dark:text-slate-300
                "
              >

                {item.cpc
                  ? `$${item.cpc}`
                  : "--"}

              </TableCell>

              <TableCell>

                {item.competition ? (

                  <span
                    className={`
                      px-3
                      py-1

                      rounded-full

                      text-xs
                      font-semibold

                      ${
                        item.competition < 0.33

                          ? `
                            bg-green-100
                            text-green-700
                            border
                            border-green-200

                            dark:bg-green-500/20
                            dark:text-green-300
                            dark:border-green-500/20
                          `

                          : item.competition < 0.66

                          ? `
                            bg-yellow-100
                            text-yellow-700
                            border
                            border-yellow-200

                            dark:bg-yellow-500/20
                            dark:text-yellow-300
                            dark:border-yellow-500/20
                          `

                          : `
                            bg-red-100
                            text-red-700
                            border
                            border-red-200

                            dark:bg-red-500/20
                            dark:text-red-300
                            dark:border-red-500/20
                          `
                      }
                    `}
                  >

                    {item.competition}

                  </span>

                ) : (

                  <span
                    className="
                      text-slate-500
                      dark:text-slate-400
                    "
                  >
                    --
                  </span>

                )}

              </TableCell>

            </TableRow>

          ))}

        </TableBody>

      </Table>

    </div>
  );
}