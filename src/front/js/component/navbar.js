import React from "react";
import { Link } from "react-router-dom";
import ImageUrl from "../../img/logo5.png";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-primary bg-primary  border solid 25px blue">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand">
						<img src="logo5.png"width="200" height="150" alt=""></img>
					</span>
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-info">Login</button>
					</Link>
				</div>
			</div>
			<button type="button" class="btn btn-info m-4"><i className="fa-solid fa-cart-shopping"></i></button>	
		</nav>
	);
};
