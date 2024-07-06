import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import morgan from "morgan";
import authRoute from "./routes/authRoute.js";
import productRoute from "./routes/productRoute.js";
import { middlewareError } from "./middleware/error.js";

//configure env
dotenv.config();

//database connection

connectDB();

//rest Object
const server = express();

// middleware
server.use(cors());
server.use(express.json());
server.use(morgan("dev"));

// Routes
server.use("/api/v1/auth", authRoute);
server.use("/api/v1/item", productRoute);

// Validations middleware

server.use(middlewareError);

// rest api
server.get("/", (req, res) => {
  res.send("New Project");
});

const port = process.env.PORT || 8080;

server.listen(port, () => {
  console.log(
    `server is running on ${process.env.DEV_MODE} mode  on port ${port}`
  );
});
