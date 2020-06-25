// 액션 타입
// 댓글 리스트
const GET_COMMENTS = "GET_COMMENTS";
// 댓글 작성
const WRITE_COMMENT = "WRITE_COMMENT";
// 댓글 좋아요
// 댓글 삭제
// 댓글의 답글 작성

// 초기 상태
const initialState = [];

// 액션 생성 함수
export const getComments = () => ({
  type: GET_COMMENTS
});
export const writeComment = data => ({
  type: WRITE_COMMENT,
  payload: data
});

export default function comments(state = initialState, action) {
  switch (action.type) {
    case GET_COMMENTS:
      return JSON.parse(localStorage.getItem("comments")) || [];
    case WRITE_COMMENT:
      return state.concat(action.payload);
    default:
      return state;
  }
}
