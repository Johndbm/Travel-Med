import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import { Navbar } from "../component/navbar";
import { Footer } from "../component/footer";
import Swal from "sweetalert2";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const register = async (event) => {
    event.preventDefault();
    const response = await actions.register(
      name,
      lastname,
      email,
      password,
      country,
      city,
      state
    );
    console.log(Text);
    if (response) {
      Swal.fire("Gracias!", "Transaccion Exitosa!", "success").then(() =>
        navigate("/login")
      );
    } else {
      Swal.fire("Oops!", "Rechazado🤨, Intente Nuevamente", "error");
    }
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="d-flex justify-content-center my-5">Regístrate</h1>
        <form className="row g-3" onSubmit={register}>
          <div className="col-md-6">
            <label for="inputName" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              className="form-control"
              id="inputName"
              required
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
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
              value={lastname}
              onChange={(event) => setLastname(event.target.value)}
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
              value={email}
              onChange={(event) => setEmail(event.target.value)}
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
              value={password}
              onChange={(event) => setPassword(event.target.value)}
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
              value={country}
              onChange={(event) => setCountry(event.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label for="inputCity" className="form-label">
              Ciudad
            </label>
            <input
              type="tex"
              className="form-control"
              id="inputCity"
              value={city}
              onChange={(event) => setCity(event.target.value)}
            />
          </div>
          <div className="col-md-4">
            <label for="inputState" className="form-label">
              Estado
            </label>
            <input
              type="text"
              className="form-control"
              id="inputState"
              value={state}
              onChange={(event) => setState(event.target.value)}
            />
          </div>
          <p className="text-center text-muted mt-5 mb-0">
            Ya tienes una Cuenta?{" "}
            <a href="#!" className="fw-bold text-body">
              <Link to="/login">
                <u>Inicia Sesión</u>
              </Link>
            </a>
          </p>
          <div className="col-12">
            <button type="submit" className="btn btn-primary my-5">
              Sign in
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};
