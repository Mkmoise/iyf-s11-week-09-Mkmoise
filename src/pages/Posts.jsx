import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }

        return response.json();
      })
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading posts...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Community Posts</h1>

      {posts.map((post) => (
        <PostCard
          key={post.id}
          title={post.title}
          excerpt={post.body}
          author={`User ${post.userId}`}
          date={`Post ${post.id}`}
        />
      ))}
    </div>
  );
}

export default Posts;