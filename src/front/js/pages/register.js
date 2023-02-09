import React from "react";
import { Link } from "react-router-dom";

export const Register = () => {
  return (
    <div className="container">
      <h1 className="d-flex justify-content-center my-5">Regístrate</h1>
      <form className="row g-3">
        <div className="col-md-6">
          <label for="inputName" className="form-label">
            Nombre
          </label>
          <input type="name" className="form-control" id="inputName" />
        </div>
        <div className="col-md-6">
          <label for="inputLastname" className="form-label">
            Apellido
          </label>
          <input type="lastname" className="form-control" id="inputLastname" />
        </div>
        <div className="col-md-6">
          <label for="inputEmail4" className="form-label">
            Email
          </label>
          <input type="email" className="form-control" id="inputEmail4" />
        </div>
        <div className="col-md-6">
          <label for="inputPassword4" className="form-label">
            Contraseña
          </label>
          <input type="password" className="form-control" id="inputPassword4" />
        </div>
        <div className="col-md-6">
          <label for="inputCountry" className="form-label">
            País
          </label>
          <select
            id="inputCountry"
            className="form-select selectpicker countrypicker"
            data-flag="true"
          >
            <option selected>Seleccionar...</option>
            <option>...</option>
          </select>
        </div>
        <div className="col-md-6">
          <label for="inputCity" className="form-label">
            Ciudad
          </label>
          <select id="inputCity" className="form-select">
            <option selected>Seleccionar...</option>
            <option>...</option>
          </select>
        </div>
        <div className="col-md-4">
          <label for="inputState" className="form-label">
            Estado
          </label>
          <select id="inputState" className="form-select">
            <option selected>Seleccionar...</option>
            <option>...</option>
          </select>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary my-5">
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};
