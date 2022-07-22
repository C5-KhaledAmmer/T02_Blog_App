import React from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import "./style.css";
export const UserProfile = () => {
  const { userReducer } = useSelector((state) => {
    return state;
  });
  const user = userReducer.user;
  const variant = "Dark";
  return (
    <div id="profile-div">
        <div id="inner-profile">
        <Card
        bg={variant.toLowerCase()}
        key={variant}
        text={variant.toLowerCase() === "light" ? "dark" : "white"}
        className="mb-2"
        >
        <div className="img-div">
          <Card.Img
            variant="top"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/User_icon-cp.svg/1200px-User_icon-cp.svg.png"
          />
        </div>

        <Card.Body>
          <Card.Title>{user.username}</Card.Title>
          <Card.Text>
            # of Posts: {user.posts.length}
            <br /># of Albums: {user.albums.length}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush" >
          <ListGroup.Item >Phone : {user.phone}</ListGroup.Item>
          <ListGroup.Item>
            Website : {user.website}</ListGroup.Item>
            
          <ListGroup.Item>Company : {user.company.name}</ListGroup.Item>
          <ListGroup.Item>Email : {user.email}</ListGroup.Item>
        </ListGroup>
      </Card>
        </div>
      
    </div>
  );
};
