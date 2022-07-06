import "./Carousel.css";
const Carousel = (props) => {
  const { imageOne, imageTwo, imageThree } = props;
  return (
    <div className="carousel-container">
      <div className="carousel-item">
        <div className="carousel-left-arrow">
          <i class="fa fa-caret-left" aria-hidden="true"></i>
        </div>
        <img className="carousel-image" src={imageOne} alt="image" />
        <div className="carousel-right-arrow">
          <i class="fa fa-caret-right" aria-hidden="true"></i>
        </div>
        <div></div>
      </div>
      {/* <div className="carousel-item">
        <img className="carousel-image" src={imageTwo} alt="image" />
      </div>
      <div className="carousel-item">
        <img className="carousel-image" src={imageThree} alt="image" />
      </div> */}
    </div>
  );
};
export default Carousel;
