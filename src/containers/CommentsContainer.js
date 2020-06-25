import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CommentsList from "../components/CommentsList";
import { getComments } from "../modules/comments";
import styled from "styled-components";

function CommentsContainer() {
  const dispatch = useDispatch();
  const parentComments = useSelector(state => state).filter(comment => !comment.comment_id);

  // 댓글리스트 가져오기
  useEffect(() => {
    dispatch(getComments());
  }, [dispatch]);

  return <>{parentComments.length > 0 ? <CommentsList comments={parentComments} /> : <NoComments>댓글이 없습니다.</NoComments>}</>;
}

const NoComments = styled.div`
  font-size: 0.875rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export default CommentsContainer;
