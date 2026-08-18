function About() {
  return (
    <section>
      <div className="page-heading">
        <p className="eyebrow">ABOUT US</p>

        <h1>About CommunityHub</h1>

        <p>
          CommunityHub is a place where people share ideas, learn from one
          another, and build meaningful conversations.
        </p>
      </div>

      <div className="about-grid">
        <article className="info-card">
          <h2>Our Purpose</h2>
          <p>
            We make it easy for people to discover useful ideas and share their
            own experiences.
          </p>
        </article>

        <article className="info-card">
          <h2>Our Community</h2>
          <p>
            Everyone can contribute, learn, ask questions, and participate in
            discussions.
          </p>
        </article>

        <article className="info-card">
          <h2>Built with React</h2>
          <p>
            CommunityHub demonstrates React Router, API data fetching,
            custom hooks, reusable components, and responsive styling.
          </p>
        </article>
      </div>
    </section>
  );
}

export default About;
