import React from "react";
import { NavBar } from "../NavBar";
import { useSelector, useDispatch } from "react-redux/";
import { UserCard } from "./userCard";
import "./style.css";
import { PostCard } from "./postCard";
import { Button } from "react-bootstrap";
import { setShowDialog} from "../../redux/reducers/app";
export const HomePage = () => {
    const dispatch = useDispatch();
  const { userReducer, postReducer, appReducer } = useSelector((state) => {
    return state;
  });
 const showDialog = ()=>{
    console.log(appReducer.showDialog);

    dispatch(setShowDialog(true))
    console.log(appReducer.showDialog);
 }
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
          <div style={{display:"flex",flexDirection:"column", margin:"10px"}}>
           <Button onClick={showDialog} variant="success">Add Post</Button> 
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
