import React from "react";
import { useDispatch } from "react-redux";
import WriteComment from "../components/WriteComment";
import { writeComment } from "../modules/comments";

function WriteCommentContainer() {
  const dispatch = useDispatch();

  const onWrite = data => {
    dispatch(writeComment(data));
  };

  return <WriteComment onWrite={onWrite} />;
}

export default WriteCommentContainer;
