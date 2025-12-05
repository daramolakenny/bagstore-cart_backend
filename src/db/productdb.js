import mongoose from "mongoose";

export const connectionDb = async () => {
    try {
        await mongoose.connect(process.env.connectionString);
        console.log("Database connected successfully");
    } catch (error) {
        console.log("error", error);
    }
}