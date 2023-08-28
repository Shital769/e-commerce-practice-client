import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";

export const Header = () => {
  // const navigate = useNavigate();
  return (
    <Navbar bg="warning" expand="md">
      <Container>
        <Link to="/" className="navbar-brand ">
          ADMIN CMS
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {user?._id ? (
              <>
                <Link to="/register" className="nav-link">
                  <i className="fa-solid fa-bell" title="Notifications"></i>
                </Link>
                <Link to="/register" className="nav-link">
                  <i className="fa-solid fa-user-pen" title="User Profile"></i>
                </Link>
                <Link to="/" className="nav-link" onClick={handleOnLogout}>
                  <i className="fa-solid fa-right-to-bracket"></i>
                </Link>
              </>
            ) : (
              <>
                <Link to="/" className="nav-link">
                  <i className="fa-solid fa-right-to-bracket" title="Login"></i>
                </Link>
                <Link to="/register" className="nav-link">
                  <i className="fa-solid fa-user-pen">Sign Up</i>
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
