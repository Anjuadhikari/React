import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
import { useFavourites } from "./FavouritesContext";

const MovieData = [
  { id: 1, title: "Inception", year: 2010 },
  { id: 2, title: "The Dark Knight", year: 2008 },
  { id: 3, title: "Interstellar", year: 2014 },
];

export default function Favourites() {
  const { favourites, toggleFavourite } = useFavourites();

  const favouriteMovies = MovieData.filter((movie) =>
    favourites.includes(movie.id)
  );

  return (
    <div style={{ maxWidth: 400, margin: "auto" }}>
      <Link to="/" style={{ display: "block", marginBottom: 20 }}>
        ← Back to Movies
      </Link>

      {favouriteMovies.length === 0 && <p>No favourites yet.</p>}

      {favouriteMovies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          isFavorite={true}
          onToggleFavourite={toggleFavourite}
        />
      ))}
    </div>
  );
}
