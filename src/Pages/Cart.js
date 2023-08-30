import React, { useContext, useState } from "react";
import DataContext from "../Context/DataContext";

const Cart = () => {
  const { cart, setCart } = useContext(DataContext);
  const [amt, setamt] = useState(0);
  console.log(cart);
  const [productCount, setProductCount] = useState(0);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-secondary  ">
        <div className="container px-4 px-lg-5 ">
          <a className="navbar-brand text-danger" href="#!">
            V-Mart
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
                <a className="nav-link active" aria-current="page" href="#!">
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
                  href="#!"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Shop
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {cart.map((cp, index) => (
        <>
          <div className="row ps-5 pt-5" key={index}>
            <div className="col-6 text-start">
              <img src={cp[0]} alt="" />
            </div>
            <div className="col-6 text-start">
              <div className="col">
                <div className="row">
                  <h3 className="h3">{cp[1]}</h3>
                </div>
                <div className="row">
                  <h3 className="h6">{cp[3]}</h3>
                </div>
                <div className="row">
                  <h3 className="h5 mt-3 fw-bold">
                    Rating : <span className="h6">{cp[4]}/5</span>{" "}
                  </h3>
                </div>
                <div className="m-4">
                  <button
                    className="m-2 btn btn-secondary"
                    onClick={() => {
                      let count = cp[5] || 0;
                      let dec = count - 1;
                      let data = cart[index];
                      if (dec <= 0) {
                        alert("Cannot Decrese the count Below 0");
                      } else {
                        setProductCount(productCount + 1);
                        data[5] = dec;
                        let c = cart;
                        c[index] = data;
                        setCart(c);
                        setamt(cp[2] * cp[5]);
                      }
                    }}
                  >
                    -
                  </button>
                  <span className="m-4">{cp[5] || 0}</span>
                  <button
                    className="m-2 btn btn-secondary"
                    onClick={() => {
                      setProductCount(productCount + 1);
                      let count = cp[5] || 0;
                      let dec = count + 1;
                      let data = cart[index];
                      data[5] = dec;
                      let c = cart;
                      c[index] = data;
                      setCart(c);
                      setamt(cp[2] * cp[5]);
                    }}
                  >
                    +
                  </button>
                </div>
                <div className="col-4">
                  <div className="row fw-bold text-end fs-5 ms-2 mt-5">
                    RS.{cp[2]}
                  </div>
                  <div className="mt-5">
                    <button className="btn btn-danger text-start" type="button">
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="mt-5" />
          <div className="row">
            <div className="col-6">
              <div className="col mt-4">
                <div className="row ms-4">
                  <h5>Sub-total</h5>
                </div>
                <div className="row ms-4 pt-4">
                  <h5>Shiiping</h5>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="col ">
                <div className="row ms-4 pt-4">
                  <h4>{amt}</h4>
                </div>
                <div className="row ms-4 pt-4">
                  <h4>Free</h4>
                </div>
              </div>
            </div>
            <hr />
          </div>
        </>
      ))}
    </div>
  );
};
export default Cart;
