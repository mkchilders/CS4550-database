import model from "./model.js";

export const createQuiz = (quiz) => {
  delete quiz._id;
  return model.create(quiz);
};
export const findAllQuizzes = () => model.find();
export const findQuizById = (quizId) => model.find({ id: quizId });
export const updateQuiz = (quizId, quiz) =>
  model.updateOne({ _id: quizId }, { $set: quiz });
export const deleteQuiz = (quizId) => model.deleteOne({ id: quizId });
