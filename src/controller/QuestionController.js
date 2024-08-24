import questionData from '../data/QuestionData';

export const getQuestionByProductId = (productId) => {
  return questionData.filter(question => question.productId === productId);
};


