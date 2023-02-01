import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import gerentedama from "../../img/gerentedama.jpg";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      <h1>Hello Rigo!!</h1>
      <p>
        <img src={rigoImageUrl} />

        <div class=" container-sm d-flex align-items-start containersn ">
          <div>
            <h1>Sobre nosotros</h1>
            <h4 className="px-4">
              Somos una empresa encargada de administrarte todas las facilidades
              necesarias para que puedas realizarte una operacion estetica en
              Venezuela junto a los mejores especialistas del pais. Nunca te
              dejaremos solo en este proceso.
            </h4>
          </div>
          <img className="gerente" src={gerentedama} />
        </div>

        <h1> Te ofrecemos</h1>

      <div className="d-flex flex-row bd-highlight mb-3 d-flex justify-content-center">
        <div className="card">
  <img src="https://cf.bstatic.com/images/hotel/840x460/305/305503894.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Hospedaje</h5>
    <p className="card-text">Te ofrecemos un excelente sistema de hospedaje con un servicio de alimentacion apto 
    para tu tratamiento.</p>
    
  </div>
</div>

<div className="card">
  <img src="https://www.adslzone.net/app/uploads-adslzone.net/2019/07/vuelos.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Vuelos</h5>
    <p className="card-text">Contamos con una plataforma donde podras agendar tu vuelo.</p>
    
  </div>
</div>

<div className="card">
  <img src="https://img.freepik.com/vector-premium/imagen-tridimensional-coche-taxi-aislado-fondo-blanco_53876-12108.jpg?w=1060" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Traslados</h5>
    <p className="card-text">Nos encargamos de realizar los traslados necearios mientras estes en el pais</p>
    
  </div>
</div>

</div>



      </p>
      <div className="alert alert-info">
        {store.message ||
          "Loading message from the backend (make sure your python backend is running)..."}
      </div>
      <p>
        This boilerplate comes with lots of documentation:{" "}
        <a href="https://start.4geeksacademy.com/starters/react-flask">
          Read documentation
        </a>
      </p>
    </div>
  );
};
