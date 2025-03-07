import "./styles.css";
import cart from "../../assets/icon-cart.svg";
import profile from "../../assets/image-avatar.png";
import BoxCart from "../boxCart/BoxCart";
function Navbar() {
  return (
    <div className="nav">
      <div className="navbar">
        <div className="navbar_container">
          <div className="navbar_logo_and_sections">
            <h2 className="navbar_logo">sneakers</h2>
            <ul className="navbar_ul_li">
              <li>Collections</li>
              <li>Men</li>
              <li>Women</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="navbar_profile_and_cart">
            <img src={cart} alt="profile photo" className="navbar_img_cart " />
            <img
              src={profile}
              alt="cart shopping"
              className="navbar_img_profile"
            />
            {/* <BoxCart /> */}
          </div>
        </div>
        {/* navbar_container */}
      </div>
    </div>
  );
}

export default Navbar;
