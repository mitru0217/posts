import styled from "@emotion/styled";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 17%;
  width: 1250px;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const MyModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  border-radius: 16px;
  background: #ffe5cc;
  transform: translate(-50%, -50%);
  padding: 16px;

  width: 600px;
`;
