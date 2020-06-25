import React from "react";
import styled from "styled-components";
import CommentItem from "./CommentItem";
import { useDispatch } from "react-redux";
import { likeComment, removeComment } from "../modules/comments";

function CommentsList({ comments }) {
  const dispatch = useDispatch();
  // 댓글 좋아요
  const onClickLike = id => {
    dispatch(likeComment(id));
  };

  // 댓글 삭제
  const onRemove = id => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("댓글을 삭제하시겠습니까?")) {
      dispatch(removeComment(id));
    }
  };

  return (
    <CommentsListBlock>
      {comments.map(comment => (
        <CommentItem comment={comment} key={comment.id} onClickLike={onClickLike} onRemove={onRemove} />
      ))}
    </CommentsListBlock>
  );
}

const CommentsListBlock = styled.ul`
  flex: 1;
  overflow-y: auto;
  padding: 0.5rem 0;
  margin: 0;
`;

export default CommentsList;
