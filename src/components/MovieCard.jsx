export default function MovieCard({ movie, isFavorite, onToggleFavourite }) {
  return (
    <div style={{ border: "1px solid black", padding: 10, marginBottom: 10 }}>
      <h2>{movie.title} ({movie.year})</h2>
      <button onClick={() => onToggleFavourite(movie.id)}>
        {isFavorite ? "❤️ Remove Favorite" : "🤍 Add Favorite"}
      </button>
    </div>
  );
}
