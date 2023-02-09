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
          <input type="text" className="form-control" id="inputName" required />
        </div>
        <div className="col-md-6">
          <label for="inputLastname" className="form-label">
            Apellido
          </label>
          <input
            type="text"
            className="form-control"
            id="inputLastname"
            required
          />
        </div>
        <div className="col-md-6">
          <label for="inputEmail4" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="inputEmail4"
            required
          />
        </div>
        <div className="col-md-6">
          <label for="inputPassword4" className="form-label">
            Contraseña
          </label>
          <input
            type="password"
            className="form-control"
            id="inputPassword4"
            required
          />
        </div>
        <div className="col-md-6">
          <label for="inputCountry" className="form-label">
            País
          </label>
          <input
            type="text"
            className="form-control"
            id="inputCountry"
            required
          />
        </div>
        <div className="col-md-6">
          <label for="inputCity" className="form-label">
            Ciudad
          </label>
          <input type="tex" className="form-control" id="inputCity" />
        </div>
        <div className="col-md-4">
          <label for="inputState" className="form-label">
            Estado
          </label>
          <input type="text" className="form-control" id="inputState" />
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
