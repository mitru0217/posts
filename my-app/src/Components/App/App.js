import React from "react";
import AppRouter from "../App/AppRouter";
import Header from "../Header/Header";
import { Container } from "../../pages/Posts/Posts.styled";

function App() {
  return (
    <Container>
      <Header />
      <AppRouter />
    </Container>
  );
}

export default App;
