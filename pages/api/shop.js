import shopController from "../../controllers/shop";

export default async function handler(req , res) {
    const { action } = req.query;
    console.log(action + " here");
    switch(action){
        case "getAllShop":
            await shopController.getAllShops(req , res);
            break;
        case "getSingleShop":
            await shopController.getSingleShop(req , res);
            break;
        case "create":
            await shopController.create(req , res);
            break;
        case "getHomeSeasonCollection":
            await shopController.getHomeSeasonCollection(req , res);
            break;
        default:
                res.status(404).send({ error: "Invalid action" });
    }
}