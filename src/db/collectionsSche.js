import mongoose from "mongoose";

const colectionItemSchema = mongoose.Schema({
    productName: {
        type : String,
        require: true,
    },
    category : {
        type : String,
    },
    price: {
        type: Number,
        require: true,
    },
    increment: {
        type: Number,
    },
    decrement : {
        type: Number,
    },
    available : {
        type: Boolean
    },
    productImage: {
        type : String
    }
});

const collectionModel = mongoose.model("Collection", colectionItemSchema);
export default collectionModel;