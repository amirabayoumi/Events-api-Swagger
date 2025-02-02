// Imports
import "dotenv/config";
import cors from "cors";
import express from "express";
import eventRouters from "./routes/eventsRoutes";
import swaggerUi from "swagger-ui-express";
import { specs } from "./swagger";
import mongoose from "mongoose";





// Variables
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/v1/events", eventRouters);
//swagger docs

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.get("*", (req, res) => {
  res.status(404).json({ message: "Route not found" });
});


// Database connection


// Server Listening
app.listen(PORT, async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI environment variable is not set");
    }
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`Server listening on port ${PORT}`);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
});