import mongoose from "../db/conn.js";
import { Schema } from "mongoose";

const jobSchema = new Schema(
  {
    client: {
      type: String,
      required: true,
    },
    projectName: {
      type: String,
      required: true,
    },
    jobType: {
      type: String,
      enum: ["web", "editorial", "brand"],
      required: true,
    },
    images: {
      type: Array,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Job = mongoose.model("Job", jobSchema);
export default Job;
