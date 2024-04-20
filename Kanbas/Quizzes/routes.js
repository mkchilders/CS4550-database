import * as dao from "./dao.js";

export default function QuizRoutes(app) {
  app.get("/api/courses/:cid/quizzes", async (req, res) => {
    const { cid } = req.params;
    const all_quizzes = await dao.findAllQuizzes();
    if (all_quizzes) {
      const course_quizzes = all_quizzes.filter((q) => q.course === cid);
      res.send(course_quizzes);
    } else {
      // empty case
      res.send(all_quizzes);
    }
  });

  app.get("/api/quizzes/:qid", async (req, res) => {
    const { qid } = req.params;
    try {
      const quiz = await dao.findQuizById(qid);
      res.send(quiz);
    } catch (error) {
      console.log(error);
    }
  });

  app.delete("/api/quizzes/:qid", async (req, res) => {
    const { qid } = req.params;
    const status = await dao.deleteQuiz(qid);
    res.sendStatus(200);
  });

  app.post("/api/courses/:cid/quizzes", async (req, res) => {
    const { cid } = req.params;
    const newQuiz = {
      ...req.body,
      title: "New Quiz",
      course: cid,
      description: "Example quiz",
      isPublished: false,
      quizType: "",
      points: 0,
      for: "Everyone",
      viewResponses: "Always",
      requireRespondus: false,
      requiredViewResults: false,
      assignmentGroup: "Quizzes",
      shuffleAnswers: false,
      timeLimit: 20,
      multipleAttempts: false,
      showCorrectAnswers: false,
      accessCode: "",
      oneQuestionAtATime: false,
      webcamRequired: false,
      lockQuestionsAfterAnswering: false,
      dueDate: "2024-04-01",
      availableDate: "2024-04-19",
      untilDate: "2024-05-01",
      questions: [],
    };
    const quiz_added = await dao.createQuiz(newQuiz);
    res.send(quiz_added);
  });

  app.put("/api/quizzes/:qid", async (req, res) => {
    const { qid } = req.params;
    try {
      await dao.updateQuiz(qid, req.body);
      res.sendStatus(200);
    } catch (error) {
      res.sendStatus(400);
    }
  });
}
