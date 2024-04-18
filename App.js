import express from "express";
import cors from "cors";

// import QuizRoutes from "./Kanbas/Courses/routes.js";
import mongoose from "mongoose";
import UserRoutes from "./Kanbas/Users/routes.js";
import QuizRoutes from "./Kanbas/Quizzes/routes.js";
import CourseRoutes from "./Kanbas/Courses/routes.js";
import ModuleRoutes from "./Kanbas/Modules/routes.js";

const CONNECTION_STRING =
  process.env.DB_CONNECTION_STRING || "mongodb://127.0.0.1:27017/kanbas";
mongoose.connect(CONNECTION_STRING);
const app = express();
app.use(cors());
app.use(express.json());
CourseRoutes(app);
QuizRoutes(app);
UserRoutes(app);
ModuleRoutes(app);

app.listen(process.env.PORT || 4000);
