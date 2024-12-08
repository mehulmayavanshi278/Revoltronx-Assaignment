
const Cart = require('../models/Cart');
const {cartService} = require("../services/cart.service");
const {shopService} = require("../services/shopService");

class cartController {
  // 1. Add product to cart
   addToCart = async(req, res)=> {
    try {

      const userId = req.user._id;
      const { productId, quantity } = req.body;

      const product = await shopService.findById(productId);
      if (!product) return res.status(404).send({ message: "Product not found" });

      const cart = await cartService.findOne({ userId });
      if (!cart) {
        const newCart = await cartService.create({
          userId,
          items: [{ productId, quantity }],
          totalItems: quantity,
          totalPrice: product.price * quantity,
        });
        return res.status(200).send(newCart);
      }

      // Update existing cart
      const existingItem = cart.items.find(item => item.productId.toString() === productId);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        cart.items.push({ productId, quantity });
      }

      // Recalculate totals
      cart.totalItems += quantity;
      cart.totalPrice += product.price * quantity;

      await cart.save();
      res.status(200).send(cart);
    } catch (err) {
      console.error(err);
      res.status(500).send({ message: "Internal server error" });
    }
  }

  // 2. Remove product from cart
   removeFromCart = async(req, res)=> {
    try {
        
      const productId = req.query.id;
      const userId = req.query.userId || req.user._id;

      const cart = await cartService.findOne({ userId });
      if (!cart) return res.status(404).send({ message: "Cart not found" });

      const itemIndex = cart.items.findIndex(item => item.productId.toString() === productId);
      if (itemIndex === -1) return res.status(404).send({ message: "Product not in cart" });

      const removedItem = cart.items[itemIndex];
      cart.totalItems -= removedItem.quantity;
      cart.totalPrice -= removedItem.quantity * (await shopService.findById(productId)).price;

      cart.items.splice(itemIndex, 1);
      await cart.save();

      res.status(200).send(cart);
    } catch (err) {
      console.error(err);
      res.status(500).send({ message: "Internal server error" });
    }
  }

  // 3. Update product quantity in cart
   updateCart = async(req, res)=> {
    try {
      const productId = req.query.id;
      console.log(req.query.id);
      console.log(productId);
      console.log(req.params.id);
      const {   quantity } = req.body;
      const userId = req.user._id;
      console.log(userId);

      const cart = await cartService.findOne({ userId });
      if (!cart) return res.status(404).send({ message: "Cart not found" });

      const item = cart.items.find(item => item.productId.toString() === productId);
      if (!item) return res.status(404).send({ message: "Product not in cart" });

      const product = await shopService.findById(productId);
      const quantityDifference = quantity - item.quantity;

      item.quantity = quantity;
      cart.totalItems += quantityDifference;
      cart.totalPrice += product.price * quantityDifference;

      await cart.save();
      res.status(200).send(cart);
    } catch (err) {
      console.error(err);
      res.status(500).send({ message: "Internal server error" });
    }
  }

  // 4. Get user cart
   getCart = async(req, res)=> {
    try {
     

      const userId = req.query.userId || req.user._id;

      const cart = await cartService.findOne({ userId }).populate("items.productId");
      if (!cart) return res.status(404).send({ message: "Cart not found" });

      res.status(200).send(cart);
    } catch (err) {
      console.error(err);
      res.status(500).send({ message: "Internal server error" });
    }
  }
}

module.exports = new cartController();
