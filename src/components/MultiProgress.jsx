import { useMemo } from "react";
import { useState } from "react";

const MultiProgress = ({ height }) => {
  const [data, setData] = useState([
    { numberOfProjects: 45, projectsWorth: 4589.54, status: "delivered" },
    {
      numberOfProjects: 25,
      projectsWorth: 1125.54,
      status: "pending",
    },
    {
      numberOfProjects: 15,
      projectsWorth: 589.54,
      status: "refunded",
    },
    {
      numberOfProjects: 22,
      projectsWorth: 589.54,
      status: "chargedback",
    },
  ]);

  const getRatio = (data) => {
    const res = data.reduce((acc, cur) => acc + cur.projectsWorth, 0);
    return res;
  };

  const accumulatedValue = useMemo(() => getRatio(data), [data]);

  const setProgressColor = (status) => {
    let progressColor;
    switch (status) {
      case "delivered":
        progressColor = "bg-green-500";
        break;

      case "pending":
        progressColor = "bg-amber-400";
        break;

      case "refunded":
        progressColor = "bg-red-500";
        break;

      case "chargedback":
        progressColor = "bg-red-600";
        break;

      default:
        progressColor = "bg-secondary";
        break;
    }
    return progressColor;
  };

  return (
    <div className="flex w-full gap-[1px]">
      {data.map(({ numberOfProjects, projectsWorth, status }, i, arr) => {
        return (
          <div
            key={i}
            className={`${setProgressColor(
              status
            )} group relative ${height} cursor-pointer p-1 text-white ${
              (i === 0 && `rounded-tl-md rounded-bl-md`) ||
              (i === arr.length - 1 && "rounded-tr-md rounded-br-md")
            }`}
            style={{
              width: `${Math.floor((projectsWorth / accumulatedValue) * 100)}%`,
            }}
          >
            <ul className="invisible absolute top-full right-0 z-1 mt-1 min-w-max translate-y-2 rounded-md bg-slate-900 p-2 opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <li className="mb-1.5 flex flex-col gap-1 text-xs text-white">
                <span>Number of Projects</span> <b>{numberOfProjects}</b>
              </li>
              <li className="flex flex-col gap-1 text-xs text-white">
                <span>Projects Worth</span> <b>{projectsWorth}</b>
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default MultiProgress;
