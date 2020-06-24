import React from "react";
import styled from "styled-components";
import WriteCommentContainer from "./containers/WriteCommentContainer";

function App() {
  return (
    <ContentBlock>
      <WriteCommentContainer />
    </ContentBlock>
  );
}

const ContentBlock = styled.div`
  background: white;
  width: 680px;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0 1px 2px #ccc;
`;

export default App;
