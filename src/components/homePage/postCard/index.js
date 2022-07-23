import React, { useState } from "react";
import { Card, Nav, Button, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setShowDialog } from "../../../redux/reducers/app";
import { setCurrentPost, setShowComment } from "../../../redux/reducers/post";
import "./style.css";
export const PostCard = ({ post, index }) => {
  const dispatch = useDispatch();
  const { userReducer, postReducer } = useSelector((state) => {
    return state;
  });
  const [show, setShow] = useState(false);
  const variant = "Dark";
  const EditPost = () => {
    dispatch(setCurrentPost({ post, index }));
    dispatch(setShowDialog(2));
  };
  const deletePost = () => {
    dispatch(setCurrentPost({ post, index }));
    dispatch(setShowDialog(3));
  };
  const showComment = () => {
    dispatch(setShowComment())
    dispatch(setCurrentPost({ post, index }));
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
          {post.author.id == userReducer.user.id ? (
            <div id="post-botns">
              <Button
                type="button"
                className="btn btn-success"
                onClick={EditPost}
              >
                Edit
              </Button>
              <Button
                type="button"
                className="btn btn-danger"
                onClick={deletePost}
              >
                Delete
              </Button>
            </div>
          ) : (
            <></>
          )}
        </Container>
      </Card.Header>
      <Card.Body
        style={
          postReducer.showComment
            ? postReducer.currentPost.index === index
              ? {
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }
              : {
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }
            : {
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }
        }
      >
        <Card.Title>{post.title}</Card.Title>
        <hr />
        <Card.Text>{post.body}</Card.Text>
        <Row>
          <Button variant="light" onClick={showComment}>
            Show Comments
          </Button>
        </Row>
      </Card.Body>
      { postReducer.showComment && postReducer.currentPost.index === index ? (
        post.comments.length?
        post.comments.map((comment) => {
          return (
            <div>
              <small>{comment.body}</small>
              <hr />
            </div>
          );
        }):<h6>No Comment For This Post</h6>
      ) : (
        <></>
      )}
    </Card>
  );
};
