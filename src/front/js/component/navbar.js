import React from "react";
import { Link } from "react-router-dom";
import ImageUrl from "../../img/logo5.png";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid justify-content-between">
        {/* <!-- Left elements --> */}
        <div className="d-flex">
          {/* <!-- Brand --> */}
          <a className="navbar-brand me-2 mb-1 d-flex align-items-center" href="#">
            <img
              src="logo5.png"
              height="20"
              alt="Logo"
              loading="lazy"
              style="margin-top: 2px;"
            />
          </a>

          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <ul className="navbar-nav">
                {/* <!-- Icon dropdown --> */}
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="flag-united-kingdom flag m-0"></i>
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="flag-united-kingdom flag"></i>English
                        <i className="fa fa-check text-success ms-2"></i>
                      </a>
                    </li>
                    <li><hr className="dropdown-divider" /></li>
                    <li>
                      <a className="dropdown-item" href="#"><i className="flag-france flag"></i>Français</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#"><i className="flag-spain flag"></i>Español</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </nav>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <ul className="navbar-nav">
                {/* <!-- Avatar --> */}
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle d-flex align-items-center"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp"
                      className="rounded-circle"
                      height="22"
                      alt="Portrait of a Woman"
                      loading="lazy" />
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <li>
                      <a className="dropdown-item" href="#">Registrate</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">Mi perfil</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">Ajustes</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">Cerrar seccion</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </nav>
          );
};
