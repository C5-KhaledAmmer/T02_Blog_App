import { Button, Modal, Card } from "react-bootstrap";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import "./style.css";
import { setShowDialog } from "../../../../redux/reducers/app";
import { Post } from "../../../../models/Post";
import { updateUser } from "../../../../redux/reducers/user";
import { setCurrentPost, setPosts } from "../../../../redux/reducers/post";
import { User } from "../../../../models/User";

export const BuildDialog = ({ action }) => {
  const dispatch = useDispatch();
  const { appReducer, postReducer, userReducer } = useSelector((state) => {
    return state;
  });
  const [show, setShow] = useState(appReducer.showDialog);

  const [text, setText] = useState( action!=1? postReducer.currentPost.post.body:"");
  const [title, setTitle] = useState(action!=1?postReducer.currentPost.post.title:"");

  const onChange = (e) => {
    setText(e.target.value);
  };
  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const createNewPost = () => {
    dispatch(setShowDialog(false));
    const post = new Post({
      body: text,
      title: title,
      userId: userReducer.user.id,
      id: postReducer.posts.length + 1,
      author:userReducer.user
    });
   const user = new User({ ...userReducer.user });
    user.posts = [post, ...user.posts];
    dispatch(updateUser(user));
    const posts = [post, ...postReducer.posts];
    dispatch(setPosts(posts));
    localStorage.setItem("posts", JSON.stringify(posts));
  };
  const editPost = () => {
    const current = new Post({ ...postReducer.currentPost.post });
    current.title = title;
    current.body = text;
    const posts = [...postReducer.posts];
    posts[postReducer.currentPost.index] = current;
    dispatch(setPosts(posts));
    dispatch(setShowDialog(false));
    localStorage.setItem("posts", JSON.stringify(posts));
  };
  return (
    <Modal
      show={show}
      onHide={() => {
        dispatch(setShowDialog(false));
        setShow(false);
      }}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="model-dialog"
    >
      <Modal.Header closeButton>
        <Modal.Title
          className="model-dialog"
          id="contained-modal-title-vcenter"
        >
          User Name
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <input
          className="post-title-area"
          placeholder="Title"
          onChange={onChangeTitle}
          defaultValue={title}
        />
        <textarea
          placeholder="Write your post :)"
          className="post-text-area"
          onChange={onChange}
          defaultValue={text}
        ></textarea>
      </Modal.Body>

      <Button
        variant={text && title ? "success" : "secondary"}
        disabled={!text || !title ? true : false}
        onClick={() => {
          action == 1 ? createNewPost() : editPost();
        }}
      >
        {action == 1 ? "ADD POST" : "Edit Post"}
      </Button>
    </Modal>
  );
};
