import cartController from "../../controllers/cart";
import { Auth } from "../../middleware/Auth";

export default async function handler(req   ,res){
    const {method} = req;
    switch(method){
        case "GET":
            await Auth(async (req , res)=>{
                await cartController.getCart(req,res);
            })(req , res);
            
            break;
        case "POST":
            await Auth(async (req , res)=>{
               await cartController.addToCart(req,res);
            })(req , res);

            break;
        default:
            return res.status(404).send({error:"Invalid action"});
    }
}