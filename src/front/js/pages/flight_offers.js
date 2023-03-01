import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Flight_offers = () => {
  const [origen, setOrigen] = useState("");
  const [destino, setDestino] = useState("");
  const [salida, setSalida] = useState("");
  const [retorno, setRetorno] = useState("");
  const [adultos, setAdultos] = useState("");
  const [niños, setNiños] = useState("");

  const { store, actions } = useContext(Context);
  const flight_offers = (event) => {
    event.priventDefault();
    actions.flight_offers(origen, destino, salida, retorno, adultos, niños);
  };

  return (
    <>
      <h1 className="my-5 d-flex justify-content-center">Elige tu vuelo</h1>
      <form onSubmit={flight_offers}>
        <div className="container-sm border border-dark border border-2">
          <h3>Locacion</h3>
          <div className="row">
            <div className="col-sm">
              <div className="mb-2">
                <label
                  id="origin-label"
                  for="origin-input"
                  className="form-label"
                >
                  Origen
                </label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="bi-pin-map"></i>{" "}
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    list="origin-options"
                    id="origin-input"
                    placeholder="Location"
                    aria-describedby="origin-label"
                    onChange={(event) => setOrigen(event.target.value)}
                    value={origen}
                  />
                  <datalist id="origin-options"></datalist>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="mb-2">
                <label
                  id="destination-label"
                  for="destination-input"
                  className="form-label"
                >
                  Destino
                </label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="bi-pin-map-fill"></i>{" "}
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    list="destination-options"
                    id="destination-input"
                    placeholder="Location"
                    aria-describedby="destination-label"
                    onChange={(event) => setDestino(event.target.value)}
                    value={destino}
                  />
                  <datalist id="destination-options"></datalist>
                </div>
              </div>
            </div>
          </div>

          {/* <!--  --> */}
          <div className="container d-flex justify-content-center card-vuelos">
            <div className="d-flex justify-content-center ">
              <div className="row">
                <div className="mb-2 col">
                  <div className="h-100 card">
                    <div className="card-body">
                      <h5 className="card-title">Fechas</h5>
                      <div className="mb-2">
                        <label
                          id="flight-type-label"
                          for="flight-type-select"
                          className="form-label"
                        >
                          Flight
                        </label>
                        <select
                          id="flight-type-select"
                          className="form-select"
                          aria-describedby="flight-type-label"
                        >
                          <option value="one-way">Solo Ida</option>
                          <option value="round-trip">Ida y Vuelta</option>
                        </select>
                      </div>
                      <div id="departure-date" className="mb-2">
                        <div id="departure-date" className="mb-2">
                          <label
                            id="departure-date-label"
                            for="departure-date-input"
                            className="form-label"
                          >
                            Salida
                          </label>
                          <div className="input-group">
                            <span className="input-group-text">
                              <i className="bi-calendar"></i>
                            </span>
                            <input
                              type="date"
                              className="form-control"
                              id="departure-date-input"
                              aria-describedby="departure-date-label"
                              onChange={(event) =>
                                setSalida(event.target.value)
                              }
                              value={salida}
                            />
                          </div>
                        </div>
                      </div>
                      <div id="return-date" className="mb-2">
                        <div id="return-date" className="mb-2">
                          <label
                            id="return-date-label"
                            for="return-date-input"
                            className="form-label"
                          >
                            Retorno
                          </label>
                          <div className="input-group">
                            <span className="input-group-text">
                              <i className="bi-calendar-fill"></i>{" "}
                            </span>
                            <input
                              type="date"
                              className="form-control"
                              id="return-date-input"
                              aria-describedby="return-date-label"
                              onChange={(event) =>
                                setRetorno(event.target.value)
                              }
                              value={retorno}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- ... --> */}
                </div>
              </div>
            </div>
            <div className="mb-2 col">
              <div className="h-100 card">
                <div className="card-body">
                  <h5 className="card-title">Detalles</h5>
                  <div className="input-group">
                    <label for="adults-input" className="input-group-text">
                      Adultos
                    </label>
                    <input
                      type="number"
                      min="0"
                      className="form-control"
                      id="adults-input"
                      aria-describedby="adults-label"
                      onChange={(event) => setAdultos(event.target.value)}
                      value={adultos}
                    />
                  </div>
                  <span id="adults-label" className="form-text">
                    12 years old and older
                  </span>
                </div>

                <div className="input-group">
                  <label for="children-input" className="input-group-text">
                    Niños
                  </label>
                  <input
                    type="number"
                    min="0"
                    className="form-control"
                    id="children-input"
                    aria-describedby="children-label"
                    onChange={(event) => setNiños(event.target.value)}
                    value={niños}
                  />
                </div>
                <span id="children-label" className="form-text">
                  2 to 12 years old
                </span>
              </div>
            </div>
          </div>
        </div>
        <button
          type="submit"
          id="search-button"
          className="w-50 btn btn-primary boton-vuelos"
        >
          Search
        </button>
      </form>
      <div className="container-md border border-dark border border-2">
        <div>Price</div>
        <div></div>
      </div>
      {/* <!-- ... --> */}
    </>
  );
};
