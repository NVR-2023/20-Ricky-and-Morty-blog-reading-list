import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/card";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="container-fluid">
      <div className="row">
        {store.characters &&
          store.characters.map((element) => {
            return (
              <div
                className="col-sm-6 col-md-4 col-lg-3 col-xl-3 py-3"
                key={element.id}
                id={element.id}>
                <Card subject={element} />
              </div>
            );
          })}
      </div>
      <div>
        <button className="btn btn-warning">Load more</button>
      </div>
    </div>
  );
};
