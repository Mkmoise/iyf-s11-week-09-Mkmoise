import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import PostList from "../components/Post/PostList";
import LoadingSpinner from "../components/shared/LoadingSpinner";
import ErrorMessage from "../components/shared/ErrorMessage";

function Home() {
  const {
    data: posts,
    loading,
    error,
  } = useFetch("https://jsonplaceholder.typicode.com/posts?_limit=3");

  return (
    <section>
      <div className="hero-section">
        <p className="eyebrow">WELCOME TO COMMUNITYHUB</p>

        <h1>Share ideas. Learn together. Build community.</h1>

        <p>
          CommunityHub is a place where people share knowledge, ideas, and
          experiences.
        </p>

        <Link className="button button-primary" to="/posts">
          Explore Posts
        </Link>
      </div>

      <section className="section">
        <h2>Recent Posts</h2>

        {loading && <LoadingSpinner text="Loading recent posts..." />}

        {error && <ErrorMessage message={error} />}

        {!loading && !error && <PostList posts={posts} />}
      </section>
    </section>
  );
}

export default Home;
