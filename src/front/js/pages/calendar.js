import React, { Component } from "react";
import { Footer } from "../component/footer";
import { Navbar } from "../component/navbar";


export const Calendar = () => (
  <>
  <Navbar />
    <h1 className="text-center my-5">Por favor agendar su cita</h1>
    <div
      className="calendly-inline-widget"
      data-url="https://calendly.com/travelmed23"
      style={{ minWidth: "320px", height: "630px" }}
    ></div>
    <Footer />
  </>
);
