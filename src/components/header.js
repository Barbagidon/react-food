import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="purple lighten-1">
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">
          Food shop
        </Link>
      </div>
    </nav>
  );
}

export default Header;
