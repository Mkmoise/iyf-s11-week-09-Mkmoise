import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PostDetail() {
  const { postId } = useParams();

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Post not found");
        }

        return response.json();
      })
      .then((data) => {
        setPost(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [postId]);

  if (loading) {
    return <p>Loading post...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <p>Posted by User {post.userId}</p>
    </article>
  );
}

export default PostDetail;