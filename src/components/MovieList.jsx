import React, { useState } from "react";
import MovieCard from "./MovieCard";

export default function MovieList() {
  const MovieData = [
    { id: 1, title: "Inception", year: 2010 },
    { id: 2, title: "The Dark Knight", year: 2008 },
    { id: 3, title: "Interstellar", year: 2014 },
    { id: 4, title: "Tenet", year: 2007 },
  ];

  const [favourites, setFavourites] = useState([]);

  const onToggleFavourite = (id) => {
    setFavourites((prev) =>
      prev.includes(id)
        ? prev.filter((fid) => fid !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">🎬 Movie List</h1>

      {MovieData.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          isFavorite={favourites.includes(movie.id)}
          onToggleFavourite={onToggleFavourite}
        />
      ))}

      {favourites.length === 0 && (
        <p className="text-sm text-gray-500 text-center mt-6">
          No favorites yet. Click 🤍 to mark one!
        </p>
      )}
    </div>
  );
}
