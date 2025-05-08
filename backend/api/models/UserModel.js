import mongoose from "../db/conn.js";
import { Schema } from "mongoose";

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    // adm: {
    //   type: Boolean,
    //   required: true,
    // },
  },
  { timestamps: true }
);

const Adm = mongoose.model("Adm", UserSchema);

export default Adm;
