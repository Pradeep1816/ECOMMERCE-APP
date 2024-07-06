import productModel from "../models/productModel.js";

export const productsController = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.send(products);
  } catch (error) {
    console.log(error);
  }
};
