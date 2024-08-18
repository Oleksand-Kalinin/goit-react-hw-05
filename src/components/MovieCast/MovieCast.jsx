import css from "./MovieCast.module.css";

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
        <ul className={css.listCast}>
          {movie.cast.map(({ id, profile_path, name }) => (
            <li key={id} className={css.itemCast}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500${profile_path}`
                    : "https://emedia1.nhs.wales/HEIW2/cache/file/F4C33EF0-69EE-4445-94018B01ADCF6FD4_medium.png"
                }
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
