import React, { ChangeEvent, FormEvent } from "react";
import Input from "../form/Input";

import { IDate } from "../interfaces/IDate";

import arrow from "./arrow.svg";

interface Props {
  dateObj: IDate;
  setDateObj: React.Dispatch<React.SetStateAction<IDate>>;
  calculateTime(e: FormEvent<HTMLFormElement>): void;
  handleDate(e: ChangeEvent<HTMLInputElement>): void;
  showErrorEmpty: boolean[];
  validDates: boolean[]
}

const Form = ({
  dateObj,
  setDateObj,
  calculateTime,
  handleDate,
  showErrorEmpty,
  validDates
}: Props) => {
  const currYear = new Date().getFullYear();

  return (
    <form className="grid gap-8" onSubmit={calculateTime} action="#" noValidate>
      <div className="flex justify-between">
        <div>
          <Input
            period="Day"
            name="day"
            placeholder="DD"
            min={1}
            max={31}
            handleChange={handleDate}
            size="w-[5.75rem] h-[3.375rem]"
          />
          {showErrorEmpty[0] && (
            <span className="text-[#ff5757] text-[0.5rem]">
              This field is required
            </span>
          )}
          {!validDates[0] && (
            <span className="text-[#ff5757] text-[0.5rem]">
              Must be a valid day
            </span>
          )}
        </div>
        <div>
          <Input
            period="Month"
            name="month"
            placeholder="MM"
            min={1}
            max={12}
            handleChange={handleDate}
            size="w-[5.75rem] h-[3.375rem]"
          />
          {showErrorEmpty[1] && (
            <span className="text-[#ff5757] text-[0.5rem]">
              This field is required
            </span>
          )}
          {!validDates[1] && (
            <span className="text-[#ff5757] text-[0.5rem]">
              Must be a valid month
            </span>
          )}
        </div>
        <div>
          <Input
            period="Year"
            name="year"
            placeholder="YYYY"
            min={1}
            max={currYear}
            handleChange={handleDate}
            size="w-[5.75rem] h-[3.375rem]"
          />
          {showErrorEmpty[2] && (
            <span className="text-[#ff5757] text-[0.5rem]">
              This field is required
            </span>
          )}
          {!validDates[2] && (
            <span className="text-[#ff5757] text-[0.5rem]">
              Must be in the past
            </span>
          )}
        </div>
      </div>
      <div className="relative w-full flex flex-col ">
        <div className="absolute top-8 w-full h-1 border-t border-[#716f6f]"></div>
        <button className="m-auto z-10">
          <img
            className="bg-[#854dff] rounded-full w-16 p-5"
            src={arrow}
            alt="Arrow Icon"
          />
        </button>
      </div>
    </form>
  );
};

export default Form;
