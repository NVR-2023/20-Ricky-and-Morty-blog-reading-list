import React, { useState , useContext } from "react";
import { Link } from "react-router-dom";
import {Context} from "../store/appContext"

export const Navbar = () => {
	
	const { store , actions } = useContext(Context);
	const [ favouritesList , setFavouritesList ] = useState(store.favourites);
 
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<div className="mx-3">Ricky & Morty</div>
			<div className="dropdown">
				<button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
				Favourites
				</button>
				<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
					{ store.favourites&&store.favourites.map((element, index) => {
						return (
							<li key={index} className="dropdown-item">
								<span 
								onClick={() => {actions.toggleFavourite(element)}}
								className="bg-danger">
								[X]
								</span>
								<span>
								 {element}	
								</span>
							</li>
						);
					})}
				</ul>
			</div>
		</nav>
	);
};
