import { useEffect } from "react";
import "./App.css";
import { Post } from "./models/Post";
import {Route,Routes} from "react-router-dom"
import { Login } from "./components/Login";
import {useSelector,useDispatch} from "react-redux"
import { setUsers } from "./redux/reducers/user";
import { setPosts } from "./redux/reducers/post";
import { User } from "./models/User";
import { HomePage } from "./components/homePage";
import { RequestData } from "./controllers/RequestData";

const App = () => {
  const dispatch = useDispatch();
  const { appReducer } = useSelector((state) => {
    return state;
  });
  useEffect(() => {
    (async () => {
      let {comments,albums,posts,users} = await RequestData.getData();
      posts = Post.postFromJson(posts,comments,users) 
      users = User.userFromJson(users,posts,albums)
      dispatch(setUsers(users));
      dispatch(setPosts(posts))
       
    })();
  }, []);
  return (
    <div className="App">
      
      <Routes>
      <Route path= "/"element={<Login/>}/>
      <Route path="/home" element={<HomePage/>}/>
      </Routes>
    </div>
  );
};

export default App;
