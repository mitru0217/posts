import About from "../../pages/About/About";
import Posts from "../../pages/Posts/Posts";
import { Home } from "../../pages/Home/Home";
import { NotFound } from "../../pages/Not-Found/NotFound";
import PostIdPage from "../../pages/PostIdPage.jsx/PostIdPage";
// import Login from "../../pages/Login/Login";

export const privateRoutes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/posts", element: <Posts /> },
  { path: "/posts/:id", element: <PostIdPage /> },
  { path: "*", element: <NotFound /> },
];

// export const publicRoutes = [{ path: "/login", element: <Login /> }];
