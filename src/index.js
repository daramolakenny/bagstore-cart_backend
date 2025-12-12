import express from "express";
import router from "./route/userRouter.js";
import dotenv from "dotenv";
import { connectionDb } from "./db/productdb.js";
import cookieParser from "cookie-parser";
import session from "express-session";

dotenv.config();

const app = express();
const Port = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser("helloworld"));
app.use(
    session({
        secret: "kennyesther",
        saveUninitialized: false,
        resave: false,
        cookie: {
            maxAge: 60000 * 60,
        }
    })
)
connectionDb();
app.use("/", (req, res) => {
    res.send("Server is running...");
})

app.use("/api", router);

app.listen(Port, () => {
    console.log(`Server is running on port ${Port}.`);
});