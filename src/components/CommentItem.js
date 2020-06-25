import React, { useState } from "react";
import styled from "styled-components";
import palette from "../palette";
import CommentLikes from "./CommentLikes";
import CommentRepliesContainer from "../containers/CommentRepliesContainer";
import WriteCommentContainer from "../containers/WriteCommentContainer";
import { formatDate } from "../utils";

function CommentItem({ comment, onClickLike, onRemove }) {
  const { id, user, created_at, text, like_count } = comment;
  const [open, setOpen] = useState(false);

  return (
    <CommentItemBlock>
      <UserImage></UserImage>
      <CommentContent>
        <CommentText>
          <p>{user}</p>
          <p>{text}</p>
          {like_count > 0 && <CommentLikes count={like_count} />}
        </CommentText>
        <CommentActions>
          <li>
            <span onClick={() => onClickLike(id)}>좋아요</span>
          </li>
          <li>
            <span onClick={() => setOpen(!open)}>답글 달기</span>
          </li>
          <li>
            <span onClick={() => onRemove(id)}>삭제</span>
          </li>

          <li>{formatDate(created_at)}</li>
        </CommentActions>
        {open && <WriteCommentContainer id={id} setOpen={setOpen} />}
        <CommentRepliesContainer id={id} />
      </CommentContent>
    </CommentItemBlock>
  );
}

const CommentItemBlock = styled.li`
  display: flex;
  margin-bottom: 1rem;
  font-size: 0.875rem;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const UserImage = styled.div`
  background: gray;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  margin-right: 0.5rem;
`;

const CommentContent = styled.div`
  flex: 1;
`;

const CommentText = styled.div`
  background: ${palette.lightGray};
  border-radius: 1rem;
  padding: 10px 12px 9px 12px;
  position: relative;

  p:first-of-type {
    font-weight: bold;
  }
`;

const CommentActions = styled.ul`
  padding: 5px 0px 5px 12px;
  display: flex;
  color: ${palette.gray};

  li {
    font-size: 0.75rem;

    &:not(:last-of-type):after {
      content: "·";
      margin: 0 0.25rem;
    }
  }

  span {
    font-weight: bold;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export default CommentItem;
