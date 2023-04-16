const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      characters: [],
	  favourites: [],
    },
    actions: {
      getCharacters: async () => {
        try {
          const response = await fetch("https://rickandmortyapi.com/api/character");
          const data = await response.json();
          setStore({ characters: data.results });
          console.log(getStore().characters);
        } catch (error) {
          console.error(`Data failed to load: ${error}`);
        }
      },
      addFavourite: (index) => {
        setStore({ favourites: [...getStore().favourites, index] });
		getStore().characters[index] 
	}
    }
  };
};

export default getState;
