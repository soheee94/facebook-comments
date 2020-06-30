import React from "react";
import { useSelector } from "react-redux";
import CommentsList from "../components/CommentsList";

function CommentRepliesContainer({ id }) {
  const comments = useSelector(state => state);
  const replyComments = comments && comments.filter(comment => comment.ref_comment_id === id);

  if (!replyComments || replyComments.length === 0) {
    return null;
  }
  return <CommentsList comments={replyComments} />;
}

export default CommentRepliesContainer;
