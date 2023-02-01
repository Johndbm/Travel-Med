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

        <div class="shadow p-1 mb-2 bg-body rounded container-sm d-flex align-items-start bg-primary ">
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
