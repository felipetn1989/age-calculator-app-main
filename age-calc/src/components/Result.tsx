import React from "react";

interface Props {
  timeYears?: number;
  timeMonths?: number;
  timeDays?: number;
}

const Result = ({ timeYears, timeMonths, timeDays }: Props) => {
  return (
    <div>
      <p>{timeYears !== undefined ? timeYears : "--"} years</p>
      <p>{timeMonths !== undefined ? timeMonths : "--"} months</p>
      <p>{timeDays !== undefined ? timeDays : "--"} days</p>
    </div>
  );
};

export default Result;
