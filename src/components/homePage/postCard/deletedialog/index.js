import { Button, Modal, Card } from "react-bootstrap";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import "./style.css";
import { setShowDialog } from "../../../../redux/reducers/app";
import { setPosts } from "../../../../redux/reducers/post";

export const DeleteDialog = (action) => {
  const dispatch = useDispatch();
  const { appReducer, postReducer, userReducer } = useSelector((state) => {
    return state;
  });
  const [show, setShow] = useState(appReducer.showDialog);



  const deletePost = ()=>{
    const current = postReducer.currentPost;
    const posts = [...postReducer.posts]
    posts.splice(current.index,1);
    dispatch(setPosts(posts));

    dispatch(setShowDialog(false));

  }
    const hideDialog = () => {
        dispatch(setShowDialog(false));
        dispatch(setShowDialog(false));
    };
  return (
    <Modal
      show={show}
      onHide={hideDialog}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="model-dialog"
    >
       <Modal.Header closeButton>
        <Modal.Title>Delete The Post</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>You will delete the post, are you sure?</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={hideDialog}>Cancel</Button>
        <Button variant="danger"  onClick={deletePost}>Delete</Button>
      </Modal.Footer>
    </Modal>
  );
};
