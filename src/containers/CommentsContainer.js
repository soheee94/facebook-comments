import React from "react";
import CommentsList from "../components/CommentsList";

function CommentsContainer() {
  const comments = [
    {
      id: 1,
      user: "테스터",
      created_at: "2020-06-24",
      text: "댓글을 작성해보아요",
      like_count: 11,
      replies: [
        {
          id: 22,
          user: "테스터",
          created_at: "2020-06-24",
          text: "댓글의 답글을 작성해보아요",
          like_count: 11,
          replies: []
        }
      ]
    },
    {
      id: 333,
      user: "박미나",
      created_at: "2020-06-24",
      text: "댓글을 작성해보아요",
      like_count: 11,
      replies: []
    }
  ];
  return <CommentsList comments={comments} />;
}

export default CommentsContainer;
