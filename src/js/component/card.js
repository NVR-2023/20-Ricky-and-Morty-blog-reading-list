import React, { useContext } from "react";
import {Context} from "../store/appContext";
import { useNavigate } from "react-router";

export const Card = ({subject}) => {
  const navigate = useNavigate();

  const { store , actions } = useContext(Context);
  
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={subject.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{subject.name}</h5>
        <div>
           {subject.species} / {subject.gender}
        </div>
        <span>
            <button 
            onClick={() => navigate(`/single/${subject.id}`)}
            className="btn btn-success">
              Learn more
            </button>
            <button 
              className="btn btn-outline-dark"
              onClick={ () => actions.toggleFavourite(subject.name)}
              >+/-
            </button>
          </span>
      </div>
    </div>
  );
};
