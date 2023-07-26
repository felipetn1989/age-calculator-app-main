import React from "react";

interface Props {
  timeYears?: number;
  timeMonths?: number;
  timeDays?: number;
}

const Result = ({ timeYears, timeMonths, timeDays }: Props) => {
  return (
    <div className="leading-[4rem] mt-8">
      <p className="font-extrabold italic text-[3.3125rem]">
        <span className="text-[#854dff]">{timeYears !== undefined ? timeYears : "--"}</span> years
      </p>
      <p className="font-extrabold italic text-[3.3125rem]">
        <span className="text-[#854dff]">{timeMonths !== undefined ? timeMonths : "--"} </span>months
      </p>
      <p className="font-extrabold italic text-[3.3125rem]">
        <span className="text-[#854dff]">{timeDays !== undefined ? timeDays : "--"}</span> days
      </p>
    </div>
  );
};

export default Result;
