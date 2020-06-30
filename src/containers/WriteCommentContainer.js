import React from "react";
import { useDispatch, useSelector } from "react-redux";
import WriteComment from "../components/WriteComment";
import { writeComment } from "../modules/comments";
import { generateRandomID } from "../utils";

function WriteCommentContainer({ id, setWriteReplyCommentOpen }) {
  const dispatch = useDispatch();
  const comments = useSelector(state => state);

  const onWrite = data => {
    const { user, comment } = data;
    const refComment = comments.find(comment => comment.id === id);
    const newComment = {
      id: generateRandomID(),
      user: user,
      text: comment,
      created_at: Date.now(),
      like_count: 0,
      ref_comment_id: id || null,
      origin_comment_id: id ? refComment.origin_comment_id || id : null
    };
    dispatch(writeComment(newComment));
    // 답글 달기일 경우 창 닫기
    if (id) setWriteReplyCommentOpen(false);
  };

  return <WriteComment onWrite={onWrite} />;
}

export default WriteCommentContainer;
