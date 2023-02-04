import styled from "@emotion/styled";

export const Container = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100vw;
  max-width: 100%;
  overflow-x: hidden;
  margin: 0 auto;
  padding-top: 32px;
  padding-left: 16px;
  padding-right: 16px;
  /* background-color: #ffe5cc; */
`;
export const Title = styled.h1`
  margin: 0;
  text-align: center;
  margin-bottom: 16px; /* padding: 16px; */
  font-size: 64px;
  color: teal;
`;
export const CreatePost = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-bottom: 24px;
  border: 2px solid teal;
`;
export const CreatePostTitle = styled.h3`
  color: teal;
`;
