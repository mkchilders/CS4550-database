import express from "express";
import cors from "cors";
import QuizRoutes from "./Kanbas/Quizzes/routes.js";
import CourseRoutes from "./Kanbas/Courses/routes.js";
import ModuleRoutes from "./Kanbas/Modules/routes.js";

const app = express();
app.use(cors());
app.use(express.json());
CourseRoutes(app);
QuizRoutes(app);
ModuleRoutes(app);

app.listen(process.env.PORT || 4000);
