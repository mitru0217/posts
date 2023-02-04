import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const MyHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 4px solid teal;

  > nav {
    display: flex;
  }
`;
export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  font-size: 24px;
  color: teal;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }

  &.active {
    color: white;
    background-color: orangered;
  }
`;
