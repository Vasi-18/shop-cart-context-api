import React, { useState, useContext } from "react";
import DataContext from "../Context/DataContext";

const Content = ({ cartProduct }) => {
  const { cartValue, setCartValue, setCart, cart } = useContext(DataContext);

  const [buttonText, setButtonText] = useState("Add to Cart");
  const [buttonColor,setButtonColor] = useState("btn-success")
  const handleClick = () => {
    if (buttonText === "Add to Cart") {
      setCartValue(cartValue + 1);
      setButtonText("Remove from Cart");
      setCart([...cart, cartProduct]);
      setButtonColor("btn-danger")
    } else {
      setCartValue(cartValue - 1);
      setButtonText("Add to Cart");
      setButtonColor("btn-success")
    }
  };
 
  return (
    <div className="col mb-5">
      <div className="card h-100">
        <img className="card-img-top" src={cartProduct[0]} alt="..." />

        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{cartProduct[1]}</h5>
            RS.{cartProduct[2]}
          </div>
        </div>

        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            <button
              className={`btn ${buttonColor} mt-auto`}
              id="butFunction"
              onClick={handleClick}
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
