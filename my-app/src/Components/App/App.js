import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../../pages/About/About";
import Post from "../../pages/Post/Post";

function App() {
  return (
    <>
      <Routes>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/post'>
          <Post />
        </Route>
      </Routes>
    </>
  );
}

export default App;
