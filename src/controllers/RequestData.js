import axios from "axios";
import { User } from "../models/User";
export class RequestData {
  static hostUrl = "https://jsonplaceholder.typicode.com/";
    
  static async getData(){
    let users =( await RequestData.sendRequest({ type: "users" })).data;
      let comments = (await RequestData.sendRequest({ type: "comments" })).data;
      let posts = (await RequestData.sendRequest({ type: "posts" })).data;
      let albums = (await RequestData.sendRequest({ type: "albums" })).data;
      return {users,comments,posts,albums};
  }
  
  static  async  sendRequest({type}) {
     return  await axios.get(RequestData.hostUrl + type);
    }
  }