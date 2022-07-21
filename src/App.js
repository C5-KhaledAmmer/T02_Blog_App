import { useEffect } from "react";
import "./App.css";
import { RequestData } from "./controllers/AppInfo";
import { Post } from "./models/Post";
import {Route,Routes} from "react-router-dom"
import { Login } from "./components/Login";
import {useSelector,useDispatch} from "react-redux"
import { setUsers } from "./redux/reducers/user";
import { setPosts } from "./redux/reducers/post";
import { User } from "./models/User";

const App = () => {
  const dispatch = useDispatch();
  const {userReducer,postReducer}= useSelector((state)=>{
    
    return state;
  })
  
  useEffect(() => {
    (async () => {
      let users =( await RequestData.getData({ type: "users" })).data;
      let comments = (await RequestData.getData({ type: "comments" })).data;
      let posts = (await RequestData.getData({ type: "posts" })).data;
      let albums = (await RequestData.getData({ type: "albums" })).data;
      
      posts = posts.map((post) => {
        const newPost = new Post({...post});
        newPost.author = users.filter((user) => {
          return user.id === newPost.userId;
        })[0];
        newPost.comments = comments.filter((comment) => {
          return newPost.id === comment.postId;
        }).map((comment)=>{
          return new Comment({...comment});
        });
        return newPost;
      });
      // dispatch(setPosts(posts[0]))
     
      users = users.map((user)=>{
        const newUser = new User({...user})
        newUser.posts = posts.filter((post)=>{
          return user.id == post.userId;
        });
        newUser.albums = albums.filter((album)=>{
          return user.id == album.userId;
        })
        return newUser;
      });
      dispatch(setUsers(users));
      // dispatch(setUsers(users));
        
       
    })();
  }, []);
  return (
    <div className="App">
      <Routes>
      <Route path= "/"element={<Login/>}/>
      </Routes>
    </div>
  );
};

export default App;
