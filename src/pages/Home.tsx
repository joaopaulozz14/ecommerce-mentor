import Navbar from "../components/navBar/Navbar";
import ImageProduct from "../components/imageProduct/ImageProduct";
import Cart from "../components/cart/Cart";
import "./styles.css";
import LightBox from "../components/lightBox/LightBox";
import { useData } from "../context";

function Home() {
  const { lightIsActive } = useData();
  return (
    <div className="main_container">
      <Navbar />
      {lightIsActive ? <LightBox /> : null}
      <section className="section_cart">
        <ImageProduct />

        <Cart />
      </section>
    </div>
  );
}

export default Home;
