import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Historia } from "./pages/historia";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import { Especialistas } from "./pages/especialistas.js";
import { Pago } from "./pages/pago.js";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Signin } from "./pages/signin";
import { Calendar } from "./pages/calendar";


//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Demo />} path="/demo" />
            <Route element={<Single />} path="/single/:theid" />
            <Route element={<Signin />} path="/signin" />
            <Route element={<Login />} path="/login" />
            <Route element={<Register />} path="/register" />
            <Route element={<Especialistas />} path="/especialistas" />
            <Route element={<Pago />} path="/pago" />
            <Route element={<Calendar />} path="/calendar" />
            <Route element={<Historia />} path="/historia" />
            <Route element={<h1>Not found!</h1>} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
