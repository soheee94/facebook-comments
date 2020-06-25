import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CommentsList from "../components/CommentsList";
import { getComments, likeComment, removeComment } from "../modules/comments";
import styled from "styled-components";

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

  return (
    <>
      {parentComments.length > 0 ? (
        <CommentsList comments={parentComments} onClickLike={onClickLike} onRemove={onRemove} />
      ) : (
        <NoComments>댓글이 없습니다.</NoComments>
      )}
    </>
  );
}

const NoComments = styled.div`
  font-size: 0.875rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export default CommentsContainer;
