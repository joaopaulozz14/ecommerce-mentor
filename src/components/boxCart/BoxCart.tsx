import "./styles.css";

export default function BoxCart() {
  return (
    <div className="boxcart">
      <div className="boxcart_title">Cart</div>
      {/* <span></span> */}
      <div className="boxcart_container">
        <p>Your cart is empty.</p>
      </div>
    </div>
  );
}
