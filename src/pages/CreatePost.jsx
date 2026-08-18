import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";
import Button from "../components/Button";
import Input from "../components/shared/Input";
import Card from "../components/Card";

function CreatePost() {
  const navigate = useNavigate();

  const [createdPosts, setCreatedPosts] = useLocalStorage(
    "communityhub-posts",
    [],
  );

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title.trim() || !body.trim()) {
      return;
    }

    const newPost = {
      id: `local-${Date.now()}`,
      title: title.trim(),
      body: body.trim(),
      userId: "You",
    };

    setCreatedPosts([newPost, ...createdPosts]);

    setTitle("");
    setBody("");

    navigate("/posts");
  };

  return (
    <section>
      <div className="page-heading">
        <p className="eyebrow">COMMUNITY</p>
        <h1>Create a Post</h1>
        <p>Share something useful with the CommunityHub community.</p>
      </div>

      <Card>
        <form onSubmit={handleSubmit} className="post-form">
          <Input
            label="Post title"
            name="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Enter your post title"
            required
          />

          <div className="form-group">
            <label htmlFor="body">Post content</label>

            <textarea
              id="body"
              name="body"
              value={body}
              onChange={(event) => setBody(event.target.value)}
              placeholder="Write your post..."
              rows="8"
              required
            />
          </div>

          <Button type="submit">
            Publish Post
          </Button>
        </form>
      </Card>
    </section>
  );
}

export default CreatePost;
