import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Calendar } from "./calendar";

export const Pago = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const Navigate = useNavigate();
  function Success() {
    Swal.fire({
      icon: "success",
      title: "Pago Exitoso",
      text: "Revise su email para el recibo",
      footer:
        '<a href="/calendar" class="btn btn-success">ok</a>',
        
      showConfirmButton: false,
    });
    setShowCalendar(true);
  }
  return (
    <>
      <h1 className="d-flex justify-content-center my-5">Formulario de pago</h1>
      <div>
        <div className="row align-items-start ms-3">
          <div className="col-4">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-primary">Consulta con tu especialista</span>
            </h4>
            <ul className="list-group mb-3">
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0">Ud a agendado una cita con:</h6>
                  <small className="text-muted">Breve descripción</small>
                </div>
                <span className="text-muted">$12</span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Total (USD)</span>
                <strong>$20</strong>
              </li>
            </ul>
          </div>

          {/* Formulario de pago */}
          <div className="col">
            <form
              onSubmit={(event) => {
                event.preventDefault();
              }}
            >
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label for="exampleNombre" className="form-label">
                    Nombres
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleNombre"
                    required
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    ID o pasaporte
                  </label>
                  <input
                    type="id"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    required
                  />
                  <div id="identificacion" className="form-text">
                    Nunca compartiremos tus datos.
                  </div>
                </div>
              </div>

              <h5>Metodo de pago</h5>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" for="flexRadioDefault1">
                  PayPal
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  checked
                />
                <label className="form-check-label" for="flexRadioDefault2">
                  Transferencia
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  checked
                />
                <label className="form-check-label" for="flexRadioDefault2">
                  Zelle
                </label>
              </div>

              <div className="col-md-3">
                <label for="validationDefault05" className="form-label">
                  Numero de confirmacion
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationDefault05"
                  required
                />
              </div>

              <div className="col-md-3">
                <label for="validationDefault05" className="form-label">
                  Nombre de quien hizo la transaccion
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationDefault05"
                  required
                />
              </div>

              <div className="col-md-6">
                <label for="formFile" className="form-label">
                  Adjuntar comprobante de pago
                </label>
                <input className="form-control" type="file" id="formFile" />
              </div>
              <button
                type="submit"
                className="btn btn-primary mb-5 mt-3"
                onClick={Success}
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
