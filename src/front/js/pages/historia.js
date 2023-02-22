import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Historia = () => {
    const [name, setName] = useState("");
    const [edad, setEdad] = useState("");
    const [peso, setPeso] = useState("");
    const [telef, setTelef] = useState("");
    const [correo, setCorreo] = useState("");
    const [direccion, setDireccion] = useState("");
    const [sexo, setSexo] = useState("");
    const [alt, setAlt] = useState("");
    const [cirugiasAnt, setCirugiasAnt] = useState("");
    const [alergias, setAlergias] = useState("");
    const [obs, setObs] = useState("");

    const { store, actions } = useContext(Context);
    const historia = (event) => {
      event.preventDefault();
      actions.historia(name, edad, peso, telef, correo, direccion, sexo, alt, cirugiasAnt, alergias, obs);
      console.log(Text);
    };
  
  return (
    <>
      <h1 className="d-flex justify-content-center mt-5 mb-5">Historia Medica</h1>
      <div className="container d-flex justify-content-center">
        <form className="row g-3">
          <div className="col-md-4">
            <label for="validationDefault01" className="form-label">Nombre y Apellido</label>
            <input type="text" className="form-control" id="validationDefault01" required />
          </div>
          <div className="col-md-1">
            <label for="validationDefault02" className="form-label">Edad</label>
            <input type="text" className="form-control" id="validationDefault02" required />
          </div>
          <div className="col-md-1">
            <label for="validationDefault05" className="form-label">Peso</label>
            <input type="text" className="form-control" id="validationDefault05" required />
          </div>
          <div className="col-md-3">
            <label for="validationDefaultUsername" className="form-label">Pais de Residencia</label>
            <div className="input-group">
              <input type="text" className="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required />
            </div>
          </div>
          <div className="col-md-2">
            <label for="validationDefaultUsername" className="form-label">Numero Telefonico</label>
            <div className="input-group">
              <input type="text" className="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required />
            </div>
          </div>
          <div className="col-md-3">
            <label for="validationDefaultUsername" className="form-label">Correo Electronico</label>
            <div className="input-group">
              <input type="text" className="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required />
            </div>
          </div>
          <div className="col-md-6">
            <label for="validationDefault03" className="form-label">Direccion de hab</label>
            <input type="text" className="form-control" id="validationDefault03" required />
          </div>
          <div className="col-md-1">
            <label for="validationDefault04" className="form-label">sexo</label>
            <select className="form-select" id="validationDefault04" required>
              <option selected disabled value="">FEM</option>
              <option>MASC</option>
            </select>
          </div>
          <div className="col-md-1">
            <label for="validationDefault05" className="form-label">Altura</label>
            <input type="text" className="form-control" id="validationDefault05" required />
          </div>
          <h5 className="d-flex justify-content-center">Se ha realizado cirugias anteriormente?</h5>
          <div className="form-check form-check-inline d-flex justify-content-center">
            <input className="form-check-input m-2" type="checkbox" id="inlineCheckbox1" value="option1" />
            <label className="form-check-label m-1" for="inlineCheckbox1">SI</label>
            <div className="form-check form-check-inline d-flex justify-content-center">
              <input className="form-check-input m-2" type="checkbox" id="inlineCheckbox2" value="option2" />
              <label className="form-check-label m-1" for="inlineCheckbox2">NO</label>
            </div>
          </div>
          <div className="col-md-11 row d-flex justify-content-center">
            <label for="exampleFormControlTextarea1" className="form-label">Cirugias anteriores</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
          </div>
          <h5 className="d-flex justify-content-center">Sufre de alergia?</h5>
          <div className="form-check form-check-inline d-flex justify-content-center">
            <input className="form-check-input m-2" type="checkbox" id="inlineCheckbox1" value="option1" />
            <label className="form-check-label m-1" for="inlineCheckbox1">SI</label>
            <div className="form-check form-check-inline d-flex justify-content-center">
              <input className="form-check-input m-2" type="checkbox" id="inlineCheckbox3" value="option3" />
              <label className="form-check-label m-1" for="inlineCheckbox3">MEDICAMENTOS</label>
              <div className="form-check form-check-inline d-flex justify-content-center">
                <input className="form-check-input m-2" type="checkbox" id="inlineCheckbox4" value="option4" />
                <label className="form-check-label m-1" for="inlineCheckbox4">OTROS</label>
                <div className="form-check form-check-inline d-flex justify-content-center">
                  <input className="form-check-input m-2" type="checkbox" id="inlineCheckbox2" value="option2" />
                  <label className="form-check-label m-1" for="inlineCheckbox2">  No</label>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-11 row d-flex justify-content-center">
            <label for="exampleFormControlTextarea1" className="form-label">Especifique</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <div className="col-md-11 row d-flex justify-content-center">
            <label for="exampleFormControlTextarea1" className="form-label">Observaciones</label>
            <textarea className="form-control d-flex justify-content-center" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <div className="col-4">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="invalidCheck2" required />
              <label className="form-check-label" for="invalidCheck2">
                Agree to terms and conditions
              </label>
            </div>
          </div>
          <div className="col-12 d-flex justify-content-center m-2">
            <button className="btn btn-primary" type="submit">Enviar</button>
          </div>
        </form>
      </div>
    </>
  );
};