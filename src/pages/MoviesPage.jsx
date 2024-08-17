import { useEffect, useState } from "react";
import { getMovies } from "../js/themoviedb-api";
import Loader from "../components/Loader/Loader";
import MovieList from "../components/MovieList/MovieList";
import SearchBar from "../components/SearchBar/SearchBar";
import { useSearchParams } from "react-router-dom";

function MoviesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);
  const [isEmpty, setIsEmpty] = useState(false);

  const query = searchParams.get("query");

  useEffect(() => {
    const fetchMovies = async () => {
      if (!query) return;
      setLoader(true);

      try {
        const { results } = await getMovies(query);
        if (!results.length) return setIsEmpty(true);
        setMovies(results);
      } catch (err) {
        setError(err);
      } finally {
        setLoader(false);
      }
    };

    fetchMovies();
  }, [query]);

  const handleSubmitSearchBar = (querySearchBar) => {
    setSearchParams({ query: querySearchBar });
    setIsEmpty(false);
    setError(null);
    setMovies([]);
  };

  return (
    <section className="sectionMovies">
      <div className="container">
        <SearchBar onSubmit={handleSubmitSearchBar} />
        {!isEmpty && <MovieList movies={movies} />}
        {loader && <Loader />}
        {error && <p>Error</p>}
      </div>
    </section>
  );
}

export default MoviesPage;
