import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = () => {
  const { store, actions } = useContext(Context);
  const { id } = useParams();
  const [singleCharacter, setSingleCharacter] = useState([]);

  const fetchCharacter = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setSingleCharacter(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCharacter(`https://rickandmortyapi.com/api/character/${id}`);
  }, [id]);

  return (
    <div className="container">
      <div className="row">
        {singleCharacter ? (
          <>
            <div className="col-md-6 d-flex justify-content-end"> {/* Justify the image to the right */}
              <h1 className="display me-3">{singleCharacter.name}</h1>
              <img src={singleCharacter.image} alt={singleCharacter.name} />
            </div>
            <div className="col-md-6"> {/* Second column for key-value pairs */}
              <div className="mt-3">
                {Object.keys(singleCharacter).map((key) => {
                  const value = singleCharacter[key];
                  if (typeof value === "string" && value.trim() !== "") {
                    return (
                      <React.Fragment key={key}>
                        <span className="characterKey">{key}:</span>
                        <span className="ms-1 characterValue">{value}</span>
                        <br />
                      </React.Fragment>
                    );
                  } else {
                    return null;
                  }
                })}
              </div>
            </div>
          </>
        ) : (
          <p>Loading character...</p>
        )}
      </div>
    </div>
  );
};
