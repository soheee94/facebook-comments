import React from "react";
import { useSelector } from "react-redux";
import CommentsList from "../components/CommentsList";

function CommentRepliesContainer({ id }) {
  const comments = useSelector(state => state);
  const replyComments = comments.filter(comment => comment.comment_id === id);

  return <>{replyComments.length > 0 && <CommentsList comments={replyComments} />}</>;
}

export default CommentRepliesContainer;
