import { NavLink, Outlet } from 'react-router-dom';

function NavigationLink({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? 'navbar__link navbar__link--active' : 'navbar__link'
      }
    >
      {children}
    </NavLink>
  );
}

export default function Layout() {
  return (
    <div className="app">
      <header className="navbar">
        <NavLink to="/" className="navbar__brand">
          Hunter May
        </NavLink>
        <nav className="navbar__links">
          <NavigationLink to="/about">About</NavigationLink>
          <NavigationLink to="/case-studies">Case Studies</NavigationLink>
          <NavigationLink to="/contact">Contact</NavigationLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="footer">
        <span>© 2024 Hunter May</span>
        <span>Crafted with curiosity</span>
      </footer>
    </div>
  );
}
