import React from "react";
import { Card, Nav, Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { BuildDialog } from "./postdialog";
import "./style.css"
export const PostCard = ({ post }) => {
 
  const variant = "Dark";
  return (
    <Card
      bg={variant.toLowerCase()}
      key={variant}
      text={variant.toLowerCase() === "light" ? "dark" : "white"}
      className="mb-2"
    >
      <Card.Header>
      
        <Container>
          <div id ="post-botns">
          <Button  type="button" className="btn btn-success" onClick={()=>{showDialog("edit")}}>Edit</Button>
          <Button type="button" className="btn btn-danger"onClick={()=>{showDialog("delete")}}>Delete</Button>
          </div>
        </Container>
      </Card.Header>
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <hr/>
        <Card.Text>
          {post.body}
        </Card.Text>
        <Button variant="primary">Show Comments</Button>
      </Card.Body>
      {post.comments.map(comment=>{
        return <div>
          <small>{comment.body}</small>
          <hr/>
        </div>
      })}
    </Card>
  );
};
