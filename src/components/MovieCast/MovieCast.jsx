// import css from "./MovieCast.module.css";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCredits } from "../../js/themoviedb-api";
import Loader from "../Loader/Loader";

function MovieCast() {
  const [loader, setLoader] = useState(false);
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  const { movieId } = useParams("movieId");

  useEffect(() => {
    const fetchMovie = async () => {
      setLoader(true);

      try {
        const data = await getMovieCredits(movieId);
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
    <>
      {loader && <Loader />}
      {movie && (
        <ul>
          {movie.cast.map(({ id, profile_path, name }) => (
            <li key={id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                alt="actor's photo"
                width="100"
                height="200"
              />
              <p>{name}</p>
            </li>
          ))}
        </ul>
      )}
      {error && <p>Error</p>}
    </>
  );
}

export default MovieCast;
