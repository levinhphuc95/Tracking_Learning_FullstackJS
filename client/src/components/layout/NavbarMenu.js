import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import learnItLogo from "../../assets/logo.svg";
import logoutIcon from "../../assets/logout.svg";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { logoutUserAction } from "../../redux/Actions/AuthAction";

const NavbarMenu = () => {
  const { user } = useSelector((state) => state.AuthReducer);
  const dispatch = useDispatch();
  console.log(user);

  const logout = () => dispatch(logoutUserAction());

  return (
    <Navbar expand="lg" bg="primary" variant="dark" className="shadow">
      <Navbar.Brand className="font-weight-bolder text-white">
        <img
          src={learnItLogo}
          alt="learnItLogo"
          width="32"
          height="32"
          className="mr-2"
        />
        JustOne
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link
            className="font-weight-bolder text-white"
            to="/dashboard"
            as={Link}
          >
            Dashboard
          </Nav.Link>
          <Nav.Link
            className="font-weight-bolder text-white"
            to="/about"
            as={Link}
          >
            About
          </Nav.Link>
        </Nav>

        <Nav>
          <Nav.Link className="font-weight-bolder text-white" disabled>
            Welcome {user.username}
          </Nav.Link>
          <Button
            variant="secondary"
            className="font-weight-bolder text-white"
            onClick={logout}
          >
            <img
              src={logoutIcon}
              alt="logoutIcon"
              width="32"
              height="32"
              className="mr-2"
            />
            Logout
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarMenu;
