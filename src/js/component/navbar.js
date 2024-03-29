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
				<button className="btn btn-secondary dropdown-toggle me-3 navbarFavouritesButton" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
				Favourites
				</button>
				<ul className="dropdown-menu favouritesList" aria-labelledby="dropdownMenuButton">
					{ store.favourites&&store.favourites.map((element, index) => {
						return (
							<li key={index} className="dropdown-item">
								<span 
								onClick={() => {actions.toggleFavourite(element)}}
								className="">
									<span className="">
										<svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 -960 960 960" width="16"><path d="m366-299.333 114-115.334 114.667 115.334 50-50.667-114-115.333 114-115.334-50-50.667L480-516 366-631.334l-50.667 50.667L430-465.333 315.333-350 366-299.333ZM267.333-120q-27 0-46.833-19.833t-19.833-46.833v-553.335H160v-66.666h192V-840h256v33.333h192v66.666h-40.667v553.335q0 27-19.833 46.833T692.667-120H267.333Zm425.334-620.001H267.333v553.335h425.334v-553.335Zm-425.334 0v553.335-553.335Z"/></svg>
									</span>
								</span>
								<span className="ms-1">
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
