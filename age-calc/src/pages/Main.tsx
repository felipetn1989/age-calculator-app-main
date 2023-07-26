import React, { FormEvent, ChangeEvent } from "react";
import Form from "../components/Form";
import Result from "../components/Result";

import { useState } from "react";

import { IDate } from "../interfaces/IDate";

interface Props {}

const Main = (props: Props) => {
  const [dateObj, setDateObj] = useState<IDate>({});

  const [diffObj, setDiffObj] = useState<IDate>({});

  function calculateTime(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();

    const currDate = new Date().toISOString().slice(0, 10);

    console.log(currDate);

    /*     const selectedDate = new Date(
      `${dateObj.month}/${dateObj.day}/${dateObj.year}`
    );

    let difference = currDate.getTime() - selectedDate.getTime();

    let totalDays = Math.floor(difference / (1000 * 60 * 60 * 24));

    let displayYears = Math.floor(totalDays / 365);
    let displayMonths = Math.floor((totalDays % 365) / 31);
    let displayDays = Math.floor((totalDays % 365) % 31);

    setDiffObj({
      year: displayYears,
      month: displayMonths,
      day: displayDays,
    }); */
  }

  function handleDate(e: ChangeEvent<HTMLInputElement>): void {
    setDateObj({ ...dateObj, [e.target.name]: e.target.value });
    console.log(dateObj);
  }

  return (
    <main className="bg-white rounded-t-3xl rounded-bl-3xl px-6 py-12">
      <Form
        dateObj={dateObj}
        setDateObj={setDateObj}
        calculateTime={calculateTime}
        handleDate={handleDate}
      />
      <Result
        timeYears={diffObj.year}
        timeMonths={diffObj.month}
        timeDays={diffObj.day}
      />
    </main>
  );
};

export default Main;
