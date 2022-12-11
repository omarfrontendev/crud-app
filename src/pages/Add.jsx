import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { PostForm } from "../components";
import { addPost } from "../redux/services";

const Add = () => {
  const navigate = useNavigate();
  const params = useParams().id;
  const dispatch = useDispatch();
  const [data, setData] = useState({});
  // const { postDetails, loading, error } = useSelector((state) => state.posts);

  const submitFormHandler = () => {
    dispatch(addPost(data))
      .unwrap()
      .then(() => {
        navigate("/");
      });
  };

  return (
    <PostForm
      button="Add"
      onSubmit={submitFormHandler}
      data={data}
      setData={setData}
    />
  );
};

export default Add;
