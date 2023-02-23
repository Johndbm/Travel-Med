import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import { Calendar } from "./calendar";

export const Pago = () => {
  const [user_id, setUser_id] = useState("");
  const [id_passport, setId_passport] = useState("");
  const [payment_method, setPayment_method] = useState("");
  const [confirmation_number, setConfirmation_number] = useState("");
  const [transaction_person, setTransaction_person] = useState("");
  const [image_of_payment, setImage_of_payment] = useState("");
  // const [image_id, setImage_id] = useState("");

  const { actions } = useContext(Context);

  const pago = (event) => {
    event.preventDefault();

    const formData = new FormData()

    formData.append("payment_method", payment_method)
    formData.append("confirmation_number", confirmation_number)
    formData.append("transaction_person", transaction_person)
    formData.append("image_of_payment", image_of_payment)

    actions.pago(formData)


    // actions.pago(
    //   user_id,
    //   id_passport,
    //   payment_method,
    //   confirmation_number,
    //   transaction_person,
    //   image_of_payment
    //   // image_id
    // );
    // console.log(Text);
  };

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
            <form onSubmit={pago}>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="exampleNombre" className="form-label">
                    Nombres
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleNombre"
                    required
                    value={user_id}
                    onChange={(event) => setUser_id(event.target.value)}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    ID o pasaporte
                  </label>
                  <input
                    type="id"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    required
                    value={id_passport}
                    onChange={(event) => setId_passport(event.target.value)}
                  />
                  <div id="identificacion" className="form-text">
                    Nunca compartiremos tus datos.
                  </div>
                </div>
              </div>
              <h5>Metodo de pago</h5>{" "}
              <div
                className=""
                id="parentMetodoDePago"
                value={payment_method}
                onChange={(event) => setPayment_method(event.target.value)}
              >
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    value="PayPal"
                  />
                  <label className="form-check-label" htmlFor="flexRadioDefault1">
                    PayPal
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    value="Transferencia"
                  />
                  <label className="form-check-label" htmlFor="flexRadioDefault2">
                    Transferencia
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    value="Zelle"
                  // checked
                  />
                  <label className="form-check-label" htmlFor="flexRadioDefault2">
                    Zelle
                  </label>
                </div>
              </div>
              <div className="col-md-3">
                <label htmlFor="validationDefault05" className="form-label">
                  Numero de confirmacion
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationDefault05"
                  required
                  value={confirmation_number}
                  onChange={(event) =>
                    setConfirmation_number(event.target.value)
                  }
                />
              </div>
              <div className="col-md-3">
                <label htmlFor="validationDefault05" className="form-label">
                  Nombre de quien hizo la transaccion
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationDefault05"
                  required
                  value={transaction_person}
                  onChange={(event) =>
                    setTransaction_person(event.target.value)
                  }
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="formFile" className="form-label">
                  Adjuntar comprobante de pago
                </label>
                <input
                  className="form-control"
                  type="file"
                  id="formFile"
                  value={image_of_payment}
                  onChange={(event) => setImage_of_payment(event.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary mb-5 mt-3">
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
