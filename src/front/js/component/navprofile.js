// Este componente sólo deberá cargar cuando se autentique un usuario mediante el token
import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navprofile = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="dropdown text-end">
      <a
        href="#"
        className="d-block link-dark text-decoration-none dropdown-toggle show"
        data-bs-toggle="dropdown"
        aria-expanded="true"
      >
        <img
          src="https://i.pravatar.cc/"
          alt="pravatar"
          width="32"
          height="32"
          className="rounded-circle"
        />
      </a>
      <ul
        className="dropdown-menu text-small show"
        data-popper-placement="bottom-end"
      >
        <li>
          <Link to="/especialistas" className="dropdown-item">
          
            Nueva Consulta...
          
          </Link>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Ajustes
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Mi Perfil
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <a
            className="dropdown-item"
            href="#"
            onClick={() => actions.logout()}
          >
            Sign out
          </a>
        </li>
      </ul>
    </div>
  );
};
