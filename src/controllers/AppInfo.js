import axios from "axios";
import { User } from "../models/User";
export class Info {
  static hostUrl = "https://jsonplaceholder.typicode.com/";
  
}

export class RequestData {
  static  async  getData({type}) {
   return  await axios.get(Info.hostUrl + type);
  }
}
