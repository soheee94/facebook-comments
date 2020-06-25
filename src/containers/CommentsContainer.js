import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CommentsList from "../components/CommentsList";
import { getComments } from "../modules/comments";

function CommentsContainer() {
  const dispatch = useDispatch();
  const comments = useSelector(state => state);

  // 댓글리스트 가져오기
  useEffect(() => {
    dispatch(getComments());
  }, [dispatch]);

  return <CommentsList comments={comments} />;
}

export default CommentsContainer;
