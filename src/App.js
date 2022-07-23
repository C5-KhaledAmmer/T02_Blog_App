import { useEffect } from "react";
import "./App.css";
import { Post } from "./models/Post";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Login } from "./components/Login";
import { useSelector, useDispatch } from "react-redux";
import { setUsers } from "./redux/reducers/user";
import { setPosts } from "./redux/reducers/post";
import { User } from "./models/User";
import { HomePage } from "./components/homePage";
import { RequestData } from "./controllers/RequestData";
import { UserProfile } from "./components/UserProfile";
import { ErrorPage } from "./components/ErrorPage";

const App = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
 
  useEffect(() => {
    
    (async () => {
      let user = await localStorage.getItem("user");
      if (!user) {
        let { comments, albums, posts, users } = await RequestData.getData();
        posts = Post.postFromJson(posts, comments, users);
        users = User.userFromJson(users, posts, albums);
        await storeData(posts,users);
      } else {
          nav("/home");
      }
    })();
  }, []);
  const storeData =async (posts,users)=>{
    await localStorage.setItem("posts", JSON.stringify(posts));
    await localStorage.setItem("users",JSON.stringify(users));
    dispatch(setUsers(users));
    dispatch(setPosts(posts));
  }
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/home/:username" element={<UserProfile/>} />
        <Route path="*" element={<ErrorPage/>} />


      </Routes>
    </div>
  );
};

export default App;
