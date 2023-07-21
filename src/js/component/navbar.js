import React, { useState , useContext } from "react";
import { Link } from "react-router-dom";
import {Context} from "../store/appContext"

export const Navbar = () => {
	
	const { store , actions } = useContext(Context);
	const [ favouritesList , setFavouritesList ] = useState(store.favourites);
 
	return (
		<nav className="navbar navbar-light bg-light mb-3 navbarTop">
			<div className="mx-3 px-1 title">ricky & morty reading list</div>
			<div className="dropdown">
				<button className="btn btn-secondary dropdown-toggle me-3 " type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
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
