import mongoose from "mongoose";

const quizSchema = new mongoose.Schema(
  {
    id: String,
    title: String,
    course: String,
    description: String,
    isPublished: Boolean,
    quizType: String,
    points: Number,
    for: String,
    viewResponses: String,
    requireRespondus: Boolean,
    requiredViewResults: Boolean,
    assignmentGroup: String,
    shuffleAnswers: Boolean,
    timeLimit: Number,
    multipleAttempts: Boolean,
    showCorrectAnswers: String,
    accessCode: String,
    oneQuestionAtATime: Boolean,
    webcamRequired: Boolean,
    lockQuestionsAfterAnswering: Boolean,
    dueDate: String,
    availableDate: String,
    untilDate: String,
    questions: [
      {
        id: String,
        type: String,
        title: String,
        points: Number,
        question: String,
        blanks: [
          {
            id: Number,
            answer: String,
          },
        ],
        choices: [
          {
            id: Number,
            answer: String,
            isCorrect: Boolean,
          },
        ],
        trueFalse: Boolean,
      },
    ],
  },
  { collection: "quizzes" }
);

export default quizSchema;
