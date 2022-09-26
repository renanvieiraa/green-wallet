import { Link } from "react-router-dom";
import { routes } from "routes";

export default function Navbar() {
  return (
    <nav>
      <ul>
        {routes.map((route, index) => (
          <li key={index}>
            <Link key={index} to={`${route.path}`}>
              {route.routerName}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
