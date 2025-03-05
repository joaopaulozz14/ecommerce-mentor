import "./styles.css";
import { JSX } from "react";
import { useData } from "../../context";
import LightBox from "../lightBox/LightBox";
function ImageProduct(): JSX.Element {
  const { data, mainPhotoID, setMainPhotoID, setLightIsActive } = useData();

  const item = data.find((item) => item.id === mainPhotoID);
  return (
    <div className="product_container">
      <div
        className="product_container_image_big"
        onClick={() => setLightIsActive(true)}
      >
        <img src={item?.image.desktop} alt="Main product image" />
      </div>

      <div className="product_container_image_thumbnail">
        {data.map((item) => (
          <img
            key={item.id}
            src={item.image.thumbnail}
            onClick={() => setMainPhotoID(item.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageProduct;
