import styled from "@emotion/styled";

export const MyInput = styled.input`
  width: 250px;
  padding: 8px 16px;
  margin-bottom: 16px;
  color: teal;
  font-size: 16px;
  background: transparent;
  border: 1px solid teal;
  border-radius: 4px;
  &::-webkit-input-placeholder {
    color: teal;
  }
  &:hover {
    color: blueviolet;
    border: 1px solid blueviolet;
  }
`;
