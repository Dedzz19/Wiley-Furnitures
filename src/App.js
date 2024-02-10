import "./styles.css";
import * as React from "react";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useLocation, useRoutes } from "react-router-dom";
import Login from './Components/Login';
import Signup from './Components/Signup';
import Home from "./Home";
import Collections from "./Collections";


export default function App() {
  const [open, setOpen]=useState(false)
  const element = useRoutes([
    {
      path: "/",
      element: <Home open={open} setOpen={setOpen}/>
    },
    {
      path: "/sign-up",
      element: <Signup  />  
     },
     {
      path:"/login",
      element: <Login />
     },
     {
      path:'/Collections',
      element:<Collections open={open} setOpen={setOpen} />
     }
  ]);

  const location = useLocation();

  if (!element) return null;

  return (
    <AnimatePresence initial={false} mode="wait">
      {React.cloneElement(element,{key: location.pathname })}
    </AnimatePresence>
  );
}
