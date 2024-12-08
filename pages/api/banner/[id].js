import bannerController from "../../../controllers/banner";


export default async function handler(req , res){
    const {method} = req;
    switch(method){
        case "GET":
            await bannerController.getSingleBanner(req , res);
            break;
        case "POST":
            await bannerController.update(req , res);
            break;
        case "DELETE":
            await bannerController.delete(req , res);
            break;
        default:
            res.status(404).send({ error: "Invalid action" });

    }
}