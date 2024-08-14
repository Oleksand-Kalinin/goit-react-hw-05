import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={"<MoviesPage />"} />
        <Route path="/movies/:movieId" element={"<MovieDetailsPage />"}>
          <Route path="cast" element={"<MovieCast />"} />
          <Route path="reviews" element={"<MovieReviews />"} />
        </Route>
        <Route path="*" element={"<NotFoundPage />"} />
      </Routes>
    </>
  );
}

export default App;
