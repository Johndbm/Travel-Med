import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import medico1 from "../../img/esp1.jpg";
import medico2 from "../../img/esp2.jpg";
import medico3 from "../../img/esp3.jpg";
import medico4 from "../../img/esp4.jpg";

import { Context } from "../store/appContext";

export const Especialistas = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="d-flex justify-content-center ">
        <div className="card card-es">
          <img src={medico1} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Dr Carlos Amundaray</h5>
            <p className="card-text">
              Cirujano Plastico experto en cirugia reparadora y estetica y
              cirugia de mamas .
            </p>
            <a href="#" className="btn btn-primary">
              Agendar cita
            </a>
          </div>
        </div>

        <div className="card card-es">
          <img src={medico2} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Dra Kathernine Valdivieso</h5>
            <p className="card-text">
              Cirujano Plastico Reconstructivo, presidente de la sociedad de
              cirugia plastica Venezolana 2016-2018
            </p>
            <a href="#" className="btn btn-primary">
              Agendar cita
            </a>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center ">
        <div className="card card-es">
          <img src={medico3} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Dra Rebecca Lombardi</h5>
            <p className="card-text">
              Otorrinolaringolo Especialista en Rinoplastia Estetica y
              Funcional. Master en Rinoplastia y cirugia de SPN.
            </p>
            <a href="#" className="btn btn-primary">
              Agendar cita
            </a>
          </div>
        </div>

        <div className="card card-es">
          <img src={medico4} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Dr Armando Caraballo</h5>
            <p className="card-text">
              Cirujano Bariatrico. Cuenta con 15 años de experiencia. Director
              del Hospital J.M de los Rios
            </p>
            <a href="#" className="btn btn-primary">
              Agendar cita
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
