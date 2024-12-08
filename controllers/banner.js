import bannerService from "../services/banner.service";



class bannerController{
    getAllBanners = async(req,res)=>{
        try{
           let data = await bannerService.find();
           return res.status(200).send(data);
        }catch(err){
            console.log(err);
        }
    }
    getSingleBanner = async(req,res)=>{
        try{
           let data = await bannerService.findById(req.query.id);
           return res.status(200).send(data);
        }catch(err){
            console.log(err);
        }
    }
    create = async(req,res)=>{
        try{
           let newBanner = await bannerService.create(req.body);
           return res.status(200).send(newBanner);
        }catch(err){
            console.log(err);
        }
    }

    update = async(req , res)=>{
        try{
         const {id} = req.query;
         await bannerService.findByIdAndUpdate(id , req.body);
         return res.status(200).send({message:"Banner Updated Successfully"});
        }catch(err){
            console.log(err);
        }
    }
    delete = async(req,res)=>{
        try{
            const {id} = req.query;
            await bannerService.findByIdAndDelete(id);
           return res.status(200).send({message:"Banner Deleted Successfully"});
        }catch(err){
            console.log(err);
        }
    }

}


export default new bannerController();