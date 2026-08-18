import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="not-found">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you're looking for doesn't exist.</p>

      <Link className="button button-primary" to="/">
        Go Home
      </Link>
    </section>
  );
}

export default NotFound;
