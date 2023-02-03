import React, { useState, useEffect } from "react";
import { Container, Title, CreatePost, CreatePostTitle } from "./Post.styled";
import PostForm from "../../Components/PostForm/PostForm";
import PostList from "../../Components/Posts/PostList/PostList";
import PostFilter from "../../Components/PostFilter/PostFilter";
import Modal from "../../Components/UI/Modal/Modal";
import Button from "../../Components/UI/Button/Button";
import { usePosts } from "../../Hooks/usePosts";
import PostService from "../../API/PostService";
import Loader from "../../Components/UI/Loader/Loader";
import { useFetching } from "../../Hooks/useFetching";
import { getPagesCount } from "../../Components/Utils/pages";
import Pagination from "../../Components/UI/Pagination/Pagination";

function Post() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [isOpen, setIsOpen] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
    // setTimeout делаем для того, чтобы загрузка произошла, через 1с.
    // Это для примера, чтобы было видно Loading
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers["x-total-count"];
    setTotalPages(getPagesCount(totalCount, limit));
  });

  // Это для пагинации

  // Вариант с разными значениями для инпута
  // const [title, setTitle] = useState("");
  // const [text, setText] = useState("");

  // const newId = parseInt(posts.length) + 1;

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //    // Вариант с разными значениями для инпута
  //   // const newPost = {
  //   //   id: newId,
  //   //   post.title,
  //   //   text,
  //   // };
  //   // setPosts([...posts, newPost]);
  //   //   setTitle("");
  //   //   setText("");
  //   // -------------------------------
  //  // Вариант с объединёнными значениями для инпута
  //   // setPosts([...posts, { ...post, id: newId }]);
  //   // setPost({ title: "", text: "" });
  // };

  // [] оставляем пустым, чтобы этот useEffect отработал только один раз при монтировании
  useEffect(() => {
    fetchPosts();
  }, [page]);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  // Функция для передачи newPost из дочернего элемента
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    closeModal();
  };
  // Получаем post.id =postId из дочернего элемента
  const removePost = (postId) => {
    setPosts(posts.filter((p) => p.id !== postId));
  };

  const changePage = (page) => {
    setPage(page);
  };
  return (
    <Container>
      <Title>Posts</Title>
      <CreatePost>
        <CreatePostTitle>Create the new post:</CreatePostTitle>
        <Button onClick={openModal}>Create</Button>
      </CreatePost>

      <PostFilter filter={filter} setFilter={setFilter} />
      {postError && <h2>Mistake. Try again</h2>}
      {isPostLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
            marginBottom: "30px",
          }}
        >
          <Loader />
        </div>
      ) : (
        <PostList posts={sortedAndSearchedPosts} remove={removePost} />
      )}
      {/* Создаём кнопки для пагинации */}
      <Pagination totalPages={totalPages} page={page} changePage={changePage} />
      {isOpen && (
        <Modal closeModal={closeModal}>
          <PostForm create={createPost} />
        </Modal>
      )}
    </Container>
  );
}
export default Post;
