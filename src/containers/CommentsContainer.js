import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CommentsList from "../components/CommentsList";
import { getComments, likeComment, removeComment } from "../modules/comments";

function CommentsContainer() {
  const dispatch = useDispatch();
  const comments = useSelector(state => state);

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

  return <CommentsList comments={comments} onClickLike={onClickLike} onRemove={onRemove} />;
}

export default CommentsContainer;
