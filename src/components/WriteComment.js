import React from "react";
import styled, { css } from "styled-components";
import palette from "../palette";

function WriteComment() {
  return (
    <WriteCommentForm>
      <Input type="text" name="user" placeholder="이름을 입력하세요" width="25%" />
      <Input type="text" name="text" placeholder="댓글을 입력하세요" width="100%" />
    </WriteCommentForm>
  );
}

const WriteCommentForm = styled.form``;

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

export default WriteComment;
