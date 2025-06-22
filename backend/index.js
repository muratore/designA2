import express from "express";
import { configDotenv } from "dotenv";
import { fileURLToPath } from 'url'
import path from "path"

configDotenv();

const PORT = process.env.PORT;
const app = express();
const API = process.env.API;

const __filename = fileURLToPath(import.meta.url);  // Get the filename
const __dirname = path.dirname(__filename);         // Get the directory name




app.use((req, res, next) => {
    const allowedOrigins = [
        'https://app.designa2.com.br'
    ];
    const origin = req.headers.origin;

    if (allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
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
