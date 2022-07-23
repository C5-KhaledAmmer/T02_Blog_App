import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector, useDispatch } from "react-redux/";
import { setHomeContent } from "../../redux/reducers/app";
import { Link } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
export const NavBar = () => {
  const dispatch = useDispatch();
  const { userReducer } = useSelector((state) => {
    return state;
  });
  const display = (text) => {
    if (text === "Users") {
      dispatch(setHomeContent(1));
    } else {
      dispatch(setHomeContent(0));
    }
  };
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Nav.Link as={Link} to={`/home/${userReducer.user.name}`}>
            {userReducer.user.name}
          </Nav.Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            
                <Nav.Link
                  as={Link}
                  to={"/home"}
                  onClick={() => {
                    display("Users");
                  }}
                >
                  Users
                </Nav.Link>
                <Nav.Link
                  onClick={() => {
                    display("Posts");
                  }}
                >
                  Posts
                </Nav.Link>
                <Nav.Link
                as={Link}
                to={"/"}
                  onClick={() => {
                    localStorage.clear();
                  }}
                >
                  SignOut
                </Nav.Link>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
