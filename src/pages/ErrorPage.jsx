import React from "react";
// import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  // const error = useRouteError();

  return (
    <div className="fixed inset-0 h-screen w-screen bg-red-100 flex flex-col items-center justify-center text-red-900">
      <h1 className="text-4xl font-semibold mb-5">Oops!</h1>
      <p className="text-2xl mb-2 font-medium">Sorry, Something Wrong!</p>
      {/* <p className="text-[80px] font-bold">{error.message}</p> */}
      {/* <Link
        to="/"
        replace
        className="px-4 py-2 text-white bg-black rounded-md text-xl mt-4"
      >
        Go Back Home
      </Link> */}
    </div>
  );
};

export default ErrorPage;
