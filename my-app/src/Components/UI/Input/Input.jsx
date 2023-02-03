import React from "react";
import { MyInput } from "./Input.styled";

const Button = ({ ...props }) => {
  return <MyInput {...props} />;
};

export default Button;
