import React from "react";
import styled from "styled-components";
import CommentItem from "./CommentItem";

function CommentsList({ comments, onClickLike, onRemove }) {
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
`;

export default CommentsList;
