import React from "react";
import { MyLoader, WrappperLoader } from "./Loader.styled";

const Loader = () => {
  return (
    <WrappperLoader>
      <MyLoader></MyLoader>
    </WrappperLoader>
  );
};

export default Loader;
