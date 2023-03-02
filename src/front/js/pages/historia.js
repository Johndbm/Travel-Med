import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'


export const Historia = () => {
  const [name, setName] = useState("");
  const [edad, setEdad] = useState("");
  const [peso, setPeso] = useState("");
  const [telef, setTelef] = useState("");
  const [correo, setCorreo] = useState("");
  const [paisRes, setPaisRes] = useState("");
  const [direccion, setDireccion] = useState("");
  const [sexo, setSexo] = useState("");
  const [alt, setAlt] = useState("");
  const [cirugiasAnt, setCirugiasAnt] = useState("");
  const [especif, setEspecif] = useState("");
  const [alergias, setAlergias] = useState("");
  const [especify, setEspecify] = useState("");
  const [obs, setObs] = useState("");

  const { store, actions } = useContext(Context);
  const navigate = useNavigate()

  const historia = async (event) => {

    const data = {name, edad, peso, telef, correo, direccion, paisRes, sexo, alt, cirugiasAnt, especif, alergias, especify, obs}

    const response = await actions.registerHistoria(data);
    if (response) {
      Swal.fire(
        'Buen trabajo!',
        'Historia exitosamente registrada en sistema!',
        'success'
      ).then(() => navigate("/calendar"))
    } else {
      Swal.fire(
        'Oops!',
        'Error, por favor verifique los valores introducidos',
        'error'
      )
    }
    
  };

  return (
    <>
      <div className="container-h border border justify-content-center">
        <h1 className="d-flex justify-content-center mt-5 mb-5">Historia Medica</h1>
        <div className="container d-flex justify-content-center">
          <form className="row g-3" onSubmit={historia}>
            <div className="col-md-4">
              <label for="validationDefault01" className="form-label">Nombre y Apellido</label>
              <input type="text" className="form-control" id="validationDefault01" required onChange={(event) => setName(event.target.value)} value={name} />
            </div>
            <div className="col-md-1">
              <label for="validationDefault02" className="form-label">Edad</label>
              <input type="text" className="form-control" id="validationDefault02" required onChange={(event) => setEdad(event.target.value)} value={edad} />
            </div>
            <div className="col-md-1">
              <label for="validationDefault05" className="form-label">Peso</label>
              <input type="text" className="form-control" id="validationDefault05" required onChange={(event) => setPeso(event.target.value)} value={peso} />
            </div>
            <div className="col-md-3">
              <label for="validationDefaultUsername" className="form-label">Pais de Residencia</label>
              <div className="input-group">
                <input type="text" className="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required onChange={(event) => setPaisRes(event.target.value)} value={paisRes} />
              </div>
            </div>
            <div className="col-md-2">
              <label for="validationDefaultUsername" className="form-label">Num Telef</label>
              <div className="input-group">
                <input type="text" className="form-control" id="validationDefaul6" aria-describedby="inputGroupPrepend2" required onChange={(event) => setTelef(event.target.value)} value={telef} />
              </div>
            </div>
            <div className="col-md-3">
              <label for="validationDefaultUsername" className="form-label">Correo Electronico</label>
              <div className="input-group">
                <input type="text" className="form-control" id="validationDefaul7" aria-describedby="inputGroupPrepend2" required onChange={(event) => setCorreo(event.target.value)} value={correo} />
              </div>
            </div>
            <div className="col-md-5">
              <label for="validationDefault03" className="form-label">Direccion de hab</label>
              <input type="text" className="form-control" id="validationDefault03" required onChange={(event) => setDireccion(event.target.value)} value={direccion} />
            </div>
            <div className="col-md-2">
              <label for="validationDefault04" className="form-label">sexo</label>
              <select className="form-select" id="validationDefault04" required onChange={(event) => setSexo(event.target.value)} value={sexo}>
                <option selected disabled value="">...</option>
                <option>FEM</option>
                <option>MASC</option>
              </select>
            </div>
            <div className="col-md-1">
              <label for="validationDefault09" className="form-label">Altura</label>
              <input type="text" className="form-control" id="validationDefault09" required onChange={(event) => setAlt(event.target.value)} value={alt} />
            </div>

            <h5 className="d-flex justify-content-center">Se ha realizado cirugias anteriormente?</h5>
            <div className="" value={cirugiasAnt} onChange={(event) => setCirugiasAnt(event.target.value)}>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="si" />
                <label className="form-check-label" for="flexRadioDefault1">
                  Si
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="no" />
                <label className="form-check-label" for="flexRadioDefault2">
                  No
                </label>
              </div>
            </div>
          
            <div className="col-md-11 row d-flex justify-content-center" value={especif} onChange={(event) => setEspecif(event.target.value)}>
              <label for="exampleFormControlTextarea1" className="form-label">Si su respuesta es "SI" por favor especifique</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <div className="container">
            <h5 className="d-flex justify-content-center">Sufre de alergia?</h5>
            <div className="form-check" value={alergias} onChange={(event) => setAlergias(event.target.value)}>
              
              <div className="form-check">
                <input className="form-check-input" type="radio" name="alergia1" id="flexRadioDefault3" value="si" />
                <label className="form-check-label" for="flexRadioDefault3">
                  Si
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="alergia1" id="flexRadioDefault4" value="no" />
                <label className="form-check-label" for="flexRadioDefault4">
                  No
                </label>
              </div>
            </div>
              <div className="col-md-11 row d-flex justify-content-center" onChange={(event) => setEspecify(event.target.value)} value={especify}>
              <label for="exampleFormControlTextarea2" className="form-label">Si su repuesta es "SI" por favor especifique</label>
              <textarea className="form-control" id="exampleFormControlTextarea2" rows="3"></textarea>
            </div>
            </div>
            <div className="col-md-11 row d-flex justify-content-center" onChange={(event) => setObs(event.target.value)} value={obs}>
              <label for="exampleFormControlTextarea3" className="form-label">Observaciones</label>
              <textarea className="form-control d-flex justify-content-center" id="exampleFormControlTextarea3" rows="3"></textarea>
            </div>

            <div className="col-12 d-flex justify-content-center m-2">
              <button 
              type="button" 
              onClick={historia} 
              className="btn btn-primary"
              >
                Enviar formulario
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};