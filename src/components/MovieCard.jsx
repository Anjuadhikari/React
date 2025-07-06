export default function MovieCard({ movie, isFavorite, onToggleFavourite }) {
  return (
    <div style={{ border: "1px solid black", margin: 10, padding: 10 }}>
      <h3>{movie.title} ({movie.year})</h3>
      <button onClick={() => onToggleFavourite(movie.id)}>
        {isFavorite ? "❤️ Remove" : "🤍 Add"}
      </button>
    </div>
  );
}
