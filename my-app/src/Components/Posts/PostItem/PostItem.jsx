import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Item,
  Info,
  Title,
  Text,
  ButtonsWrapper,
} from "../PostItem/PostItem.styled";
import Button from "../../UI/Button/Button";
const PostItem = ({ id, title, body, onDeletePost }) => {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/posts/${id}`, { replace: true });
  }
  return (
    <Item key={id}>
      <Title>
        {id}.{title}
      </Title>
      <Info>
        <Text>{body}</Text>
        <ButtonsWrapper>
          <Button type='button' onClick={handleClick}>
            Open
          </Button>
          <Button type='button' onClick={() => onDeletePost(id)}>
            Delete
          </Button>
        </ButtonsWrapper>
      </Info>
    </Item>
  );
};

export default PostItem;
