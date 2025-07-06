import React, { createContext, useContext, useState } from "react";

const FavouritesContext = createContext();

export function useFavourites() {
  return useContext(FavouritesContext);
}

export function FavouritesProvider({ children }) {
  const [favourites, setFavourites] = useState([]);

  const toggleFavourite = (id) => {
    setFavourites((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
    );
  };

  return (
    <FavouritesContext.Provider value={{ favourites, toggleFavourite }}>
      {children}
    </FavouritesContext.Provider>
  );
}
