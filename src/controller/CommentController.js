import commentData from '../data/CommentData';

export const getCommentsByProductId = (productId) => {
  return commentData.filter(comment => comment.productId === productId);
};
