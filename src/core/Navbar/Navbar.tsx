import styled from "@emotion/styled";
import { ChevronLeftOutlined, ChevronRightOutlined } from "@mui/icons-material";
import { routes } from "constans";
import logo from "logo.svg";
import React from "react";
import { connect, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { changeMenuState } from "store/reducers/index";
import "./Navbar.scss";

const DebuggValue = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  display: block !important;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
`;

type Props = {
  menuToggle: {
    shrink: boolean;
  };
};

const NavBar = function Navbar({ menuToggle }: Props) {
  // const menuToggle = useSelector((state: any) => state.menuToggle);

  // const [menuToggle, setMenuToggle] = useState(true);

  const dispatch = useDispatch();

  function addClass(className: string, condition: boolean) {
    return condition ? className : "";
  }

  return (
    <nav className={addClass("shrink", !!menuToggle.shrink)}>
      <DebuggValue>{menuToggle.shrink ? "true" : "false"}</DebuggValue>
      <section className='header'>
        <img src={logo} alt='logo' />
      </section>

      <ul>
        {routes.map((route, index) => (
          <li className='menu-item' key={index}>
            <NavLink key={index} to={`${route.path}`} end={route.path === "/"}>
              {route.icon ? React.cloneElement(route.icon, { className: `menu-icon` }) : null}
              <span className={""}>{route.routeName}</span>
            </NavLink>
          </li>
        ))}
      </ul>

      <div>
        <footer>
          <a className='chevron' href='#' onClick={() => dispatch(changeMenuState())}>
            {menuToggle.shrink ? <ChevronRightOutlined /> : <ChevronLeftOutlined />}
          </a>
        </footer>
      </div>
    </nav>
  );
};

function mapStateToProps(state: any) {
  return {
    menuToggle: state.menuToggle,
    todos: state.todos,
  };
}
export default connect(mapStateToProps)(NavBar);
