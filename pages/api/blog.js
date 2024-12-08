import blogController from "../../controllers/blog";

export default async function handler(req , res){
    const method = req.method;
    console.log(method);
    switch (method){
        case "GET":
            await blogController.getAllBlogs(req , res);
            break;
        case "POST":
            await blogController.create(req,res);
            break;
        default:
            res.status(404).send({ error: "Invalid action" });
    }
}