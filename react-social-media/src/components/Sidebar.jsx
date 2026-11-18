import React from "react";

const Sidebar = ({ clickData, setClickData }) => {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 my-sidebar p-3 bg-black"
      style={{ width: "280px", minHeight: "900px" }}
      data-bs-theme="dark"
    >
      <a
        href="/"
        className="d-flex align-items-center mb-3 md:mb-0 md:me-auto text-white  text-decoration-none"
      >
        <svg
          className="bi pe-none me-2"
          width="40"
          height="32"
          aria-hidden="true"
        >
          <use href="#bootstrap"></use>
        </svg>

        <span className="fs-xl">Sidebar</span>
      </a>

      <hr />

      <ul className="nav nav-pills flex-column align-items-start mb-auto w-100">
        <li className="nav-item w-100">
          <a
            href="#"
            className={`nav-link w-100 ${
              clickData === "Home" ? "active" : "text-white"
            }`}
            onClick={() => setClickData("Home")}
          >
            Home
          </a>
        </li>

        <li className="w-100">
          <a
            href="#"
            className={`nav-link w-100 ${
              clickData === "createPost" ? "active" : "text-white"
            }`}
            onClick={() => setClickData("createPost")}
          >
            Create Post
          </a>
        </li>
      </ul>

      <hr />
    </div>
  );
};

export default Sidebar;
