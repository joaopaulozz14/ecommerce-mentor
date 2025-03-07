import "./styles.css";
import cart from "../../assets/icon-cart.svg";
import { useData } from "../../context";

function AddCart() {
  const { selectedProduct, setSelectedProduct } = useData();
  return (
    <>
      <div className="add_cart_section">
        <p className="add_cart_section_company_title">SNEAKER COMPANY</p>
        <h1 className="add_cart_section_product_title">
          Fall Limited Edition <br />
          Sneakers
        </h1>
        <p className="add_cart_section_product_description">
          These low-profile sneakers are your perfect casual wear
          companion.Featuring a durable rubber outer sole, they'll withstand
          everything the weather can offer.
        </p>
        <h2 className="add_cart_section_product_price">
          ${selectedProduct?.price} <span>{selectedProduct?.discount}% </span>
        </h2>
        <p className="add_cart_section_product_former_price">
          ${selectedProduct?.previousPrice}
        </p>
        <div className="add_cart_section_add_item">
          <div className="add_cart_section_edit_quantity">
            <p
              className="edit_quantity_minus"
              onClick={() =>
                setSelectedProduct((prev) =>
                  prev
                    ? { ...prev, quantity: Math.max(prev.quantity - 1, 0) }
                    : prev
                )
              }
            >
              -
            </p>
            <p className="edit_quantity_number">{selectedProduct?.quantity}</p>
            <p
              className="edit_quantity_plus"
              onClick={() =>
                setSelectedProduct((prev) =>
                  prev ? { ...prev, quantity: prev.quantity + 1 } : prev
                )
              }
            >
              +
            </p>
          </div>
          <button className="add_cart_section_button" onClick={() => {}}>
            <img src={cart} alt="" className="add_cart_icon" />
            Add to cart
          </button>
        </div>
      </div>
      {/*   {data.map((item) => (
        <div className="add_cart_section">
          <p className="add_cart_section_company_title">SNEAKER COMPANY</p>
          <h1 className="add_cart_section_product_title">
            Fall Limited Edition <br />
            Sneakers
          </h1>
          <p className="add_cart_section_product_description">
            These low-profile sneakers are your perfect casual wear
            companion.Featuring a durable rubber outer sole, they'll withstand
            everything the weather can offer.
          </p>
          <h2 className="add_cart_section_product_price">
            ${item.price} <span>{item.discount}% </span>
          </h2>
          <p className="add_cart_section_product_former_price">
            ${item.previousPrice}
          </p>
          <div className="add_cart_section_add_item">
            <div className="add_cart_section_edit_quantity">
              <p
                className="edit_quantity_minus"
                onClick={() =>
                  setData((prev) => ({
                    ...prev,
                    quantity: Math.max(prev.quantity - 1, 1),
                  }))
                }
              >
                -
              </p>
              <p className="edit_quantity_number">{item.quantity}</p>
              <p className="edit_quantity_plus">+</p>
            </div>
            <button className="add_cart_section_button" onClick={() => {}}>
              <img src={cart} alt="" className="add_cart_icon" />
              Add to cart
            </button>
          </div>
        </div>
      ))} */}
    </>
  );
}
export default AddCart;
