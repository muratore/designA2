import express from "express";
import { configDotenv } from "dotenv";
import { fileURLToPath } from 'url'
import path from "path"
import cors from "cors"
configDotenv();

const PORT = process.env.PORT;
const app = express();
const API = process.env.API;

const __filename = fileURLToPath(import.meta.url);  // Get the filename
const __dirname = path.dirname(__filename);         // Get the directory name

// app.use(cors())
// // OR, enable CORS for specific origins (recommended for production):
// const corsOptions = {
//   origin: `${API}`, // Replace with your frontend's origin
//   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }
// app.use(cors(corsOptions));

app.use((req, res, next) => {
    const allowedOrigins = [
        'http://localhost:5173',
        'https://design-a2.vercel.app'
    ];
    const origin = req.headers.origin;

    if (allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Add other headers your frontend might send
    res.setHeader('Access-Control-Allow-Credentials', true); // If you're sending cookies/auth headers
    next();
});
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
