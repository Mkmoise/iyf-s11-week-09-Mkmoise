function PostCard({ title, excerpt, author, date }) {
  return (
    <article>
      <h3>{title}</h3>
      <p>{excerpt}</p>
      <p>By {author}</p>
      <span>{date}</span>
    </article>
  );
}

export default PostCard;
