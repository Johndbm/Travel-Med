// Este componente sólo deberá cargar cuando se autentique un usuario mediante el token
import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navprofile = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { store, actions } = useContext(Context);
  const login = (event) => {
    event.preventDefault();
    actions.login(email, password);
    console.log(Text);
  };

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
          <a className="dropdown-item" href="#">
            New project...
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Settings
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Profile
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Sign out
          </a>
        </li>
      </ul>
    </div>
  );
};
