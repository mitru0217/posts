import React from "react";
import { MyHeader, Link } from "../Header/Header.styled";

const Header = () => {
  return (
    <MyHeader>
      <nav>
        <Link to='/' end>
          Home
        </Link>
        <Link to='/about'>About</Link>
        <Link to='/posts'>Posts</Link>
      </nav>
    </MyHeader>
  );
};

export default Header;
