// import css from "./MovieReviews.module.css";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../js/themoviedb-api";
import Loader from "../Loader/Loader";

function MovieReviews() {
  const [loader, setLoader] = useState(false);
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  const { movieId } = useParams("movieId");

  useEffect(() => {
    const fetchMovie = async () => {
      setLoader(true);

      try {
        const { results } = await getMovieReviews(movieId);
        setMovie(results);
      } catch (err) {
        setError(err);
      } finally {
        setLoader(false);
      }
    };

    fetchMovie();
  }, [movieId]);

  return (
    <>
      {loader && <Loader />}
      {movie &&
        movie.map(({ id, author, content }) => (
          <li key={id}>
            <p>{author}</p>
            <p>{content}</p>
          </li>
        ))}
      {error && <p>Error</p>}
    </>
  );
}

export default MovieReviews;
