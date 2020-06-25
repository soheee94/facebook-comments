import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CommentsList from "../components/CommentsList";
import { likeComment, removeComment } from "../modules/comments";

function CommentRepliesContainer({ id }) {
  const dispatch = useDispatch();
  const comments = useSelector(state => state);
  const replyComments = comments.filter(comment => comment.comment_id === id);

  // 댓글 좋아요
  const onClickLike = id => {
    dispatch(likeComment(id));
  };

  // 댓글 삭제
  const onRemove = id => {
    dispatch(removeComment(id));
  };

  return <CommentsList comments={replyComments} onClickLike={onClickLike} onRemove={onRemove} />;
}

export default CommentRepliesContainer;
