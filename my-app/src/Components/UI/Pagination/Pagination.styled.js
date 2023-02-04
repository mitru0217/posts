import styled from "@emotion/styled";

export const PaginationWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  justify-content: center;
`;
export const Pages = styled.span`
  padding: 10px;
  border: 1px solid teal;
  margin-right: 4px;
  color: teal;
  cursor: pointer;

  &:active {
    color: orange;
    border: 1px solid orange;
    font-weight: bold;
  }
`;
