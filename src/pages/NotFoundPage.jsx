import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <section>
      <div className="container pageNotFound">
        <p>Page not found</p>
        <Link className="linkHome" to="/">
          Home
        </Link>
      </div>
    </section>
  );
}

export default NotFoundPage;
