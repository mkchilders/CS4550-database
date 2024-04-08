import express from "express";
import cors from "cors";
import QuizRoutes from "./Kanbas/Courses/routes.js";

const app = express();
app.use(cors());
app.use(express.json());
QuizRoutes(app);

app.listen(process.env.PORT || 4000);

app.get("/kanbas/hello", (req, res) => {
  console.log("gets here");
  res.send("Hello from Seaqueue");
});
