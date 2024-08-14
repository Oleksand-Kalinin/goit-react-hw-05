import { useEffect, useState } from "react";
import MovieList from "../components/MovieList/MovieList";
import { getTopMovies } from "../js/themoviedb-api";
import Loader from "../components/Loader/Loader";

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [loader, setloader] = useState(false);
  const [error, setError] = useState(null);
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      setloader(true);
      try {
        const { results } = await getTopMovies();
        if (!results.length) return setIsEmpty(true);
        setMovies(results);
      } catch (err) {
        setError(err);
      } finally {
        setloader(false);
      }
    };

    fetchMovies();
  }, []);
  return (
    <>
      {loader && <Loader />}
      {!isEmpty && <MovieList movies={movies} />}
      {error && <p>Error</p>}
    </>
  );
}

export default HomePage;
