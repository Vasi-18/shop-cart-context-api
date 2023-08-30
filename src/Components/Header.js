import React, { useContext } from "react";
import { Link } from "react-router-dom";
import DataContext from "../Context/DataContext";

const Header = () => {
  const { cartValue } = useContext(DataContext);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container px-4 px-lg-5">
          <a className="navbar-brand text-danger" href="#!">
            Shop-Mart
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  About
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  href="#!"
                >
                  Shop
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <Link to="/cart">
                <button className="btn btn-outline-dark" type="submit">
                  <i className="bi-cart-fill me-1"></i>
                  Cart
                  <span
                    className="badge bg-dark text-white ms-1 rounded-pill"
                    id="Cart"
                  >
                    {cartValue}
                  </span>
                </button>
              </Link>
            </form>
          </div>
        </div>
      </nav>
      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder ">V-Mart</h1>
            <p className="lead fw-normal text-white-50 mb-0">
              IF YOU CAN'T STOP THINKING ABOUT IT{" "}
              <span className="h3" id="qoutes">
                JUST BUY IT..
              </span>
            </p>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
