import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CommentsList from "../components/CommentsList";
import { getComments } from "../modules/comments";
import styled from "styled-components";

function CommentsContainer() {
  const dispatch = useDispatch();
  const comments = useSelector(state => state);
  const parentComments = comments && comments.filter(comment => !comment.comment_id);

  // 댓글리스트 가져오기
  useEffect(() => {
    dispatch(getComments());
  }, [dispatch]);

  if (!parentComments || parentComments.length === 0) {
    return <NoComments>댓글이 없습니다.</NoComments>;
  }
  return <CommentsList comments={parentComments} />;
}

const NoComments = styled.div`
  font-size: 0.875rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export default CommentsContainer;
