import { Link, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import LoadingSpinner from "../components/shared/LoadingSpinner";
import ErrorMessage from "../components/shared/ErrorMessage";
import Card from "../components/shared/Card";

function PostDetail() {
  const { postId } = useParams();

  const {
    data: post,
    loading,
    error,
  } = useFetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);

  if (loading) {
    return <LoadingSpinner text="Loading post..." />;
  }

  if (error || !post) {
    return (
      <section>
        <ErrorMessage message={error || "Post not found"} />

        <Link className="button button-secondary" to="/posts">
          Back to Posts
        </Link>
      </section>
    );
  }

  return (
    <section>
      <Link className="back-link" to="/posts">
        ← Back to Posts
      </Link>

      <Card>
        <article className="detail-post">
          <p className="post-number">Post #{post.id}</p>

          <h1>{post.title}</h1>

          <p>{post.body}</p>

          <p className="author">Posted by User {post.userId}</p>
        </article>
      </Card>
    </section>
  );
}

export default PostDetail;
