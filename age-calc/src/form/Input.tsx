import React, { ChangeEvent } from "react";

interface Props {
  period: string;
  name: string;
  placeholder: string;
  min: number;
  max: number;
  handleChange(e: React.ChangeEvent<HTMLInputElement>): void 
}

const Input = ({ period, name, placeholder, min, max, handleChange }: Props) => {
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
        onChange={handleChange}
      />
    </div>
  );
};

export default Input;
