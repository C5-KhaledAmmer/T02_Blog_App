import React from "react";
import { NavBar } from "../NavBar";
import { useSelector, useDispatch } from "react-redux/";
import { UserCard } from "./userCard";
import "./style.css";
import { PostCard } from "./postCard";
import { Button } from "react-bootstrap";
import { setShowDialog } from "../../redux/reducers/app";
import { BuildDialog } from "./postCard/postdialog";
import { DeleteDialog } from "./postCard/deletedialog";
export const HomePage = () => {
  const dispatch = useDispatch();
  const { userReducer, postReducer, appReducer } = useSelector((state) => {
    return state;
  });
  const showDialog = () => {
    dispatch(setShowDialog(1));
  };
  return (
    <div>
      <NavBar />
      {appReducer.showDialog ? (
        appReducer.showDialog == 1 ? (
          <BuildDialog action={"CreatePost"} />
        ) : (
          (appReducer.showDialog == 2 ?<BuildDialog action={"EditPost"} />:<DeleteDialog />)
        )
      ) : (
        <></>
      )}
      <div>
        {appReducer.homeContent == 1 ? (
          <div className="Cards-div">
            {userReducer.users.map((user) => {
              return <UserCard user={user} />;
            })}
          </div>
        ) : (
          <div
            style={{ display: "flex", flexDirection: "column", margin: "10px" }}
          >
            <Button onClick={showDialog} variant="success">
              Add Post
            </Button>
            <div className="Cards-div">
              {postReducer.posts.map((post,index) => {
                return <PostCard post={post} index={index} />;
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
