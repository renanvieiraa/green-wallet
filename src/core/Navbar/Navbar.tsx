import { routes } from "constans";
import logo from "logo.svg";
import { Link } from "react-router-dom";
import "./Navbar.scss";

export default function Navbar() {
  return (
    <nav>
      <img src={logo} alt='logo' />
      <ul>
        {routes.map((route, index) => (
          <li key={index}>
            <Link key={index} to={`${route.path}`}>
              {route.routeName}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
