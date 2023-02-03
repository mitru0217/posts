import { useMemo } from "react";
// кастомный хук для . возвращает отсортированный массив
export const useSortedPosts = (posts, sort) => {
  const sortedPosts = useMemo(() => {
    if (sort) {
      return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
    }
    return posts;
  }, [sort, posts]);
  return sortedPosts;
};

// этот хук возвращает отфильтрованный и отсортированный массив
export const usePosts = (posts, sort, query) => {
  const sortedPosts = useSortedPosts(posts, sort);
  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(query)
    );
  }, [query, sortedPosts]);
  return sortedAndSearchedPosts;
};
