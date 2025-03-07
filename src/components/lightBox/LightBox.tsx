import { useData } from "../../context";
import "./styles.css";
import previous from "../../assets/icon-previous.svg";
import next from "../../assets/icon-next.svg";
export default function LightBox() {
  const {
    selectedProduct,
    currentSlide,
    setCurrentSlide,
    setLightIsActive,
  } = useData();

  
  const photosThumbnail =
    selectedProduct?.images.map((item) => item.thumbnail) ?? [];
  const photosDesktop =
    selectedProduct?.images.map((item) => item.desktop) ?? [];
  
  function handleNext() {
    setCurrentSlide(
      currentSlide === photosThumbnail.length - 1 ? 0 : currentSlide + 1
    );
  }

  function handlePrevious() {
    setCurrentSlide(
      currentSlide === 0 ? photosThumbnail.length - 1 : currentSlide - 1
    );
  }
  return (
    <div className="lightbox">
      <div className="lightbox_container">
        <span
          className="lightbox_close_button"
          onClick={() => setLightIsActive(false)}
        >
          X
        </span>
        <span
          className="lightbox_previous_and_next lightbox_previous_button"
          onClick={handlePrevious}
        >
          <img
            src={previous}
            alt="Previous image button"
            className="lightbox_previous_svg"
          />
        </span>
        <span
          className="lightbox_previous_and_next lightbox_next_button"
          onClick={handleNext}
        >
          <img
            src={next}
            alt="Next image button"
            className="lightbox_next_svg"
          />
        </span>
        <div className="lightbox_container_image_big">
          <img src={photosDesktop[currentSlide]} alt="" />
        </div>

        <div className="lightbox_container_image_thumbnail">
          {photosThumbnail.map((item, index) => (
            <div key={index} className="thumbnail_wrapper">
              <img
                src={item}
                onClick={() => setCurrentSlide(index)}
                className={`img_thumbnail ${
                  currentSlide === index ? "actual" : ""
                }`}
              />
              {currentSlide === index && <div className="overlay"></div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
