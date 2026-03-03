import Cart from "../models/addCart.js";

//Add to cart
export const addToCart = async (req, res) => {
  try {
    const { productName, price, quantity } = req.body;
    const userId = req.user._id;

    if (!productName || !price || !quantity) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    if (quantity < 1) {
      return res.status(400).json({
        success: false,
        message: "Quantity must be at least 1",
      });
    }

    const newCartItem = await Cart.create({
      user: userId,
      productName,
      price,
      quantity,
    });

    return res.status(201).json({
      success: true,
      message: "Item added to cart",
      cartItem: newCartItem,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to add item to cart",
      error: error.message,
    });
  }
};

//Update cart item quantity
export const updateCartItem = async (req, res) => {
  try {
    const cartItemId = req.params.id;
    const { quantity } = req.body;
    const userId = req.user._id;

    if (!quantity || quantity < 1) {
      return res.status(400).json({
        success: false,
        message: "Quantity must be at least 1",
      });
    }

    const cartItem = await Cart.findOne({
      _id: cartItemId,
      user: userId,
    });

    if (!cartItem) {
      return res.status(404).json({
        success: false,
        message: "Cart item not found",
      });
    }

    cartItem.quantity = quantity;
    await cartItem.save();

    return res.status(200).json({
      success: true,
      message: "Cart item updated",
      cartItem,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to update cart item",
      error: error.message,
    });
  }
};

//Remove from cart
export const removeFromCart = async (req, res) => {
  try {
    const cartItemId = req.params.id;
    const userId = req.user._id;

    const cartItem = await Cart.findOne({
      _id: cartItemId,
      user: userId,
    });

    if (!cartItem) {
      return res.status(404).json({
        success: false,
        message: "Cart item not found",
      });
    }
    await cartItem.deleteOne();

    return res.status(200).json({
      success: true,
      message: "Item removed from cart",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to remove item from cart",
      error: error.message,
    });
  }
};
//get cart items for user
export const getCartItems = async (req, res) => {
    try {
        const userId = req.user._id;
        const cartItems = await Cart.find({ user: userId });
        return res.status(200).json({
            success: true,
            cartItems
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Failed to fetch cart items",
            error: error.message
        });
    }
};