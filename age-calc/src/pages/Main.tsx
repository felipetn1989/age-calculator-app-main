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

    const selectedDate = `${dateObj.year}-${dateObj.month}-${dateObj.day}`;

    let yearDiff = new Date().getFullYear() - dateObj.year!;

    let monthDiff = new Date().getMonth() + 1 - dateObj.month!;

    let dayDiff = new Date().getDate() - dateObj.day!;

    if (dayDiff < 0) {
      dayDiff += 31;
      monthDiff--;
    }

    if (monthDiff < 0) {
      monthDiff += 12;
      yearDiff--;
    }

    setDiffObj({ day: dayDiff, month: monthDiff, year: yearDiff });
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
