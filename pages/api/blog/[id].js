import blogController from "../../../controllers/blog";

export default async function handler(req , res){
    const method = req.method;
    console.log(method);
    switch (method){
        case "GET":
            await blogController.getSingleBlog(req , res);
            break;
        case "POST":
            await blogController.update(req,res);
            break;
        case "DELETE":
            await blogController.delete(req,res);
            break;
        default:
            res.status(404).send({ error: "Invalid action" });
    }
}