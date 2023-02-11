import React, { Component } from "react";

export const Calendar = () => (
  <>
    <h1 className="text-center my-5">Por favor agendar su cita</h1>
    <div
      class="calendly-inline-widget"
      data-url="https://calendly.com/johndbanksm"
      style={{ minWidth: "320px", height: "630px" }}
    ></div>
  </>
);
