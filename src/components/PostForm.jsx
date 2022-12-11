import React from "react";

const PostForm = ({ button, onSubmit, data, setData }) => {
  const submitFormHandler = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form
      className="mx-auto w-[400px] max-w-full animate-slideup"
      onSubmit={submitFormHandler}
    >
      <h2 className="text-3xl text-center mb-6 font-bold text-main">
        Edit The Post
      </h2>
      <div className="flex flex-col">
        <label htmlFor="title" className="text-xl font-medium mb-2">
          Title:
        </label>
        <input
          type="text"
          id="title"
          className="py-2 px-4 outline-none focus:border-main border-[1px] rounded-[4px] mb-8"
          onChange={(e) =>
            setData({
              ...data,
              title: e.target.value,
            })
          }
          value={data.title || ""}
          autoFocus
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="description" className="text-xl font-medium mb-2">
          Description:
        </label>
        <textarea
          type="text"
          id="description"
          className="py-2 px-4 outline-none focus:border-main border-[1px] rounded-[4px] mb-4 resize-none min-h-[150px]"
          onChange={(e) =>
            setData({
              ...data,
              description: e.target.value,
            })
          }
          value={data.description || ""}
        />
      </div>
      <button
        className="mx-auto block bg-black text-main text-xl w-48 h-10 rounded-[4px] font-medium"
        type="submit"
      >
        {button}
      </button>
    </form>
  );
};

export default PostForm;
