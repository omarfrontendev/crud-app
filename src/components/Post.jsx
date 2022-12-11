import React from "react";
import { deletePost } from "../redux/services";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Post = ({ title, description, id, index }) => {
  const dispatch = useDispatch();
  const { errorDelete, loadingDelete } = useSelector((state) => state.posts);

  return (
    <div
      className={`flex items-center border-spacing-1 even:bg-sky-100 bg-white animate-slideup text-center font-medium h-[56px] ${
        errorDelete ? "blur-md" : "blur-none"
      }`}
    >
      <span className="font-medium w-[80px] border-r-2 border-black h-full flex items-center justify-center">
        #{id}
      </span>
      <p className="w-[380px] h-full flex justify-center items-center truncate max-w-full border-r-2 border-black">
        {title}
      </p>
      <p className="p-4 h-full justify-center items-center border-black basis-[65%]">
        {description}
      </p>
      <div className="flex h-full justify-center items-center border-r-2 border-black gap-2 pr-3">
        <Link
          to={`/post/${id}/edit`}
          className="bg-green-400 text-white min-w-[50px] py-2 rounded-md text-sm"
        >
          Edit
        </Link>
        <button
          className="bg-red-400 text-white min-w-[50px] py-2 rounded-md text-sm disabled:cursor-not-allowed disabled:opacity-50"
          onClick={() => {
            if (
              window.confirm(`Do you really want to Delete "${title}" Post?`)
            ) {
              dispatch(deletePost(id));
            }
          }}
          disabled={loadingDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Post;
