import React from "react";
import "./Try.css";
import { useForm, ValidationError } from "@formspree/react";

const Input = ({ Type, required, value, onChange, name }) => {
  const [state, handleSubmit] = useForm("xoqgnprl");

  return (
    <>
      <div className="Input_Container">
        <input
          type="text"
          className="Input"
          id={Type}
          required={required}
          value={value}
          autoComplete="off"
          onChange={onChange}
          name={name}
        />

        <span className="label">{Type}</span>
      </div>
    </>
  );
};

export default Input;
