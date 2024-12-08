import shopController from "../../../controllers/shop";


export default async function handler(req , res) {
    const method = req.method;
    console.log(method);
    switch (method){
        case "GET":
            await shopController.getSingleShop(req , res);
            break;
        case "POST":
            await shopController.update(req,res);
            break;
        case "DELETE":
            await shopController.delete(req,res);
            break;
        default:
            res.status(404).send({ error: "Invalid action" });
    }
}