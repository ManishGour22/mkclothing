import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import CheckoutItem from "../checkout-item/checkout-item.component";
import "./checkout.styles.scss";

const CheckOut = () => {
  const { cartItems,cartTotal } =
    useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>
            
            <b> Products </b>
          </span>
        </div>
        <div className="header-block">
          <span>
            {" "}
            <b> Description </b>
          </span>
        </div>
        <div className="header-block">
          <span>
            
            <b> Quantity </b>
          </span>
        </div>
        <div className="header-block">
          <span>
            
            <b> Price </b>
          </span>
        </div>
        <div className="header-block">
          <span>
            
            <b> Remove </b>
          </span>
        </div>
      </div>

      {cartItems.map((cartItems) => (
        <CheckoutItem key={cartItems.id} cartItems={cartItems} />
      ))}
      <span className="total">TOTAL: INR <b>{cartTotal}</b></span>
    </div>
  );
};

export default CheckOut;
