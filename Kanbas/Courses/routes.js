import Database from "../Database/index.js";

export default function QuizRoutes(app) {
  app.get("/api/courses/:cid/quizzes", (req, res) => {
    const { cid } = req.params;
    const quizzes = Database.quizzes.filter((q) => q.course === cid);
    res.send(quizzes);
  });

  app.get("/api/quiz/:id", (req, res) => {
    const { qid } = req.params;
    const quiz = Database.quizzes.find((q) => {
      q.id === qid;
    });
    res.send(quiz);
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
      isPublished: false,
      questions: [],
      points: 0,
      title: "new Quiz",
    };
    Database.quizzes.unshift(newQuiz);
    res.send(newQuiz);
  });
}
