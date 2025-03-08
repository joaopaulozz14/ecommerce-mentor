import { useData } from "../../context";
import "./styles.css";
import deleteButton from "../../assets/icon-delete.svg";
export default function ModalCart() {
  const {
    selectedProduct,
    totalPriceProduct,
    mainPhotoProduct,
    setShowModalCart,
    setSelectedProduct,
  } = useData();

  function handleDeleteProductCart() {
    setShowModalCart(false);
    setSelectedProduct((prev) => (prev ? { ...prev, quantity: 0 } : prev));
  }
  return (
    <div className="boxcart">
      <div className="boxcart_title">
        Cart <span onClick={() => setShowModalCart(false)}>X</span>
      </div>
      {/* <span></span> */}
      <div className="boxcart_container">
        {totalPriceProduct !== 0 ? (
          <>
            <div className="boxcart_container_info">
              <img
                src={selectedProduct?.images[mainPhotoProduct].thumbnail}
                alt=""
                className="boxcart_container_info_img"
              />
              <div className="boxcart_container_info_product">
                <p>{selectedProduct?.name}</p>
                <div>
                  <p>${selectedProduct?.price} x </p>
                  <p>{selectedProduct?.quantity} </p>
                  <p>${totalPriceProduct}</p>
                </div>
              </div>
              <img
                src={deleteButton}
                alt="Delete product button"
                className="boxcart_container_info_product_delete"
                onClick={handleDeleteProductCart}
              />
            </div>
            <button className="boxcart_container_button">Checkout</button>
          </>
        ) : (
          <p>Your cart is empty.</p>
        )}
        {/* <p>Your cart is empty.</p> */}
      </div>
    </div>
  );
}
