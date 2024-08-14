// import css from "./MovieList.module.css";

import { Link } from "react-router-dom";

// import { NavLink } from "react-router-dom";

function MovieList({ movies }) {
  return (
    // <>{console.log(movies)}</>

    <ul>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <Link>{title}</Link>
        </li>
      ))}
    </ul>
  );
}

export default MovieList;
