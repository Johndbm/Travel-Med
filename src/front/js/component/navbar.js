import React from "react";
import { Link } from "react-router-dom";
import ImageUrl from "../../img/logo5.png";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link to="/">
          <a className="navbar-brand" href="#">
            <img src="logo5.png" alt="Bootstrap" width={125} height={70} />
          </a>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#"></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#nosotros">Sobre Nosotros</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#ofrecemos">Servicios</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contactanos">Contáctanos</a>
            </li>
          </ul>
        </div>
        <div className="dropdown">
          <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
            Iniciar Sesión
          </button>
          <form className="dropdown-menu p-4 dropdown-menu-end">
            <div className="mb-3">
              <label for="exampleDropdownFormEmail2" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleDropdownFormEmail2" placeholder="email@example.com" />
            </div>
            <div className="mb-3">
              <label for="exampleDropdownFormPassword2" className="form-label">Password</label>
              <input type="password" className="form-control" id="exampleDropdownFormPassword2" placeholder="Password" />
            </div>
            <div className="mb-3">
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="dropdownCheck2" />
                <label className="form-check-label" for="dropdownCheck2">
                  Recordar Contraseña
                </label>
                <p className="text-center text-muted mt-5 mb-0">
                  No tienes una Cuenta?{" "}
                  <a href="#!" className="fw-bold text-body">
                    <u>Registrate</u>
                  </a>
                </p>
                <div className="dropdown">
                  <a className="dropdown-item text-muted" href="#">Olvidaste la Contraseña?</a>
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">Sign in</button>
          </form>
        </div>
      </div>
    </nav>
  );
};
