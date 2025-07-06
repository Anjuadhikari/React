import React, { useState } from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";
import { useFavourites } from "./FavouritesContext";

const MovieData = [
  { id: 1, title: "Inception", year: 2010 },
  { id: 2, title: "The Dark Knight", year: 2008 },
  { id: 3, title: "Interstellar", year: 2014 },
  { id: 4, title: "Pulp Fiction", year: 1994 },
  { id: 5, title: "The Shawshank Redemption", year: 1994 },
  { id: 6, title: "The Godfather", year: 1972 },
  { id: 7, title: "Forrest Gump", year: 1994 },
  { id: 8, title: "Fight Club", year: 1999 },
  { id: 9, title: "The Matrix", year: 1999 },
  { id: 10, title: "Gladiator", year: 2000 }
];

export default function MovieList() {
  const [searchItem, setSearchItem] = useState("");
  const { favourites, toggleFavourite } = useFavourites();

  const filteredMovies = MovieData.filter((movie) =>
    movie.title.toLowerCase().includes(searchItem.toLowerCase().trim())
  );

  return (
    <div>
      <input
        placeholder="Search movies"
        value={searchItem}
        onChange={(e) => setSearchItem(e.target.value)}
      />

      <div>
        <Link to="/favourites">Go to Favourites ({favourites.length})</Link>
      </div>

      {filteredMovies.length > 0 ? (
        filteredMovies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            isFavorite={favourites.includes(movie.id)}
            onToggleFavourite={toggleFavourite}
          />
        ))
      ) : (
        <p>No movies found</p>
      )}
    </div>
  );
}
