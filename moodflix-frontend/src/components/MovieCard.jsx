const MovieCard = ({ movie }) => {
    return (
      <div className="bg-gray-800 p-4 rounded-lg shadow-md">
        <img src={movie.posterUrl} alt={movie.title} className="w-full h-60 object-cover rounded-md" />
        <h3 className="text-lg font-bold mt-2">{movie.title}</h3>
        <p className="text-sm text-gray-400">{movie.genre}</p>
      </div>
    );
  };
  
  export default MovieCard;
  