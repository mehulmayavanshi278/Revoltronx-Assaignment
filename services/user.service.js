import { BasicService } from "./BasicService";
import User from "../models/User";

class userService extends BasicService{
    constructor(){
        super(User)
    }
}

export default new userService();