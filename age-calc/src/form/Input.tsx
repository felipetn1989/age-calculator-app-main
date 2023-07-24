import React from "react";

interface Props {
  period: string;
  name: string;
  placeholder: string;
  min: number;
  max: number;
}

const Input = ({ period, name, placeholder, min, max }: Props) => {
  return (
    <div>
      <label htmlFor={name}>{period}</label>
      <input
        type="number"
        name={name}
        id={name}
        placeholder={placeholder}
        min={min}
        max={max}
      />
    </div>
  );
};

export default Input;
