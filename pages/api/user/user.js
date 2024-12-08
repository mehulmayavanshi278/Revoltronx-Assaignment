import userController from '../../../controllers/user'
import { Auth } from '../../../middleware/Auth';

export default async function handler(req, res) {
  const { action } = req.query;
  console.log(action);

  switch (action) {
    case "getAllUser":
        await userController.getAllUsers(req , res);
        break;
    case "getUser":
        await Auth(async (req ,res)=>{
        await userController.getUsers(req, res);
      })(req,res);
      
      break;
    case "login":
      await userController.login(req, res);
      break;
    case "signup":
      await userController.create(req, res);
      break;
    case "getOtp":
      await userController.sendOtp(req, res);
      break;
    case "verifyOtp":
      await userController.verifyOtp(req, res);
      break;
    default:
      res.status(404).send({ error: "Invalid action" });
  }
}

// pages/api/user/user.js


// export default async function handler(req, res) {
//   if (req.method === 'GET') {
//     try {
//       return await userController.getAllUsers(req, res);
//     } catch (error) {
//       res.status(500).send({ error: 'An error occurred' });
//     }
//   }
  
//   // Handle other HTTP methods if needed (e.g., POST, PUT)
//   res.status(405).send({ error: 'Method Not Allowed' }); // Handle invalid methods
// }

