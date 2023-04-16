import React, { useContext } from "react";
import {Context} from "../store/appContext";

export const Card = ({character}) => {

  const { store , actions } = useContext(Context);
  
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={character.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{character.name}</h5>
        <p className="card-text">
          Status: {character.status}
        </p>
        <p className="card-text">
          Species: {character.species}
        </p>
        <p className="card-text">
          Gender: {character.gender}
        </p>
        <p className="card-text">
          Origin: {character.origin.name}
        </p>
        <span>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
            <button 
              className="btn btn-outline-dark"
              onClick={ () => actions.addFavourite(character.id-1)}
              >Add to favorites
            </button>
          </span>
      </div>
    </div>
  );
};
