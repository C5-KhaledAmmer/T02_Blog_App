import React from "react";
import { NavBar } from "../NavBar";
import { useSelector, useDispatch } from "react-redux/";
import { UserCard } from "./userCard";
import "./style.css";
import { PostCard } from "./postCard";
import { Button } from "bootstrap";
export const HomePage = () => {
  const { userReducer, postReducer, appReducer } = useSelector((state) => {
    return state;
  });
 
  return (
    <div>
      <NavBar />
      <div>
        {appReducer.homeContent == 1 ? (
          <div className="Cards-div">
            {userReducer.users.map((user) => {
              return <UserCard user={user} />;
            })}
          </div>
        ) : (
          <div>
            <Button>SSSS</Button>
            <div className="Cards-div">
              {postReducer.posts.map((post) => {
                return <PostCard post={post} />;
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
