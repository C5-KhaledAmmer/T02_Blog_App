import { useEffect } from "react";
import "./App.css";
import { RequestData } from "./controllers/AppInfo";
import { Post } from "./models/Post";

const App = () => {
  useEffect(() => {
    (async () => {
      let users =( await RequestData.getData({ type: "users" })).data;
      let comments = (await RequestData.getData({ type: "comments" })).data;
      let posts = (await RequestData.getData({ type: "posts" })).data;
      let albums = (await RequestData.getData({ type: "albums" })).data;
      posts = posts.map((post) => {
        const newPost = new Post({ ...post });
        newPost.author = users.filter((user) => {
          return user.id === newPost.userId;
        });
        newPost.comments = comments.filter((comment) => {
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
