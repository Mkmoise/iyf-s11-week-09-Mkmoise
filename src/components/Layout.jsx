import { NavLink, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="layout">
      <header className="site-header">
        <div className="header-inner">
          <NavLink to="/" className="logo">
            CommunityHub
          </NavLink>

          <nav aria-label="Main navigation">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/posts"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Posts
            </NavLink>

            <NavLink
              to="/create"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Create Post
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              About
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="main-content">
        <Outlet />
      </main>

      <footer className="site-footer">
        <p>&copy; 2026 CommunityHub. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Layout;
