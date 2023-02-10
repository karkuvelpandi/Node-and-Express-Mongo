import mongoose from "mongoose";

let userSchema = mongoose.Schema;

let schema = new userSchema({
  name: {
    type: String,
    required: true,
  },
});

let User = mongoose.model("user", schema);
export default User;
