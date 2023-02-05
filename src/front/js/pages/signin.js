import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Signin = () => {
  const { store, actions } = useContext(Context);

  return (
    // Aquí pienso colocar dos acordeones, uno de Login y otro de Registro
    <div className="container">
      <div className="d-flex justify-content-center gap-2">
        <button
          type="button"
          className="btn btn-primary btn-lg"
          onClick={() => actions}
        >
          Login
        </button>
        <button
          type="button"
          className="btn btn-secondary btn-lg"
          onClick={() => actions}
        >
          Register
        </button>
      </div>
    </div>
  );
};
