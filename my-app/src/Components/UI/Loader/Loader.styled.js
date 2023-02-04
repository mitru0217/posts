import styled from "@emotion/styled";

export const WrappperLoader = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 30px;
`;
export const MyLoader = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 3px dashed teal;
  animation: rotate 1s infinite linear;
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg) scale(1.4);
    }
  }
`;
