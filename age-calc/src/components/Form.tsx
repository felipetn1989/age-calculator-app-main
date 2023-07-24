import React from "react";
import Input from "../form/Input";

import arrow from "./arrow.svg";

interface Props {}

const Form = (props: Props) => {
  return (
    <form action="#" noValidate>
      <Input period="Day" name="dayInput" placeholder="DD" min={1} max={31} />
      <Input
        period="Month"
        name="monthInput"
        placeholder="MM"
        min={1}
        max={12}
      />
      <Input
        period="Year"
        name="yearInput"
        placeholder="YYYY"
        min={1}
        max={2023}
      />
      <button>
        <img className="bg-[#854dff] rounded-full w-12 p-3" src={arrow} alt="Arrow Icon" />
      </button>
    </form>
  );
};

export default Form;
