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

    let currDate = new Date();

    let selectedDate = new Date(
      `${dateObj.month}/${dateObj.day}/${dateObj.year}`
    );

    let difference = currDate.getTime() - selectedDate.getTime();

    console.log(difference);

    setDiffObj({
      year: Math.floor(difference / (1000 * 60 * 60 * 24 * 365)),
      month: Math.floor(
        (difference - diffObj.year! * 365 * 24 * 60 * 60 * 1000) /
          (1000 * 60 * 60 * 24 * 30)
      ),
      day: Math.floor(
        (difference -
          (diffObj.year! * 365 * 24 * 60 * 60 * 1000 +
            diffObj.month! * 30 * 24 * 60 * 60 * 1000)) /
          (1000 * 60 * 60 * 24)
      ),
    });
  }

  function handleDate(e: ChangeEvent<HTMLInputElement>): void {
    setDateObj({ ...dateObj, [e.target.name]: e.target.value });
    console.log(dateObj);
  }

  return (
    <main>
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
