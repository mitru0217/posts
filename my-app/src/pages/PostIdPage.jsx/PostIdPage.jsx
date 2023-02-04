import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../../Hooks/useFetching";
import PostService from "../../API/PostService";
import Loader from "../../Components/UI/Loader/Loader";
import { Container } from "../Posts/Posts.styled";
import { PageWrapper, Title, Text, Email, Comment } from "./PostIdPage.styled";

const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [fetchPostById, isLoading, error] = useFetching(async () => {
    const response = await PostService.getById(params.id);
    setPost(response.data);
  });

  const [fetchComments, isCommentsLoading, errorComments] = useFetching(
    async () => {
      const response = await PostService.getCommentsByPostId(params.id);
      setComments(response.data);
    }
  );

  useEffect(() => {
    fetchPostById();
    fetchComments();
  }, []);
  return (
    <Container>
      {isLoading ? (
        <Loader />
      ) : (
        <PageWrapper>
          <Title>
            {post.id}.{post.title}
          </Title>
          <Text>{post.body}</Text>
        </PageWrapper>
      )}
      {isCommentsLoading ? (
        <Loader />
      ) : (
        <PageWrapper>
          <Title>Comments:</Title>
          {comments.map((com) => (
            <Comment>
              <Email>{com.email}</Email>
              <Text>{com.body}</Text>
            </Comment>
          ))}
        </PageWrapper>
      )}

      {errorComments && <h2>Mistake. Try again</h2>}
      {error && <h2>Mistake. Try again</h2>}
    </Container>
  );
};

export default PostIdPage;
