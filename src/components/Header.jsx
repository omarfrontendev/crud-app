import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeClassName = "text-main opacity-100 font-medium text-[18px]";

  return (
    <header className="bg-black text-white flex items-center justify-center h-16 animate-slidedown">
      <div className="container px-2 mx-auto flex justify-between items-center">
        <NavLink to="/" className="text-xl font-bold text-main">
          CRUD App
        </NavLink>
        <div className="flex items-center justify-end gap-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? activeClassName
                : "text-neutral-300 opacity-80 font-medium text-[18px]"
            }
          >
            Posts
          </NavLink>
          <NavLink
            to="/post/add"
            className={({ isActive }) =>
              isActive
                ? activeClassName
                : "text-neutral-300 opacity-80 font-medium text-[18px]"
            }
          >
            Add
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
