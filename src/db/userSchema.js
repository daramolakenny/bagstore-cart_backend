import mongoose from "mongoose"

const signUpSchema = mongoose.Schema({
    userName: {},
    email: {},
    password: {},
    contact: {}
});

const signupModel = mongoose.model("", s5gbignUpSchema);

export default signupModel; ss