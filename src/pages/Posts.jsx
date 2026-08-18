import { useMemo, useState } from "react";
import useFetch from "../hooks/useFetch";
import useLocalStorage from "../hooks/useLocalStorage";
import PostList from "../components/PostList";
import LoadingSpinner from "../components/shared/LoadingSpinner";
import ErrorMessage from "../components/shared/ErrorMessage";

function Posts() {
  const {
    data: apiPosts,
    loading,
    error,
  } = useFetch("https://jsonplaceholder.typicode.com/posts");

  const [createdPosts] = useLocalStorage("communityhub-posts", []);
  const [search, setSearch] = useState("");

  const posts = useMemo(() => {
    return [...createdPosts, ...(apiPosts || [])];
  }, [createdPosts, apiPosts]);

  const filteredPosts = posts.filter((post) => {
    const text = `${post.title} ${post.body}`.toLowerCase();

    return text.includes(search.toLowerCase());
  });

  return (
    <section>
      <div className="page-heading">
        <p className="eyebrow">COMMUNITY</p>
        <h1>All Posts</h1>
        <p>Explore ideas and conversations from the CommunityHub.</p>
      </div>

      <div className="search-box">
        <label htmlFor="search">Search posts</label>

        <input
          id="search"
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search by title or content..."
        />
      </div>

      {loading && <LoadingSpinner text="Loading posts..." />}

      {error && <ErrorMessage message={error} />}

      {!loading && !error && <PostList posts={filteredPosts} />}
    </section>
  );
}

export default Posts;
