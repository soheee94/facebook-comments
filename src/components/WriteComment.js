import React, { useState } from "react";
import styled, { css } from "styled-components";
import palette from "../palette";

function WriteComment({ onWrite }) {
  const [user, setUser] = useState("");
  const [comment, setComment] = useState("");

  const onSubmit = e => {
    // 새로고침 방지
    e.preventDefault();
    onWrite({
      user,
      comment
    });
    // Input 초기화
    setUser("");
    setComment("");
  };

  return (
    <WriteCommentForm onSubmit={onSubmit}>
      <Input type="text" name="user" value={user} onChange={e => setUser(e.target.value)} placeholder="이름을 입력하세요" width="25%" required />
      <Input
        type="text"
        name="comment"
        value={comment}
        onChange={e => setComment(e.target.value)}
        placeholder="댓글을 입력 후 엔터키를 누르세요"
        width="100%"
        required
      />
      <input type="submit" style={{ display: "none" }} />
    </WriteCommentForm>
  );
}

const WriteCommentForm = styled.form`
  border-top: 1px solid #ccc;
  margin-top: 1rem;
  padding-top: 1rem;
`;

const Input = styled.input`
  background: ${palette.lightGray};
  border: none;
  border-radius: 1rem;
  padding: 10px 12px 9px 12px;
  display: block;
  margin-bottom: 0.5rem;

  ${props =>
    props.width &&
    css`
      width: ${props.width};
    `}

  &:focus {
    outline: none;

    ::placeholder {
      color: #adb5bd;
    }
  }
`;

export default React.memo(WriteComment);
