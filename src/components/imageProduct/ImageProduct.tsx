import "./styles.css";
import { JSX } from "react";
import { useData } from "../../context";

function ImageProduct(): JSX.Element {
  const {
    selectedProduct,
    mainPhotoProduct,
    setMainPhotoProduct,
    setLightIsActive,
  } = useData();

  const photosThumbnail =
    selectedProduct?.images.map((item) => item.thumbnail) ?? [];
  console.log(photosThumbnail);
  return (
    <div className="product_container">
      <div
        className="product_container_image_big"
        onClick={() => setLightIsActive(true)}
      >
        <img
          src={selectedProduct?.images[mainPhotoProduct].desktop}
          alt="Main product image"
        />
      </div>

      <div className="product_container_image_thumbnail">
        {photosThumbnail.map((item, index) => (
          <img
            key={index}
            src={item}
            onClick={() => setMainPhotoProduct(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageProduct;
