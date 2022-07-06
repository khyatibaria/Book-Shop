import NavBar from "../common/NavBar";
import HorizontalProductCard from "../common/HorizontalProductCard";
import images from "../assets/index";
import "./CartPage.css";
import BillSummary from "../components/BillSummary";
const CartPage = (props) => {
  const { ProductTwo } = images;
  return (
    <div>
      <NavBar searchBar="true" />
      <div className="cart-container">
        <div id="product-container" className="product-list">
          <HorizontalProductCard
            badgeText="50% off"
            src={ProductTwo}
            title="I am Book"
            author="author"
            price="400"
          />
          <HorizontalProductCard
            badgeText="50% off"
            src={ProductTwo}
            title="I am Book"
            author="author"
            price="400"
          />
          <HorizontalProductCard
            badgeText="50% off"
            src={ProductTwo}
            title="I am Book"
            author="author"
            price="400"
          />
          <HorizontalProductCard
            badgeText="50% off"
            src={ProductTwo}
            title="I am Book"
            author="author"
            price="400"
          />
          <HorizontalProductCard
            badgeText="50% off"
            src={ProductTwo}
            title="I am Book"
            author="author"
            price="400"
          />
          <HorizontalProductCard
            badgeText="50% off"
            src={ProductTwo}
            title="I am Book"
            author="author"
            price="400"
          />
          <HorizontalProductCard
            badgeText="50% off"
            src={ProductTwo}
            title="I am Book"
            author="author"
            price="400"
          />
          <HorizontalProductCard
            badgeText="50% off"
            src={ProductTwo}
            title="I am Book"
            author="author"
            price="400"
          />
        </div>
        <div className="bill-summary">
          <BillSummary title="Summary" />
        </div>
      </div>
    </div>
  );
};
export default CartPage;
