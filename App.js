import express from "express";
import cors from "cors";
import QuizRoutes from "./Kanbas/Courses/routes.js";
import mongoose from "mongoose";
import UserRoutes from "./Kanbas/Users/routes.js";

const CONNECTION_STRING =
  process.env.DB_CONNECTION_STRING || "mongodb://127.0.0.1:27017/kanbas";
mongoose.connect(CONNECTION_STRING);
const app = express();
app.use(cors());
app.use(express.json());
QuizRoutes(app);
UserRoutes(app);

app.listen(process.env.PORT || 4000);

app.get("/kanbas/hello", (req, res) => {
  console.log("gets here");
  res.send("Hello from Seaqueue");
});
