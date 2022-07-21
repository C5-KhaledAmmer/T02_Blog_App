import React from "react";
import { Card, Nav, Button } from "react-bootstrap";

export const PostCard = ({ post }) => {
  console.log(post);
  const variant = "Dark";
  return (
    <Card
      bg={variant.toLowerCase()}
      key={variant}
      text={variant.toLowerCase() === "light" ? "dark" : "white"}
      className="mb-2"
    >
      <Card.Header>
        <Nav variant="pills" defaultActiveKey="#first">
          
          <div style={{display:"flex",justifyContent:"space-around",width:"100%"}}>
        
          <Nav.Item>
            <Nav.Link href="#first">Edit</Nav.Link>
          </Nav.Item>
          
          <Nav.Item>
            <Nav.Link href="#first">Delete</Nav.Link>
          </Nav.Item>
          
          </div>
          
          
        </Nav>
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
