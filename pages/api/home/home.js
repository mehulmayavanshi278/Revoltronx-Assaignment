


export default async function handler(req , res){
    const { action } = req.query;
    console.log(action);

    switch(action){

        default:
         res.status(404).send({ error: "Invalid action" });
    }

}