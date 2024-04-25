import mongoose from "mongoose";

const quizSchema = new mongoose.Schema(
  {
    id: String,
    title: String,
    course: String,
    description: String,
    isPublished: Boolean,
    quizType: {
      $type: String,
      enum: [
        "Graded Quiz",
        "Practice Quiz",
        "Graded Survey",
        "Ungraded Survey",
      ],
      default: "Graded Quiz",
    },
    points: Number,
    for: String,
    viewResponses: String,
    requireRespondus: Boolean,
    requiredViewResults: Boolean,
    assignmentGroup: {
      $type: String,
      enum: [
        "Quizzes", "Exams", "Assignments", "Project",
      ],
      default: "Quizzes",
    },
    shuffleAnswers: Boolean,
    timeLimit: Number,
    multipleAttempts: Boolean,
    showCorrectAnswers: Boolean,
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
        type: {
          $type: String,
          enum: ["Multiple Choice", "Fill in the Blank", "True/False"],
          default: "Multiple Choice",
        },
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
  { collection: "quizzes", typeKey: "$type" }
);

export default quizSchema;
