import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { getMovie } from "../js/themoviedb-api";
import Loader from "../components/Loader/Loader";

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

  // const { poster_path, title, release_date, genres, vote_average, overview } = movie;

  return (
    <section>
      <div className="container">
        {loader && <Loader />}

        {movie && (
          <div>
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : `src/img/no-image-poster.png`
              }
              alt="poster"
              width="400"
              height="500"
            />
            <h2>
              {movie.title} ({movie.release_date.slice(0, 4)})
            </h2>

            <p>Genres: </p>
            <ul>
              {movie.genres.map((el) => (
                <li key={el.id}>{el.name}</li>
              ))}
            </ul>

            <p>User Score: {movie.vote_average}</p>

            <div>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
            </div>

            <Link to="cast">Cast</Link>
            <Link to="reviews">Reviews</Link>

            <Outlet />
          </div>
        )}

        {error && <p>Error</p>}
      </div>
    </section>
  );
}

export default MovieDetailsPage;
