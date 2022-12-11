import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Loader, PostForm } from "../components";
import { getSinglePost, updatePost } from "../redux/services";
import ErrorPage from "./ErrorPage";

const Edit = () => {
  const navigate = useNavigate();
  const params = useParams().id;
  const dispatch = useDispatch();
  const [data, setData] = useState({});
  const { postDetails, loading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getSinglePost(params));
  }, [dispatch, params]);

  useEffect(() => {
    if (postDetails) {
      setData(postDetails);
    }
  }, [postDetails]);

  const submitFormHandler = () => {
    dispatch(updatePost(data))
      .unwrap()
      .then(() => {
        navigate("/");
      });
  };

  if (loading) return <Loader />;
  if (error) return <ErrorPage />;

  return (
    <PostForm
      button="Edit"
      onSubmit={submitFormHandler}
      data={data}
      setData={setData}
    />
  );
};

export default Edit;
