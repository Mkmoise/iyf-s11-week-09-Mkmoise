function UserGreeting({ user }) {
  if (!user) {
    return <p>Please log in.</p>;
  }

  return <p>Welcome, {user.name}!</p>;
}

export default UserGreeting;
