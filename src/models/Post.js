import {Comment} from "./Comment"
export class Post {
    constructor({id,userId,title,body,comments=[],author=null}){
        this.id = id;
        this.userId = userId;
        this.title= title;
        this.body = body;
        this.comments =comments;
        this.author = author;
    }

    static postFromJson(posts,comments,users){
       
     return posts.map((post) => {
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
         
    }
}


