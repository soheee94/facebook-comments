import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CommentsList from "../components/CommentsList";
import { getComments, likeComment, removeComment } from "../modules/comments";

function CommentsContainer() {
  const dispatch = useDispatch();
  const parentComments = useSelector(state => state).filter(comment => !comment.comment_id);

  // 댓글리스트 가져오기
  useEffect(() => {
    dispatch(getComments());
  }, [dispatch]);

  // 댓글 좋아요
  const onClickLike = id => {
    dispatch(likeComment(id));
  };

  // 댓글 삭제
  const onRemove = id => {
    dispatch(removeComment(id));
  };

  return <CommentsList comments={parentComments} onClickLike={onClickLike} onRemove={onRemove} />;
}

export default CommentsContainer;
