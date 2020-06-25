import React from "react";
import { useDispatch } from "react-redux";
import WriteComment from "../components/WriteComment";
import { writeComment } from "../modules/comments";

function WriteCommentContainer({ id }) {
  const dispatch = useDispatch();

  const onWrite = data => {
    if (id) data.comment_id = id;
    dispatch(writeComment(data));
  };

  return <WriteComment onWrite={onWrite} />;
}

export default WriteCommentContainer;
