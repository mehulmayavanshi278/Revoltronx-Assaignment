import bannerController from "../../controllers/banner";


export default async function handler(req ,res){
    const {method} = req;

    switch(method){
        case "POST":
            await bannerController.create(req ,res);
            break;
        case "GET":
            console.log('get all banner in handler');
            await bannerController.getAllBanners(req,res);
            break;
        default:
            res.status(404).send({ error: "Invalid action" });
            
    }
}