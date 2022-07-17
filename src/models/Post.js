export class Post {
    constructor({id,userId,title,body}){
        this.id = id;
        this.userId = userId;
        this.title= title;
        this.body = body;
        this.comments = [];
        this.author = null;
    }
}


