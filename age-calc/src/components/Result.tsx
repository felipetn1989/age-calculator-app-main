import React from "react";

interface Props {
  timeYears?: number;
  timeMonths?: number;
  timeDays?: number;
}

const Result = ({ timeYears, timeMonths, timeDays }: Props) => {
  return (
    <div>
      <p>{timeYears ? timeYears : "--"} years</p>
      <p>{timeMonths ? timeMonths : "--"} months</p>
      <p>{timeDays ? timeDays : "--"} days</p>
    </div>
  );
};

export default Result;
