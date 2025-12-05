import mongoose from "mongoose";

const cartSchema = mongoose.Schema({
    user
});

const cartModel = mongoose.model("Product", cartSchema);

export default cartModel;