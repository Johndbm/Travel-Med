import React from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div className="dropdown">
      <button
        type="button"
        className="btn btn-primary dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        data-bs-auto-close="outside"
      >
        Iniciar Sesión
      </button>
      <form className="dropdown-menu p-4 dropdown-menu-end">
        <div className="mb-3">
          <label for="exampleDropdownFormEmail2" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleDropdownFormEmail2"
            placeholder="email@example.com"
            required
          />
        </div>
        <div className="mb-3">
          <label for="exampleDropdownFormPassword2" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleDropdownFormPassword2"
            placeholder="Password"
            required
          />
        </div>
        <div className="mb-3">
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="dropdownCheck2"
            />
            <label className="form-check-label" for="dropdownCheck2">
              Recordar Contraseña
            </label>
            <p className="text-center text-muted mt-5 mb-0">
              No tienes una Cuenta?{" "}
              <a href="#!" className="fw-bold text-body">
                <Link to="/register">
                  <u>Registrate</u>
                </Link>
              </a>
            </p>
            <div className="dropdown">
              <a className="dropdown-item text-muted" href="#">
                Olvidaste la Contraseña?
              </a>
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Sign in
        </button>
      </form>
    </div>
  );
};
