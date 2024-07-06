import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    category: { type: String, required: true },
    seller: { type: String, required: true },
    price: { type: String, required: true },
    stock: { type: String, required: true },
    ratingsCount: { type: String, required: true },
    img: { type: String, required: true },
    shipping: { type: String, required: true },
    quantity: { type: String, required: true },
  },
  { timestamps: true }
);
export default mongoose.model("Products", productSchema);
