import React from "react";
import styled from "styled-components";
import CommentItem from "./CommentItem";
import palette from "../palette";

function CommentsList({ comments }) {
  return (
    <CommentsListBlock>
      {comments.map(comment => (
        <CommentItem comment={comment} key={comment.id} />
      ))}
    </CommentsListBlock>
  );
}

const CommentsListBlock = styled.ul`
  padding-top: 1rem;
`;

export default CommentsList;
