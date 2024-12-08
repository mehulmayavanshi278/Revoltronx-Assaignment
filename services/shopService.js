
import { Category, Shop, Tag } from "../models/Shop";
import { BasicService } from "./BasicService";

class CategoryService extends BasicService {
  constructor() {
    super(Category); // Pass Category model to the BasicService constructor
  }
}

class TagService extends BasicService {
  constructor() {
    super(Tag); // Pass Tag model to the BasicService constructor
  }
}

class ShopService extends BasicService {
  constructor() {
    super(Shop); // Pass Shop model to the BasicService constructor
  }
}


// Create instances of the service classes
const categoryService = new CategoryService();
const tagsService = new TagService();


export const shopService = new ShopService();
export { categoryService, tagsService };
