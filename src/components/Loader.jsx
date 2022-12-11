import React from "react";

const Loader = () => {
  return (
    <div className="w-full h-full grid place-items-center">
      <span className="w-20 h-20 rounded-full border-8 border-black animate-spin border-t-transparent"></span>
    </div>
  );
};

export default Loader;
