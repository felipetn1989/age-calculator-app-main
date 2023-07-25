import React, { ChangeEvent } from "react";

interface Props {
  period: string;
  name: string;
  placeholder: string;
  min: number;
  max: number;
  handleChange(e: React.ChangeEvent<HTMLInputElement>): void 
  size: string
}

const Input = ({ period, name, placeholder, min, max, handleChange, size }: Props) => {
  return (
    <div className="flex flex-col">
      <label className="text-[#716f6f] uppercase" htmlFor={name}>{period}</label>
      <input
      className={size}
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
