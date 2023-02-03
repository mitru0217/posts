import React from "react";
import { MyButton } from "./Button.styled";

const Button = ({ children, ...props }) => {
  return <MyButton {...props}>{children}</MyButton>;
};

export default Button;
