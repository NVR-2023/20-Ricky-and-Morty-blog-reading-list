const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      characters: [],
      locations: [],
      episodes: [],
      favourites: [],
    },
    actions: {
      // Simple fetch to build upon
      fetchData: async (url) => {
        try {
          const response = await fetch(url);
          const data = await response.json();
          return data.results;
        } catch (error) {
          console.error("Data failed to load:", error);
        }
      },

      // Initializes arrays
      GetMoreDataInArray: async (array, url) => {
        try {
          const data = await getActions().fetchData(url);
          setStore({ [array]: [...getStore()[array], ...data] });
        } catch (error) {
          console.error("Data failed to download:", error);
        }
      },

      // Function to initalzie all arrays
      initializeAll: async () => {
        await getActions().GetMoreDataInArray(
          "characters",
          "https://rickandmortyapi.com/api/character"
        );
        await getActions().GetMoreDataInArray(
          "locations",
          "https://rickandmortyapi.com/api/location"
        );
        await getActions().GetMoreDataInArray(
          "episodes",
          "https://rickandmortyapi.com/api/episode"
        );
      },

      toggleFavourite: (string) => {
        const favourites = getStore().favourites;
        if (favourites.includes(string)) {
          const filteredFavourites = favourites.filter((element) => element !== string);
          setStore({ favourites: filteredFavourites });
        } else {
          setStore({ favourites: [...favourites, string] });
        }
      },
    },
  };
};

export default getState;
