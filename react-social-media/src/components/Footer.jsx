import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3  border-top bg-black text-white">
        <p className="md:col-4 mb-0 fg-2">© 2026 Company, Inc</p>

        <a
          href="/"
          className="md:col-4 d-flex align-items-center justify-content-center mb-3 md:mb-0 md:me-auto theme-inverse text-decoration-none"
          aria-label="Bootstrap"
        >
          <svg className="bi me-2" width="40" height="32" aria-hidden="true">
            <use href="#bootstrap"></use>
          </svg>
        </a>

        <ul className="nav md:col-4 justify-content-end">
          <li className="nav-item">
            <a href="#" className="nav-link px-2 fg-2 text-white">
              Home
            </a>
          </li>

          <li className="nav-item">
            <a href="#" className="nav-link px-2 fg-2 text-white">
              Features
            </a>
          </li>

          <li className="nav-item">
            <a href="#" className="nav-link px-2 fg-2 text-white">
              Pricing
            </a>
          </li>

          <li className="nav-item">
            <a href="#" className="nav-link px-2 fg-2 text-white">
              FAQs
            </a>
          </li>

          <li className="nav-item">
            <a href="#" className="nav-link px-2 fg-2 text-white">
              About
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
