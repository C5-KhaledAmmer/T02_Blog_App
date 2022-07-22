export class User {
    
    constructor({id,name,username,email,address,phone,website,company}){
        this.id = id;
        this.name = name;
        this.username =username;
        this.email = email;
        this.address = address;
        this.phone =phone;
        this.website =website;
        this.company =company
        this.posts = [];
        this.albums = [];
    }

    static userFromJson(users,posts,albums){
        return users.map((user)=>{
            const newUser = new User({...user})
            newUser.posts = posts.filter((post)=>{
              return user.id == post.userId;
            });
            newUser.albums = albums.filter((album)=>{
              return user.id == album.userId;
            })
            return newUser;
          });
    }
}