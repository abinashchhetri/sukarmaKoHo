import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { product_list_description } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const {
    cartItems,
    product_list_description,
    removeFromCart,
    getTotalCartAmount,
  } = useContext(StoreContext);
  const navigate = useNavigate();
  return (
    <div className="cart">
      <div className="cart-item">
        <div className="cart-item-title">
          <p>Product</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {product_list_description.map((item, index) => {
          return (
            <div key={index}>
              <div className="cart-item-title cart-items-item">
                <img src={item.image} alt="" />
                <p>{item.name}</p>
                <p> Rs{item.price}</p>
                <p>{cartItems[item.id]}</p>
                <p> Rs {item.price * cartItems[item.id]}</p>
                <p onClick={() => removeFromCart(item.id)} className="cross">
                  x
                </p>
              </div>
              <hr />
            </div>
          );
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>Rs {getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>Rs {getTotalCartAmount() === 0 ? 0 : 100}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>
                {" "}
                Rs {getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 100}
              </b>
            </div>
          </div>
          <button onClick={() => navigate("/order")}>
            Proceed to checkout
          </button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have promocode, Enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="promocode" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
