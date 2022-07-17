export class Comments {
    constructor({id,postId,name,email,body}){
        this.id = id;
        this.name = name;
        this.email =email;
        this.body = body;
        this.postId = postId;
    }
}