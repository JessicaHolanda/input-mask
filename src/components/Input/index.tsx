import React, { InputHTMLAttributes, useCallback } from "react";

import { cep, currency, cpf, phone } from "./masks";

import "./styles.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  mask?: "cep" | "currency" | "cpf" | "phone";
  prefix?: string;
  name: string;
  label?: string;
}

const Input: React.FC<InputProps> = ({ mask, label, name, prefix, ...props }) => {
  const handleKeyUp = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      if (mask === "cep") {
        cep(e);
      }
      if (mask === "currency") {
        currency(e);
      }
      if (mask === "phone"){
        phone(e);
    }
      if (mask === "cpf") {
        cpf(e);
      }
    },
    [mask]
  );

  return (
    <div className="input-block ">
      <label htmlFor={name}>{label}</label>
      <input type="text" id={name}  {...props} onKeyUp ={handleKeyUp} />
    </div>
  );
};

export default Input;