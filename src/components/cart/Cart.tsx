import "./styles.css";
import cart from '../../assets/icon-cart.svg';

function Cart() {
  return (
    <div className="cart_section">
      <p className="cart_section_company_title">SNEAKER COMPANY</p>
      <h1 className="cart_section_product_title">
        Fall Limited Edition <br />
        Sneakers
      </h1>
      <p className="cart_section_product_description">
        These low-profile sneakers are your perfect casual wear
        companion.Featuring a durable rubber outer sole, they'll withstand
        everything the weather can offer.
      </p>
      <h2 className="cart_section_product_price">
        $125.00 <span>50%</span>
      </h2>
      <p className="cart_section_product_former_price">$250.00</p>
      <div className="cart_section_add_item">
        <div className="cart_section_edit_quantity">
          <p className="edit_quantity_minus">-</p>
          <p className="edit_quantity_number">3</p>
          <p className="edit_quantity_plus">+</p>
        </div>
        <button className="cart_section_button">
          <img src={cart} alt="" className="cart_icon"/>
          Add to cart
        </button>
      </div>
    </div>
  );
}
export default Cart;
