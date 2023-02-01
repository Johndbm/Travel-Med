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
            <img
              src="https://cf.bstatic.com/images/hotel/840x460/305/305503894.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Hospedaje</h5>
              <p className="card-text">
                Te ofrecemos un excelente sistema de hospedaje con un servicio
                de alimentacion apto para tu tratamiento.
              </p>
            </div>
          </div>

          <div className="card">
            <img
              src="https://www.adslzone.net/app/uploads-adslzone.net/2019/07/vuelos.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Vuelos</h5>
              <p className="card-text">
                Contamos con una plataforma donde podras agendar tu vuelo.
              </p>
            </div>
          </div>

          <div className="card">
            <img
              src="https://img.freepik.com/vector-premium/imagen-tridimensional-coche-taxi-aislado-fondo-blanco_53876-12108.jpg?w=1060"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Traslados</h5>
              <p className="card-text">
                Nos encargamos de realizar los traslados necearios mientras
                estes en el pais
              </p>
            </div>
          </div>
        </div>

        <h2>Tu puedes ser el proximo</h2>
        <div className="d-flex justify-content-center">
         
          <section>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUC4bkEGb6fbsjAzvlvG3hmcR96JJm2mXlpw&usqp=CAU" />
            <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Z2VudGUlMjBzb25yaWVuZG98ZW58MHx8MHx8&w=1000&q=80" />
            <img src="https://img.freepik.com/foto-gratis/estilo-vida-emociones-gente-concepto-casual-hermosa-linda-chica-asiatica-que-siente-suavidad-piel-despues-aplicar-productos-belleza-cosmeticos-cuidado-piel-sonriendo-encantada-cuidando-cara_1258-58827.jpg?w=996&t=st=1675277049~exp=1675277649~hmac=ee29bb9e3255ff36c49f78631a76f7570e0f67ede6b2ff62242f5b310af9b9e5" />
            <img src="https://img.freepik.com/foto-gratis/estilo-vida-emociones-gente-concepto-ocio-verano-entusiasta-apuesto-hombre-feliz-levantando-manos-cantando-gritando-si-como-ganador-triunfando-sobre-premio-loteria-fondo-amarillo_1258-59685.jpg?w=996&t=st=1675277755~exp=1675278355~hmac=20a84917085e5bfd4f3e468024090b8a90ae4bb35b252d429aa2ad4bbb5e22d2" />
          </section>
        </div>
        <h2>Haz como ellos y cambia tu vida!</h2>
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
