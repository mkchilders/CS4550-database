import Database from "../Database/index.js";

export default function QuizRoutes(app) {
  app.get("/api/courses/:cid/quizzes", (req, res) => {
    const { cid } = req.params;
    const quizzes = Database.quizzes.filter((q) => q.course === cid);
    res.send(quizzes);
  });

  app.delete("/api/quizzes/:qid", (req, res) => {
    const { qid } = req.params;
    Database.quizzes = Database.quizzes.filter((q) => q.id !== qid);
    res.sendStatus(204);
  });

  app.post("/api/courses/:cid/quizzes", (req, res) => {
    const { cid } = req.params;
    const newQuiz = {
      ...req.body,
      course: cid,
      id: new Date().getTime().toString(),
    };
    res.send(newQuiz);
  });
}
