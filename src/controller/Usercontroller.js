import collectionModel from "../db/collectionsSche.js";
import { validateProduct } from "../utils/Validaterule.js";

export const createItem = async (req, res) => {
    try {
        const { error} = validateProduct(req.body);
        if(error){
            return res.status(400).json({
                message : "Validation error",
                details: error.details,
            })
        }

        const {productName, category, price, description, available, productImage} =
        req.body;
        const newItem = new collectionModel({
            productName,
            category,
            price,
            description,
            available,
            productImage
        })
        await newItem.save();
        console.log(newItem);
        res.sendStatus(200).json({message : "newItem submitted successfully", Collection: newItem});
    } catch (error) {
        console.log("error", error);
        res.sendStatus(404).json({message : "something went wrong"});
    }
};

export const getItems = async (req, res) => {
    try {
        // query logic
        const {filter, value} = req.query;
        // session logic
        console.log(req.session);
        console.log(req.session.id);
        req.session.visited = true;
        res.cookie("hello", "world", { maxAge: 60000 * 60 });
        let items;
        if(!filter && !value){
            items = await collectionModel.find();
        } else if(filter && value) {
            items = await collectionModel.find(
                { [filter]: { $regex: value, $options: "i" } }
            );
        }
        res.status(200).json({
            message: "Items fetched successfully!",
            items,
        })
    } catch (error) {
        console.log("error", error);
        res.status(500).json({message: "Internal server error" });
    }
};

export const singleItem = async (req, res) => {
    try {
        const { id } = req.params;
        const item = await collectionModel.findById(id);
        console.log(item);
        if(!item){
            res.sendStatus(404).json({message: "Item not found"});
        }
        res.sendStatus(200).json({message : "Item fetched successfully", item: item});
    } catch (error) {
        console.log("Error", error);
        res.sendStatus(500).json({message: "Item not found"});
    }
};

export const updateItem = async (req, res) => {
    try {
        const { id } = req.params;
        const { productName, category, price, description, available, productImage } = req.body;
        const editedItem = await collectionModel.findByIdAndUpdate(
            id, {
            productName,
            category,
            price,
            description,
            available,
            productImage,
        },
        {new: true}
    );
    if(!editedItem) {
        res.sendStatus(404).json({message: "Item not found"});
    }
    res.sendStatus(200).json({message: "Item updated successfully", item: editedItem});
    } catch (error) {
        console.log("error", error);
        res.sendStatus(500).json({message: "Internal server error"});
    }
};

export const deleteItem = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteItem = await collectionModel.findByIdAndDelete(id);
        console.log(deleteItem);
        if(!deleteItem) {
            res.sendStatus(404).json({message: "Item not found"});
        } 
        res.sendStatus(200).json({message: "Item deleted successfully", item: deleteItem});
    } catch (error) {
        console.log("error", error);
        res.sendStatus(500).json({message: "Internal server error"});
    }
};

export const auth = async (req, res) => {
    const {userName, password} = req.body;
    try {
        const auth = collectionModel.find();
        if(auth.userName === !userName && auth.password === !password) {
            res.status(401).json({message: "incorrect user"});
        }
        if(auth.userName === userName && auth.password === password) {
            res.status(200).json({
                message: "Correct details",
            })
        }
    } catch (error) {
        console.log("Error", error);
        res.status(500).json({
            message: "something went wrong",
        })
    }
}