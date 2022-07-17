import axios from "axios";
class Info {
  static hostUrl = "https://jsonplaceholder.typicode.com/";
  static user = new User();
}

class Request {
  static  async  getData(type) {
   return  await axios.get(Info.hostUrl + type);
  }
}
