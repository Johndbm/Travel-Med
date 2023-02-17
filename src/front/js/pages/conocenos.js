import React from "react";
// import { Link} from "react-router-dom";
import fotolore from "../../img/fotolore.jpg";
import fotojohn from "../../img/fotojohn.jpg";
import fotodali from "../../img/fotodali.jpg";
import reactt from "../../img/reactt.png";
import sqll from "../../img/sqll.jpg";
import flask from "../../img/flask.png";
import htmll from "../../img/htmll.jpg";
import jss from "../../img/jss.jpg";
import csss from "../../img/csss.jpg";
import boostrap from "../../img/boostrap.jpg";
import phyt from "../../img/phyt.jpg";
import { Context } from "../store/appContext";

export const Conocenos = () => {
  return (
<>
<div className="container-c fluid border-primary">
      <div className="card-c  mb-3 text-center">
        <div className="card-header">
        </div>
        <div className="card-body">
          <h2 className="card-title">Conocenos</h2>
          <p className="card-text">Ofrecemos a los pacientes, que viven fuera de nuestro Pais, o de Caracas la opcion mediante una videollamada de ser consultado por cualquiera de nuestros Especilistas que conforman este grupo Medico en la plataforma para recibir cualquier tratamiento en este Pais sin preocuparse por nada, pudiendose tratar desde una simple consulta hasta agendar de manera facil segura y confiable cualquier intervencion quirurgica,  y nosotros nos encargaremos desde su hospedaje, servicio de alimentacion, cuidados con el personal de enfermeria, vuelos y traslados. </p>
        </div>
      </div>
   </div>
      <div className="card-group justify-content-center">
        <div className="card-adm">
          <img src={fotolore} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Ing. Lorena Mora</h5>
          </div>
          <p className="card-text">Ingeniero con fuertes conocimientos en la administracion de recursos financieros, con conocimientos en paquetes de diseno y con miras a especializarme en diseno de paginas web.</p>

        </div>
        <div className="card-adm">
          <img src={fotojohn} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">John Bank</h5>
          </div>
          <p className="card-text">Entusiasta de la automatización, la implementación de soluciones tecnológicas modernas y migración de servicios hacia ambientes de alta disponibilidad, optimización de procesos operativos.</p>
        </div>
        <div className="card-adm">
          <img src={fotodali} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Daliasca Rodriguez</h5>
          </div>
        </div>
      </div> 
      <h2 className="text-center"> Tecnologias empleadas</h2>
      <div className="container-d text-center">
  <div className="row row-cols-7 row-cols-s-7">
    <div className="col">
      <div className="p-3 border bg-light"><img src="reactt.png"/></div>
    </div>
    <div className="col">
      <div className="p-3 border bg-light"><img src= "sqll.jpg"/></div>
    </div>
    <div className="col">
      <div className="p-3 border bg-light"><img src="flask.png"/></div>
    </div>
    <div className="col">
      <div className="p-3 border bg-light"><img src="csss.jpg"/></div>
    </div>
    <div className="col">
      <div className="p-3 border bg-light"><img src="boostrap.jpg"/></div>
    </div>
    <div className="col">
      <div className="p-3 border bg-light"><img src="jss.jpg"/></div>
    </div>
    <div className="col content-center">
      <div className="p-3 border bg-light"><img src="htmll.jpg"/></div>
    </div>
    <div className="col content-center">
      <div className="p-3 border bg-light"><img src="phyt.jpg"/></div>
    </div>
  </div>
</div>
      
        </>
      );
};