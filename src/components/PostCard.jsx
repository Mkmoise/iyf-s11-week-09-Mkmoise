import { Link } from "react-router-dom";
import Card from "../shared/Card";

function PostCard({ post }) {
  return (
    <Card>
      <article className="post-card">
        <p className="post-number">Post #{post.id}</p>

        <h2>{post.title}</h2>

        <p>{post.body.slice(0, 120)}...</p>

        <Link className="read-more" to={`/posts/${post.id}`}>
          Read More
        </Link>
      </article>
    </Card>
  );
}

export default PostCard;
