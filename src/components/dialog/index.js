import { Button, Modal, Card } from "react-bootstrap";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import "./style.css";
import { setShowDialog } from "../../redux/reducers/app";
export const BuildDialog = () => {
  const dispatch = useDispatch();
  const { appReducer } = useSelector((state) => {
    return state;
  });
  const [show, setShow] = useState(appReducer.showDialog);

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
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">User Name</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <textarea className="post-text-area"></textarea>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={() => {
            dispatch(setShowDialog(false));
            setShow(false);
          }}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
