import React, { useState, useEffect } from "react";
import { Container, Title, CreatePost, CreatePostTitle } from "./Posts.styled";
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
import Select from "../../Components/UI/Select/Select";

function Post() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [isOpen, setIsOpen] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  // Получаем ссылку на последний элемент в Dom-дереве, за которым беудет следит IntersectionObserver
  // const lastElement = useRef();
  // Делаем ещё один ref, чтобы достать до observer
  // const observer = useRef();
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);

    /* Это для бескончного скролла */
    // setPosts([...posts, ...response.data]);

    /* Это когда пагинация по кнопкам */
    setPosts(response.data);

    const totalCount = response.headers["x-total-count"];

    setTotalPages(getPagesCount(totalCount, limit));
  });

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

  // // useEffect для бесконечного скролла
  // useEffect(() => {
  //   var callback = function (entries, observer) {
  //     // if (isPostLoading) return;
  //     if (observer.current) observer.current.disconnect();
  //     if (entries[0].isIntersecting && page < totalPages) {
  //       setPage(page + 1);
  //     }
  //   };
  //   // current это свойство useRef
  //   observer.current = new IntersectionObserver(callback);
  //   observer.current.observe(lastElement.current);
  // }, [isPostLoading]);

  useEffect(() => {
    fetchPosts(limit, page);
  }, [page, limit]);
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

      <Select
        value={limit}
        onChange={(value) => setLimit(value)}
        defaultValue='Total posts on the page'
        options={[
          { value: 5, name: "5" },
          { value: 10, name: "10" },
          { value: 25, name: "25" },
          { value: 50, name: "50" },
          { value: -1, name: "Show all" },
        ]}
      />

      {/* Это для бескончного скролла */}
      {/* <PostList posts={sortedAndSearchedPosts} remove={removePost} />
      <div ref={lastElement} style={{ height: 20, background: "red" }} />
      {isPostLoading && <Loader />} */}

      {/* Это когда пагинация по кнопкам */}
      {isPostLoading ? (
        <Loader />
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
