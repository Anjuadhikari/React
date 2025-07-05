import React from "react";

// Export the real component
export default function MovieCard({ movie, isFavorite, onToggleFavourite }) {
  return (
    <div className={`flex justify-between items-center bg-gray-300 p-4 rounded-lg shadow-md mb-4 border ${isFavorite ? "border-red-400" : "border-gray-400"}`}>
      <div>
        <h3 className="text-xl font-semibold text-gray-800">{movie.title}</h3>
        <p className="text-sm text-gray-600">{movie.year}</p>
      </div>

      <button
        onClick={() => onToggleFavourite(movie.id)}
        className="text-2xl transition-transform duration-200 hover:scale-110"
      >
        {isFavorite ? "❤️" : "🤍"}
      </button>
    </div>
  );
}
