import React from "react";
// import { CSSTransition, TransitionGroup } from "react-transition-group";
import PostItem from "../PostItem/PostItem";
import { List, Title, Total, NotPost } from "../PostList/PostList.styled";
// import "../PostList/PostList.css";
const PostList = ({ posts, remove }) => {
  return (
    <List>
      <Title>List of Posts</Title>
      {posts.length > 0 ? (
        <Total>Total posts: {posts.length}</Total>
      ) : (
        <NotPost>There are not post yet</NotPost>
      )}
      {posts.map(({ id, title, body }) => (
        <PostItem
          key={id}
          id={id}
          title={title}
          body={body}
          onDeletePost={remove}
        />
      ))}
    </List>
  );
};

export default PostList;
