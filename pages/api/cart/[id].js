import cartController from "../../../controllers/cart";
import { Auth } from "../../../Middleware/Auth";

export default async function(req , res){
    const {method} = req;
    switch(method){
        case "DELETE":
              await Auth(async (req , res)=>{
             await cartController.removeFromCart(req , res);
             })(req , res);
            break;
        case "POST":
            await Auth(async (req , res)=>{
              await cartController.updateCart(req , res);
             })(req , res);

            break;
        default:
            return res.status(404).send({error:"Invalid Action"});
    }
}