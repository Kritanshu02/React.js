import { useEffect, useState } from 'react';
import Search from './components/Search';
import MovieCard from './components/MovieCard';

function App() {
  const API_KEY = 'http://www.omdbapi.com/?apikey=2cc9689b&s=';
  const [searchTerm, setSearchTerm] = useState('Avengers');
  const [errorMessage, setErrorMessage] = useState('');
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMovies = async (text) => {
    if (!text) return;

    setIsLoading(true);
    setErrorMessage('');

    try {
      const response = await fetch(`${API_KEY}${text}`);
      if (!response.ok) {
        throw new Error('Failed to fetch movies');
      }

      const data = await response.json();

      if (data.Response === 'False') {
        setErrorMessage(data.Error || 'No movies found.');
        setMovieList([]);
        return;
      }

      setMovieList(data.Search || []);
    } catch (error) {
      console.error(`Error fetching movies: ${error}`);
      setErrorMessage('Error fetching movies. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies(searchTerm);
  }, []);

  const handleSearch = () => {
    fetchMovies(searchTerm);
  };

  return (
    <div className="">
      <header className="bg-cyan-800 py-10">
        <div className="text-center text-black">
          <h1 className="text-6xl font-bold">Movie Finder</h1>
          <p className="mt-2 text-2xl">Find your favorite movies quickly!</p>
        </div>
        <Search
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          onSearch={handleSearch}
        />
      </header>

      <main className="container mx-auto p-6">
        <h2 className="text-2xl font-semibold mb-4">Movies Related {searchTerm}</h2>
        {isLoading ? (
          <div className="text-center text-gray-600">Loading...</div>
        ) : errorMessage ? (
          <div className="text-center text-2xl text-red-600">{errorMessage}</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {movieList.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;







