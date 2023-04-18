import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = () => {
  const { store, actions } = useContext(Context);
  const { id } = useParams();
  const [singleCharacter, setSingleCharacter] = useState([]); // use state to store the fetched character data

  const fetchCharacter = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setSingleCharacter(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchCharacter(`https://rickandmortyapi.com/api/character/${id}`);
  }, [id]);

  return (
    <div>
      {singleCharacter ? (
        <div>
          <h1 className="display">{singleCharacter.name}</h1>
          <img src={singleCharacter.image} alt={singleCharacter.name} />
          {
            Object.keys(singleCharacter).map(key => {
              if (typeof singleCharacter[key] === "string") {
                return <p key={key}>{singleCharacter[key]}</p>;
              } else {
                return null;
              }
            })
          }
        </div>
      ) : (
        <p>Loading character...</p>
      )}
    </div>
  );
};
