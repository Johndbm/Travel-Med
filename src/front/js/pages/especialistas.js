import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import medico1 from "../../img/esp1.jpg";
import medico2 from "../../img/esp2.jpg";
import medico3 from "../../img/esp3.jpg";
import medico4 from "../../img/esp4.jpg";

import { Context } from "../store/appContext";

export const Especialistas = () => {
  const { store, actions } = useContext(Context);
  // Hay que hacer un map en esta pagina
  return (
    <>
      <div className="d-flex justify-content-center ">
        <div className="card card-es">
          <img src={medico1} className="card-img-top-esp" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Dr Carlos Amundaray</h5>
            <p className="card-text">
              Cirujano Plastico experto en Cirugia Reconstructiva y Estetica
              experto en Cirugia de Mamas .
            </p>
            <Link to="/pago" className="btn btn-primary">
              Agendar cita
            </Link>
          </div>
        </div>

        <div className="card card-es">
          <img src={medico2} className="card-img-top-esp" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Dra Katherine Valdivieso</h5>
            <p className="card-text">
              Cirujano Plastico Reconstructivo, Presidente de la Sociedad de
              Cirugia Plastica Venezolana 2016-2018
            </p>
            <Link to="/pago" className="btn btn-primary">
              Agendar cita
            </Link>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center ">
        <div className="card card-es">
          <img src={medico3} className="card-img-top-esp" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Dra Rebecca Lombardi</h5>
            <p className="card-text">
              Otorrinolaringologo Especialista en Rinoplastia Estetica y
              Funcional. Master en Rinoplastia y Cirugia de SPN.
            </p>
            <Link to="/pago" className="btn btn-primary">
              Agendar cita
            </Link>
          </div>
        </div>

        <div className="card card-es">
          <img src={medico4} className="card-img-top-esp" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Dr Armando Caraballo</h5>
            <p className="card-text">
              Cirujano Bariatrico. Cuenta con 15 años de experiencia. Director
              del Hospital J.M de los Rios
            </p>
            <Link to="/pago" className="btn btn-primary">
              Agendar cita
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
