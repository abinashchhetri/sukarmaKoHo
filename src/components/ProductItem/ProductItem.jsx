import React, { useContext } from "react";
import "./ProductItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const ProductItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart, url } =
    useContext(StoreContext);

  return (
    <div className="product-item">
      <div className="product-item-img-container">
        <img
          className="product-item-image"
          src={url + "/images/" + image}
          alt=""
        />
        {!cartItems[id] ? (
          <img
            className="add"
            onClick={() => addToCart(id)}
            src={assets.aa103}
            alt=""
            height={10}
            width={30}
          />
        ) : (
          <div className="product-item-counter">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.substract_icon_circle}
              alt=""
              height={20}
              width={20}
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.plus_icon_circle}
              alt=""
              height={20}
              width={20}
            />
          </div>
        )}
      </div>
      <div className="product-item-info">
        <div className="product-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_star} alt="" width={80} />
        </div>
        <p className="product-item-description">{description}</p>

        <p className="product-item-price"> Rs {price}</p>
      </div>
    </div>
  );
};

export default ProductItem;
