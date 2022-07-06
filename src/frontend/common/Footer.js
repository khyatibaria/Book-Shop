import "./Footer.css";
const Footer = (props) => {
  return (
    <div className="footer-container">
      <div className="footer-section">
        <ul>
          <li>New Arrivals</li>
          <li>BestSellers</li>
          <li>Return Policy</li>
          <li>FAQ</li>
        </ul>
      </div>
      <div className="footer-section">
        <ul>
          <li>Books</li>
          <li>Login</li>
          <li>Sign Up</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="footer-section"></div>
    </div>
  );
};
export default Footer;
