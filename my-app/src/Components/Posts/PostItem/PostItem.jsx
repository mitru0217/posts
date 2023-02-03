import React from "react";
import { Item, Info, Title, Text } from "../PostItem/PostItem.styled";
import Button from "../../UI/Button/Button";
const PostItem = ({ id, title, body, onDeletePost }) => {
  return (
    <Item key={id}>
      <Title>
        {id}.{title}
      </Title>
      <Info>
        <Text>{body}</Text>
        <Button type='button' onClick={() => onDeletePost(id)}>
          Delete
        </Button>
      </Info>
    </Item>
  );
};

export default PostItem;
