import React from "react";
import { Routes, Route } from "react-router-dom";

// import About from "../../pages/About/About";
// import Posts from "../../pages/Posts/Posts";
// import { Home } from "../../pages/Home/Home";
// import { NotFound } from "../../pages/Not-Found/NotFound";
// import PostIdPage from "../../pages/PostIdPage.jsx/PostIdPage";
import { privateRoutes } from "./routes";

const AppRouter = () => {
  return (
    <Routes>
      {privateRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  );

  /* <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/posts' element={<Posts />} />
        <Route path='/posts/:id' element={<PostIdPage />} />
        <Route path='*' element={<NotFound />} /> */
};

export default AppRouter;
