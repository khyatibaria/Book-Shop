import NavBar from "../common/NavBar";
import MenuBar from "../common/MenuBar";
import Carousel from "../common/Carousel";
import images from "../assets/index";
const HomePage = () => {
  const { CarouselOne } = images;
  return (
    <div>
      <NavBar searchBar="true" />
      <MenuBar />
      <Carousel
        imageOne={CarouselOne}
        imageTwo={CarouselOne}
        imageThree={CarouselOne}
      />
    </div>
  );
};
export default HomePage;
