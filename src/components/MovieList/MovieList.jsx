import css from "./MovieList.module.css";

import { Link, useLocation } from "react-router-dom";

function MovieList({ movies }) {
  const location = useLocation();

  return (
    <ul className={css.listMovies}>
      {movies.map(({ id, title, poster_path }) => (
        <li key={id} className={css.itemMovie}>
          <Link
            className={css.linkMovie}
            to={`/movies/${id}`}
            state={{ from: location }}
          >
            <img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500${poster_path}`
                  : "https://upload.wikimedia.org/wikipedia/commons/c/c2/No_image_poster.png"
              }
              alt="poster"
              width="200"
              height="300"
            />
            <p className={css.titleMovie}>{title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default MovieList;
