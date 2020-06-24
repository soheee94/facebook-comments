import React from "react";
import styled from "styled-components";
import likeIcon from "../assets/like.png";
import palette from "../palette";

function CommentLikes({ count }) {
  return (
    <CommentLikeBlock>
      <img src={likeIcon} alt="좋아요 아이콘" />
      <span>{count}</span>
    </CommentLikeBlock>
  );
}

const CommentLikeBlock = styled.div`
  background: white;
  display: flex;
  align-items: center;
  position: absolute;
  border-radius: 1rem;
  box-shadow: 0 1px 2px #ccc;
  right: 0.5rem;
  bottom: -0.5rem;
  padding: 0.125rem 0.25rem 0.125rem 0.125rem;
  color: ${palette.gray};
  img {
    width: 1rem;
    height: 1rem;
  }
`;

export default CommentLikes;
