import { BasicService } from "./BasicService";
import { Blog } from "../models/Blog";

class blogService extends BasicService{
    constructor(){
        super(Blog)
    }
}

export default new blogService();