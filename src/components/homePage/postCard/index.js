import React from "react";
import { Card, Nav, Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setShowDialog } from "../../../redux/reducers/app";
import { setCurrentPost } from "../../../redux/reducers/post";
import "./style.css"
export const PostCard = ({ post,index }) => {
  const dispatch = useDispatch();
  const {userReducer} = useSelector((state)=>{
    return state;
  })
  const variant = "Dark";
  const EditPost = () => {
    dispatch(setCurrentPost({ post, index }));
    dispatch(setShowDialog(2));
  };
  const deletePost = () => {
    dispatch(setCurrentPost({ post, index }));
    dispatch(setShowDialog(3));

  };
  return (
    <Card
      bg={variant.toLowerCase()}
      key={variant}
      text={variant.toLowerCase() === "light" ? "dark" : "white"}
      className="mb-2"
    >
      <Card.Header>
      
        <Container>
         {post.author.id == userReducer.user.id? <div id ="post-botns">
          <Button  type="button" className="btn btn-success" onClick={EditPost}>Edit</Button>
          <Button type="button" className="btn btn-danger"onClick={deletePost}>Delete</Button>
          </div>:<></>}
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
