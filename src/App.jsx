import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={"<MoviesPage />"} />
        <Route path="*" element={"<NotFoundPage />"} />
      </Routes>
    </>
  );
}

export default App;
