import React, { useContext } from "react";
import {Context} from "../store/appContext";
import { useNavigate } from "react-router";

export const Card = ({subject}) => {
  const navigate = useNavigate();

  const { store , actions } = useContext(Context);
  
  return (
    <div className="card characterCard" style={{ width: "18rem" }} >
      <img src={subject.image} className="card-img-top" alt="..." />
      <div className="card-body cardBody">
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
              className="btn btn-outline-dark favouritesButton"
              onClick={ () => actions.toggleFavourite(subject.name)}
              >
                <span>
                + / -
                </span>
                <span className="ms-1">
                  <svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 -960 960 960" width="16">
                    <path d="m480-121-41-37q-106-97-175-167.5t-110-126Q113-507 96.5-552T80-643q0-90 60.5-150.5T290-854q57 0 105.5 27t84.5 78q42-54 89-79.5T670-854q89 0 149.5 60.5T880-643q0 46-16.5 91T806-451.5q-41 55.5-110 126T521-158l-41 37Z" style={{ fill: 'red' }} />
                  </svg>
                </span>
            </button>
          </span>
      </div>
    </div>
  );
};
