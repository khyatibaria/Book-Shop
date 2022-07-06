import NavBar from "../common/NavBar";
import ProductCard from "../common/ProductCard";
import "./WishlistPage.css";
import images from "../assets/index";
const WishlistPage = (props) => {
  const { ProductOne, ProductTwo, ProductThree, ProductFour } = images;
  return (
    <div>
      <NavBar searchBar="true" />
      <div className="product-list-conatiner">
        <ProductCard
          src={ProductOne}
          badgeText="Bestseller"
          title="The Alchemist"
          author="By Panlo Coelho"
          price="499"
          buttonLabel="Add to Cart"
        />
        <ProductCard
          src={ProductThree}
          badgeText="Bestseller"
          title="The Alchemist"
          author="By Panlo Coelho"
          price="499"
          buttonLabel="Add to Cart"
        />
        <ProductCard
          src={ProductTwo}
          badgeText="Bestseller"
          title="The Alchemist"
          author="By Panlo Coelho"
          price="499"
          buttonLabel="Add to Cart"
        />
        <ProductCard
          src={ProductFour}
          badgeText="Bestseller"
          title="The Alchemist"
          author="By Panlo Coelho"
          price="499"
          buttonLabel="Add to Cart"
        />
      </div>
    </div>
  );
};
export default WishlistPage;
