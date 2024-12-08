import blogService from "../services/blog.service";


class blogController{


    getAllBlogs = async(req , res)=>{

        try{
            const {val ,type,  sortBy} = req.query;
            let filter = {};
            let sort={};
            if(type==="category") filter.category = {$in : val};
            if(type==="tags") filter.tags = {$in : val};
            if (sortBy) {
                switch (sortBy) {
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
              let data = await blogService.find(filter).sort(sort);
              return res.status(200).send(data);
        }catch(err){
            console.log(err);
        }
    }
     create = async(req , res)=>{
        try {
            const { userId, title, description, secondTitle, secondDescription, thirdTitle, thirdDescription, tags, img, date, category } = req.body;
            const newBlog = {
              userId,
              title,
              description,
              secondTitle,
              secondDescription,
              thirdTitle,
              thirdDescription,
              tags,
              img,
              date,
              category,
            };
        
            const newBlogData =  await blogService.create(newBlog);
            return res.status(200).send(newBlogData);
          } catch (error) {
            res.status(400).json({ error: error.message });
          }
     } 
     

     getSingleBlog = async(req , res)=>{
        try {
            const id = req.query.id;
            console.log("id is" , id);
            const blog = await blogService.findById(id);
            if (!blog) return res.status(404).json({ message: 'Blog not found' });
           return res.status(200).send(blog);
          } catch (error) {
            res.status(500).json({ error: error.message });
          }
     }






     update = async(req , res)=>{
        try {
            const updatedBlog = await blogService.findByIdAndUpdate(
              req.query.id,
              { ...req.body },
              { new: true, runValidators: true }
            );
        
            if (!updatedBlog) return res.status(404).json({ message: 'Blog not found' });
            res.status(200).json(updatedBlog);
          } catch (error) {
            res.status(400).json({ error: error.message });
          }
        
     }

     delete = async(req , res)=>{
        try {
            const deletedBlog = await blogService.findByIdAndDelete(req.query.id);
            if (!deletedBlog) return res.status(404).json({ message: 'Blog not found' });
            res.status(200).json({ message: 'Blog deleted successfully' });
          } catch (error) {
            res.status(500).json({ error: error.message });
          }
     }
     


}


export default new blogController();