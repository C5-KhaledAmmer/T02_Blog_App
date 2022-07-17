import { useEffect } from "react";
import "./App.css";
import { RequestData } from "./controllers/AppInfo";
import { Post } from "./models/Post";

const App = () => {
  useEffect(() => {
    (async () => {
      let users = await RequestData.getData({ type: "users" });
      let comments = await RequestData.getData({ type: "comments" });
      let posts = await RequestData.getData({ type: "posts" });
      posts = posts.data.map((post) => {
        const newPost = new Post({ ...post });
        newPost.author = users.data.filter((user) => {
          return user.id === newPost.userId;
        });
        newPost.comments = comments.data.filter((comment) => {
          return newPost.id === comment.postId;
        }).map((comment)=>{
          return new Comment({...comment});
        });
        return newPost;
      });
      
    })();
  }, []);
  return (
    <div className="App">
      <p>Hello From App</p>
    </div>
  );
};

export default App;
