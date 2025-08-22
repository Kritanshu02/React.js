function MovieCard({ movie }) {
  const { Title, Year, Poster, Type } = movie;

  return (
    <div className="movie-card border rounded shadow p-4">
      <img
        src={Poster !== "N/A" ? Poster : "no-image.jpg"}
        alt={Title}
        className="w-full h-auto object-cover rounded"
      />
      <div className="mt-4">
        <h3 className="text-lg font-bold">{Title}</h3>
        <p className="text-sm text-gray-600">{Year}</p>
        <p className="text-sm text-gray-500 capitalize">{Type}</p>
      </div>
    </div>
  );
}

export default MovieCard;








