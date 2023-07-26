import React, { FormEvent, ChangeEvent } from "react";
import Form from "../components/Form";
import Result from "../components/Result";

import { useState } from "react";

import { IDate } from "../interfaces/IDate";

interface Props {}

const Main = (props: Props) => {
  const [dateObj, setDateObj] = useState<IDate>({});

  const [diffObj, setDiffObj] = useState<IDate>({});

  const [showErrorEmpty, setShowErrorEmpty] = useState<boolean[]>([
    false,
    false,
    false,
  ]);

  const [validDates, setValidDates] = useState<boolean[]>([true, true, true]);

  function isValidDateInput(
    value: string,
    minValue: number,
    maxValue: number
  ): boolean {
    const intValue = parseInt(value);
    return intValue >= minValue && intValue <= maxValue;
  }

  function calculateTime(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();

    setDiffObj({});

    const inputFields = document.querySelectorAll(".inputField");

    const updatedShowErrorEmpty = [...showErrorEmpty];
    const updatedValidDates = [...validDates];

    inputFields.forEach((field, index) => {
      updatedShowErrorEmpty[index] = !(field as HTMLInputElement).value;
    });

    setShowErrorEmpty(updatedShowErrorEmpty);

    if (updatedShowErrorEmpty.some((element) => element)) return;

    const daysInFebruary =
      (dateObj.year! % 4 === 0 && dateObj.year! % 100 !== 0) ||
      dateObj.year! % 400 === 0
        ? 29
        : 28;

    const daysInMonth = [
      31,
      daysInFebruary,
      31,
      30,
      31,
      30,
      31,
      31,
      30,
      31,
      30,
      31,
    ];

    updatedValidDates[0] = isValidDateInput(
      (inputFields[0] as HTMLInputElement).value,
      1,
      daysInMonth[dateObj.month! - 1]
    );
    updatedValidDates[1] = isValidDateInput(
      (inputFields[1] as HTMLInputElement).value,
      1,
      12
    );
    updatedValidDates[2] = isValidDateInput(
      (inputFields[2] as HTMLInputElement).value,
      -Infinity,
      new Date().getFullYear()
    );

    setValidDates(updatedValidDates);

    if (updatedValidDates.some((element) => !element)) return;

    let yearDiff = new Date().getFullYear() - dateObj.year!;

    let monthDiff = new Date().getMonth() + 1 - dateObj.month!;

    let dayDiff = new Date().getDate() - dateObj.day!;

    if (dayDiff < 0) {
      dayDiff += daysInMonth[dateObj.month! - 1];
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
  }

  return (
    <main className="bg-white rounded-t-3xl rounded-bl-3xl px-6 py-12">
      <Form
        dateObj={dateObj}
        setDateObj={setDateObj}
        calculateTime={calculateTime}
        handleDate={handleDate}
        showErrorEmpty={showErrorEmpty}
        validDates={validDates}
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
