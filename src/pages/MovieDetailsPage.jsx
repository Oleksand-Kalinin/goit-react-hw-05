import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovie } from "../js/themoviedb-api";
import Loader from "../components/Loader/Loader";
import MovieItem from "../components/MovieItem/MovieItem";

function MovieDetailsPage() {
  const [loader, setLoader] = useState(false);
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  const { movieId } = useParams("movieId");

  useEffect(() => {
    const fetchMovie = async () => {
      setLoader(true);

      try {
        const data = await getMovie(movieId);
        setMovie(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoader(false);
      }
    };

    fetchMovie();
  }, [movieId]);

  return (
    <section>
      <div className="container">
        {loader && <Loader />}

        {movie && <MovieItem movie={movie} />}

        {error && <p>Error</p>}
      </div>
    </section>
  );
}

export default MovieDetailsPage;
