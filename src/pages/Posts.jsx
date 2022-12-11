import React, { useEffect } from "react";
import { PostsList } from "../components";
import { useDispatch } from "react-redux";
import { getPosts } from "../redux/services";
const Posts = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getPosts());
  // }, [dispatch]);
  return (
    <div>
      <PostsList />
    </div>
  );
};

export default Posts;
