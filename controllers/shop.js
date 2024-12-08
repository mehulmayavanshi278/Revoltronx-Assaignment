import { Shop } from "../models/Shop";
import {shopService} from "../services/shopService";


class shopController{

    getAllShops = async(req , res)=>{
        try{

          const {val ,type, minPrice , maxPrice , sortBy} = req.query;
          let filter = {};
          let sort={};
          if(type==="category") filter.category = {$in : val};
          if(type==="tags") filter.tags = {$in : val};
          if(minPrice) filter.price = { $gte: parseInt(minPrice), $lte: parseInt(maxPrice) };
         

          if (sortBy) {
            switch (sortBy) {
              case "price_high":
                sort.price = -1; 
                break;
              case "price_low":
                sort.price = 1; 
                break;
              case "createdAt_desc":
                sort.createdAt = -1; 
                break;
              case "ratings_desc":
                sort['ratings.average'] = -1; 
                break;
              default:
                
                break;
            }
          }
          console.log(filter);
          console.log(sort);
          const data = await shopService.find(filter).sort(sort);
          console.log("data from" , data);
          return res.status(200).send(data);
        }catch(err){
            console.log(err);
        }
    }

    getSingleShop = async(req ,res)=>{
        try{
          const {id}  = req.query;
          console.log("id" , req.params);
          console.log(req.query);
          console.log(id);
          let data = await shopService.findById(id);
          return res.status(200).send(data);
        }catch(err){
            console.log(err);
        }
    }

    create = async(req , res)=>{

        const  images = [];
        try{
            let {
                name,
                category,
                price,
                dummyPrice,
                tags,
                weight,
                dimensions,
                vendorName,
                vendorContact,
                stock,
              } = req.body;

              const newProductData = {
                name,
                category,
                price,
                description,
                tags,
                additionalInformation: { weight, dimensions },
                vendorInfo: { name:vendorName, contact:vendorContact },
                stock,
                images,
              };

              let newData = await shopService.create(newProductData);

              return res.status(200).send(newData);


        }catch(err){
            console.log(err);
        }
    }

    getHomeSeasonCollection = async(req , res)=>{
      try{
          const data = await Shop.aggregate([
            {
              $unwind:"$category",
            },
            {
              $group:{
                _id:"$category",
                firstProduct: { $first: "$$ROOT" },
                count:{$sum : 1}
              }
            },
            {
              $project:{
                _id:1,
                imgURL:{$arrayElemAt : ["$firstProduct.images" , 0] },
                count:1
              }
            }

          ])       
          return res.status(200).send(data);
      }catch(err){
        console.log(err);
      }
    }

    update = async(req , res)=>{
        try{

        }catch(err){
            console.log(err);
        }
    }
    delete = async(req , res)=>{
        try{

        }catch(err){
            console.log(err);
        }
    }

}

export default shopController = new shopController();