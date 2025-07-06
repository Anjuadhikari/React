// components/MovieCard.jsx
import React from 'react';

export default function MovieCard({ movie, isFavorite, onToggleFavourite }) {
  return (
    <div className="movie-card">
      {/* Movie Poster Area */}
      <div className="movie-poster">
        <div className="movie-rating">
          ⭐ {movie.rating}
        </div>
      </div>
      
      {/* Movie Information */}
      <div className="movie-info">
        <h3 className="movie-title">{movie.title}</h3>
        <p className="movie-year">{movie.year}</p>
        <p className="movie-genre">{movie.genre}</p>
        <p className="movie-director">Dir: {movie.director}</p>
      </div>

      {/* Favorite Button */}
      <button 
        className={`favorite-btn ${isFavorite ? 'favorite-btn-active' : ''}`}
        onClick={() => onToggleFavourite(movie.id)}
      >
        {isFavorite ? (
          <>
            <span className="heart-icon">❤️</span>
            Remove from Favorites
          </>
        ) : (
          <>
            <span className="heart-icon">🤍</span>
            Add to Favorites
          </>
        )}
      </button>
    </div>
  );
}