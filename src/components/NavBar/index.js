import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector, useDispatch } from "react-redux/";
import { setHomeContent } from "../../redux/reducers/app";
import { Link } from 'react-router-dom';
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
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav.Link as={Link} to={`/home/${userReducer.user.name}`}>{userReducer.user.name}</Nav.Link>
          <Nav className="me-auto">
            <Nav.Link
            as={Link} to={"/home"}
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
            >Posts</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
    </>
  );
};
