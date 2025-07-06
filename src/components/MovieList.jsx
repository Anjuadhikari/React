import React, { useState } from "react";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
import { useFavourites } from "./FavouritesContext";

const MovieData = [
  { id: 1, title: "Inception", year: 2010 },
  { id: 2, title: "The Dark Knight", year: 2008 },
  { id: 3, title: "Interstellar", year: 2014 },
];

export default function MovieList() {
  const [searchItem, setSearchItem] = useState("");
  const { favourites, toggleFavourite } = useFavourites();

  const filteredMovies = MovieData.filter((movie) =>
    movie.title.toLowerCase().includes(searchItem.toLowerCase().trim())
  );

  return (
    <div style={{ maxWidth: 400, margin: "auto" }}>
      <input
        placeholder="Search..."
        value={searchItem}
        onChange={(e) => setSearchItem(e.target.value)}
        style={{ width: "100%", padding: 8, marginBottom: 12 }}
      />
      <Link to="/favourites" style={{ display: "block", marginBottom: 20 }}>
        View Favourites ({favourites.length})
      </Link>

      {filteredMovies.length === 0 && <p>No movies found</p>}

      {filteredMovies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          isFavorite={favourites.includes(movie.id)}
          onToggleFavourite={toggleFavourite}
        />
      ))}
    </div>
  );
}
