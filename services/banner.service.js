import Banner from "../models/Banner";
import { BasicService } from "./BasicService";


class BannerService extends BasicService {
    constructor() {
      super(Banner); // Pass Shop model to the BasicService constructor
    }
  }


export default new BannerService();