import React, { Component } from "react";
import redes from "../../img/redes-sociales12-remov2.png";


export const Footer = () => (
	<footer className="footer mt-auto py-3">
		        <div className="container-fluid" > 
        <div className="card-body footer footer-expand-lg footer row p-5">
			<div className="row text-black">

		<div className="col-xs-12 col-md-6 col-lg-3">	
		<h3> Contactanos </h3>
		<p className="">0212-332-7893 </p>
		<p>0424-489-7896</p>
		<p>travelmed@medicina.com</p>
		</div>	

		<div className="col-xs-12 col-md-6 col-lg-3   ">	
		<h3>Atencion al cliente</h3>
		<p>Lunes a viernes 8:00am a 5:00pm </p> 
		</div>

		<div className="col-xs-12 col-md-6 col-lg-3   ">	
		<h3>Te garantizamos</h3>
			<p>Hospedaje</p>
			<p>Vuelos</p>
		</div>
		

		<div className="col-xs-12 col-md-6 col-lg-3   ">	
		<h3 className="">Redes Sociales</h3>
		<img src={redes} widht={100} height={100} />
		</div>
		    </div>
			<div >
			
			</div>
        <p className="card-title  d-flex justify-content-center">Copyright your website 2023</p>
        
      </div>
      </div> 
	</footer>
);
