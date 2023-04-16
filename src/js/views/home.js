import React, {useContext} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import {Context} from "../store/appContext";
import {Card} from "../component/card";
import "../../styles/home.css";


export const Home = () => {
	const {store , actions} = useContext(Context);
	return (
		<div className="">
			<div className="row">	
				{
					store.characters&&store.characters.map((element) => {
						return <Card character={element} key={element.id}></Card>
					})
				}
			</div>
		</div>
		);
	
};
