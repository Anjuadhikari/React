// components/MovieList.jsx
import React, { useState } from 'react';
import MovieCard from './MovieCard';
import { useFavourites } from './FavouritesContext';
import { MovieData } from './MovieDataList.jsx';

export default function MovieList({ onViewFavourites }) {
  // Local state for search functionality
  const [searchItem, setSearchItem] = useState("");
  
  // Get favorites data from context
  const { favourites, toggleFavourite } = useFavourites();

  // Filter movies based on search input
  const filteredMovies = MovieData.filter((movie) =>
    movie.title.toLowerCase().includes(searchItem.toLowerCase().trim()) ||
    movie.genre.toLowerCase().includes(searchItem.toLowerCase().trim()) ||
    movie.director.toLowerCase().includes(searchItem.toLowerCase().trim())
  );

  return (
    <div className="page-container">
      {/* Header Section */}
      <header className="page-header">
        <div className="header-content">
          <h1 className="page-title">
            <span className="title-icon">🎬</span>
            Movie Paradise
          </h1>
          <p className="page-subtitle">
            Discover amazing movies and build your personal collection
          </p>
        </div>
      </header>
      
      {/* Search and Navigation Section */}
      <div className="controls-section">
        {/* Search Input */}
        <div className="search-container">
          <input
            type="text"
            placeholder="Search by title, genre, or director..."
            value={searchItem}
            onChange={(e) => setSearchItem(e.target.value)}
            className="search-input"
          />
          <span className="search-icon">🔍</span>
        </div>
        
        {/* Favorites Button */}
        <button 
          onClick={onViewFavourites}
          className="favorites-nav-btn"
        >
          <span className="nav-icon">❤️</span>
          My Favourites ({favourites.length})
        </button>
      </div>

      {/* Search Results Info */}
      {searchItem && (
        <div className="search-results-info">
          <p>{filteredMovies.length} movie(s) found for "{searchItem}"</p>
        </div>
      )}

      {/* Movies Grid */}
      <div className="movies-container">
        {filteredMovies.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">🎭</div>
            <h3>No movies found</h3>
            <p>
              {searchItem 
                ? "Try adjusting your search terms" 
                : "No movies available at the moment"
              }
            </p>
          </div>
        ) : (
          <div className="movies-grid">
            {filteredMovies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                isFavorite={favourites.includes(movie.id)}
                onToggleFavourite={toggleFavourite}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}