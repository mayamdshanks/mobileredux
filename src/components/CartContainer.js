import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { openModal } from "../features/cart/Modal/modalSlice";
import CartItem from "./CartItem";


const CartContainer = () => {
  const dispatch=useDispatch();
  const { cartItems, amount, total } = useSelector((store) => store.cart);
  // const { isOpen  } = useSelector((store) => store.modal);
  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>Mobile Galaxy</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      <header>
        <h2>Mobile Galaxy</h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
        
      </div>
      <footer>
        <hr />
        <div className="cart-total"></div>
        <h4>total   <span> ${total.toFixed(2)}</span> </h4>
      </footer>
      <button className="btn clear-btn" onClick={()=>dispatch(openModal())} >clear cart</button>
    </section>
  );
};

export default CartContainer;
