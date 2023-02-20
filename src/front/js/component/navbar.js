import React from "react";
import { Link } from "react-router-dom";
import ImageUrl from "../../img/logo5.png";
import { Login } from "./login";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link to="/">
          <a className="navbar-brand" href="#">
            <img src="logo5.png" alt="Bootstrap" width={125} height={70} />
          </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#"></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#nosotros">
                Sobre Nosotros
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#ofrecemos">
                Servicios
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contactanos">
                Contáctanos
              </a>
            </li>
          </ul>
        </div>
        <Login />
      </div>
    </nav>
  );
};
