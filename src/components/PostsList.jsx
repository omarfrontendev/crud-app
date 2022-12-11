import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ErrorPage from "../pages/ErrorPage";
import { getPosts } from "../redux/services";
import { Post, Loader } from "./";

const PostsList = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  if (loading) return <Loader />;
  if (error) return <ErrorPage />;
  return (
    <div className="flex flex-col gap-1">
      {posts?.map((post, i) => (
        <Post
          key={post.id}
          title={post?.title}
          description={post?.description}
          id={post.id}
          index={i}
        />
      ))}
    </div>
  );
};

export default PostsList;
