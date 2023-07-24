import React, { ChangeEvent, FormEvent } from "react";
import Input from "../form/Input";

import { IDate } from "../interfaces/IDate";

import arrow from "./arrow.svg";

interface Props {
  dateObj: IDate;
  setDateObj: React.Dispatch<React.SetStateAction<IDate>>;
  calculateTime(e: FormEvent<HTMLFormElement>): void
  handleDate(e: ChangeEvent<HTMLInputElement>): void 
}

const Form = ({ dateObj, setDateObj, calculateTime, handleDate }: Props) => {
  const currYear = new Date().getFullYear();

  return (
    <form onSubmit={calculateTime} action="#" noValidate>
      <Input
        period="Day"
        name="day"
        placeholder="DD"
        min={1}
        max={31}
        handleChange={handleDate}
      />
      <Input
        period="Month"
        name="month"
        placeholder="MM"
        min={1}
        max={12}
        handleChange={handleDate}
      />
      <Input
        period="Year"
        name="year"
        placeholder="YYYY"
        min={1}
        max={currYear}
        handleChange={handleDate}
      />
      <button>
        <img
          className="bg-[#854dff] rounded-full w-12 p-3"
          src={arrow}
          alt="Arrow Icon"
        />
      </button>
    </form>
  );
};

export default Form;
