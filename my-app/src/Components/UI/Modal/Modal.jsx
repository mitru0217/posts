import React from "react";
import { Backdrop, MyModalContent } from "./Modal.styled";

const Modal = ({ children, closeModal }) => {
  return (
    <Backdrop onClick={closeModal}>
      <MyModalContent onClick={(e) => e.stopPropagation()}>
        {children}
      </MyModalContent>
    </Backdrop>
  );
};

export default Modal;
