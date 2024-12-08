import Cart from "../models/Cart";
import { BasicService } from "./BasicService";

class cartService extends BasicService{
    constructor(){
        super(Cart);
    }
}

module.exports.cartService = new cartService();