import { useEffect, useState } from "react";

import MovieList from "../components/MovieList/MovieList";
import Loader from "../components/Loader/Loader";

import { getTopMovies } from "../js/themoviedb-api";

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoader(true);
      try {
        const { results } = await getTopMovies();
        if (!results.length) return setIsEmpty(true);
        setMovies(results);
      } catch (err) {
        setError(err);
      } finally {
        setLoader(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <section>
      <div className="container">
        {!isEmpty && <MovieList movies={movies} />}
        {loader && <Loader />}
        {error && <p>Error</p>}
      </div>
    </section>
  );
}

export default HomePage;
