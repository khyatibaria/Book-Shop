import "./MenuBar.css";
const MenuBar = (props) => {
  return (
    <div className="menubar-container">
      <div className="menu-item">Books</div>
      <div className="menu-item">New Arrivals</div>
      <div className="menu-item">Bestseller</div>
      <div className="menu-item">Today's Deal</div>
    </div>
  );
};
export default MenuBar;
