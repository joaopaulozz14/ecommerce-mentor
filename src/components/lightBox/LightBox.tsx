import { useData } from "../../context";
import "./styles.css";
import previous from "../../assets/icon-previous.svg";
import next from "../../assets/icon-next.svg";
import { useState } from "react";
export default function LightBox() {
  const { data, currentSlide, setCurrentSlide, setLightIsActive } = useData();
  const [isActual, setIsActual] = useState();
  const item = data.find((item) => item.id === currentSlide);

  function handleNext() {
    setCurrentSlide(currentSlide === data.length ? 1 : currentSlide + 1);
  }

  function handlePrevious() {
    setCurrentSlide(currentSlide === 1 ? data.length - 1 : currentSlide - 1);
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
          <img src={item?.image.desktop} alt="" />
        </div>

        <div className="lightbox_container_image_thumbnail">
          {data.map((item) => (
            <div key={item.id} className="thumbnail_wrapper">
              <img
                src={item.image.thumbnail}
                onClick={() => setCurrentSlide(item.id)}
                className={`img_thumbnail ${
                  currentSlide === item.id ? "actual" : ""
                }`}
              />
              {currentSlide === item.id && <div className="overlay"></div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
