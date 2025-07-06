// components/Favourites.jsx
import React from 'react';
import MovieCard from './MovieCard';
import { useFavourites } from './FavouritesContext';
import { MovieData } from './MovieDataList';

export default function Favourites({ onBackToMovies }) {
  // Get favorites data from context
  const { favourites, toggleFavourite } = useFavourites();

  // Filter MovieData to show only favorite movies
  const favouriteMovies = MovieData.filter((movie) =>
    favourites.includes(movie.id)
  );

  return (
    <div className="page-container">
      {/* Header Section */}
      <header className="page-header">
        <div className="header-content">
          <h1 className="page-title">
            <span className="title-icon">❤️</span>
            My Favourite Movies
          </h1>
          <p className="page-subtitle">
            Your personally curated movie collection
          </p>
        </div>
      </header>
      
      {/* Navigation Section */}
      <div className="controls-section">
        {/* Back Button */}
        <button 
          onClick={onBackToMovies}
          className="back-btn"
        >
          <span className="nav-icon">←</span>
          Back to All Movies
        </button>
        
        {/* Favorites Counter */}
        {favouriteMovies.length > 0 && (
          <div className="favorites-counter">
            <span className="counter-icon">🎯</span>
            {favouriteMovies.length} favorite movie{favouriteMovies.length !== 1 ? 's' : ''}
          </div>
        )}
      </div>

      {/* Favorites Content */}
      <div className="movies-container">
        {favouriteMovies.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">💔</div>
            <h3>No favourites yet!</h3>
            <p>Start building your movie collection by adding favorites from the main list.</p>
            <button 
              onClick={onBackToMovies}
              className="cta-btn"
            >
              Explore Movies
            </button>
          </div>
        ) : (
          <div className="movies-grid">
            {favouriteMovies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                isFavorite={true}
                onToggleFavourite={toggleFavourite}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}