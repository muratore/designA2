import express from "express";
import { configDotenv } from "dotenv";
import { fileURLToPath } from 'url'
import path from "path"
import cors from "cors"
configDotenv();

const PORT = process.env.PORT;
const app = express();
const API = process.env.API;

// Enable CORS for all origins (not recommended for production)
app.use(cors());

const __filename = fileURLToPath(import.meta.url);  // Get the filename
const __dirname = path.dirname(__filename);         // Get the directory name

// OR, enable CORS for specific origins (recommended for production):
const corsOptions = {
  origin: `${API}`, // Replace with your frontend's origin
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Middlewares

// Routes
import userRouter from "./routes/UserRouter.js";
import jobRouter from "./routes/JobRouter.js";
app.use("/admin", userRouter);
app.use("/jobs", jobRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
