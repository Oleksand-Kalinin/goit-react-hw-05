import { Link, Outlet } from "react-router-dom";
import css from "./MovieItem.module.css";

function MovieItem({ movie }) {
  return (
    <div>
      <Link className={css.linkGoBack}>Go back</Link>

      <div className={css.wrapperMovie}>
        <div className={css.moviePoster}>
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : "https://upload.wikimedia.org/wikipedia/commons/c/c2/No_image_poster.png"
            }
            alt="poster"
            width="300"
            height="450"
          />
        </div>
        <div className={css.movieInfo}>
          <div className={css.movieTitle}>
            {movie.title} ({movie.release_date.slice(0, 4)})
          </div>
          <div className={css.movieDescription}>
            <h3 className={css.movieTitleDescription}>Overview</h3>
            <p>{movie.overview}</p>
          </div>
          <div className={css.movieDetails}>
            <div className={css.wrapperGenres}>
              <p>Genres:</p>
              <ul className={css.listGenres}>
                {movie.genres.map((el) => (
                  <li key={el.id}>{el.name}</li>
                ))}
              </ul>
            </div>
            <p>Release date: {movie.release_date}</p>
            <p>User Score: {movie.vote_average}</p>
          </div>
        </div>
      </div>

      <div className={css.otherInfoMovie}>
        <Link className={css.linkOtherInfoMovie} to="cast">
          Cast
        </Link>
        <Link className={css.linkOtherInfoMovie} to="reviews">
          Reviews
        </Link>
      </div>
      <Outlet />
    </div>
  );
}

export default MovieItem;
