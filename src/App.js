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
import { HomePage } from "./components/homePage";
import { Comment } from "./models/Comment";

const App = () => {
  const dispatch = useDispatch();
  
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
         const newComment = new Comment({...comment});
          return newComment ;
        });
        return newPost;
      });
     
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
      dispatch(setPosts(posts))
        console.log(posts);
       
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
