// components/FavouritesContext.jsx
import React, { createContext, useContext, useState } from "react";

// Create context for favorites functionality
const FavouritesContext = createContext();

// Custom hook to use the favorites context
export function useFavourites() {
  const context = useContext(FavouritesContext);
  if (!context) {
    throw new Error('useFavourites must be used within a FavouritesProvider');
  }
  return context;
}

// Provider component that wraps the app and provides favorites functionality
export function FavouritesProvider({ children }) {
  // State to store array of favorite movie IDs
  const [favourites, setFavourites] = useState([]);

  // Function to add/remove movies from favorites
  const toggleFavourite = (id) => {
    setFavourites((prevFavourites) => {
      // If movie is already in favorites, remove it
      if (prevFavourites.includes(id)) {
        return prevFavourites.filter((movieId) => movieId !== id);
      }
      // If movie is not in favorites, add it
      else {
        return [...prevFavourites, id];
      }
    });
  };

  // Provide the state and functions to child components
  return (
    <FavouritesContext.Provider value={{ favourites, toggleFavourite }}>
      {children}
    </FavouritesContext.Provider>
  );
}