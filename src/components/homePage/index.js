import React from "react";
import { NavBar } from "../NavBar";
import { useSelector, useDispatch } from "react-redux/";
import { UserCard } from "./userCard";
import "./style.css"
export const HomePage = () => {
  const { userReducer, postReducer,appReducer } = useSelector((state) => {
    return state;
  });


    
    
  
//   buildUsersPage()
  return (
    <div>
      <NavBar />
      <div className="Cards-div">
      {appReducer.homeContent == 1 ?userReducer.users.map((user)=>{
        return <UserCard user={user}/>;
      }) :<></>}
      </div>
      
      
    </div>
  );
};

