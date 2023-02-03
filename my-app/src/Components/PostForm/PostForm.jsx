import React, { useState } from "react";
import { Form } from "../PostForm/PostForm.styled";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";

const PostForm = ({ create }) => {
  const [post, setPost] = useState({
    id: "",
    title: "",
    body: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    create(newPost);
    setPost({ title: "", body: "" });
  };

  return (
    <Form>
      <Input
        type='text'
        placeholder='title of post'
        value={post.title}
        // onChange={(e) => setTitle(e.target.value)}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
      />
      <Input
        type='text'
        placeholder='about post'
        value={post.text}
        // onChange={(e) => setText(e.target.value)}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
      />

      <Button type='submit' onClick={handleSubmit}>
        Add post
      </Button>
    </Form>
  );
};

export default PostForm;
