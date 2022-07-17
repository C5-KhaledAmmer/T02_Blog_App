export class User {
    
    constructor({id,name,username,email}){
        this.id = id;
        this.name = name;
        this.username =username;
        this.email = email;
        this.posts = [];
        this.comments = [];
    }


}