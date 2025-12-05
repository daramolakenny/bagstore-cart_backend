import { Router } from "express";
import { createItem } from "../controller/Usercontroller.js";
import { getItems } from "../controller/Usercontroller.js";
import { singleItem } from "../controller/Usercontroller.js";
import { updateItem } from "../controller/Usercontroller.js";
import { deleteItem } from "../controller/Usercontroller.js";

const router = Router();

router.post("/user", createItem);
router.get("/user", getItems);
router.get("/user/:id", singleItem);
router.put("/user/:id", updateItem);
router.delete("/user/:id", deleteItem);

export default router;