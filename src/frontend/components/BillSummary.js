import "./BillSummary.css";
const BillSummary = (props) => {
  const { title } = props;
  return (
    <div className="bill-summary-container">
      <div className="bill-summary-head">{title}</div>
      <div className="bill-summary-body">
        <div className="bill-details">
          <div>Amount</div>
          <div>2400/-</div>
        </div>
        <div className="bill-details">
          <div>Shipping</div>
          <div>Free</div>
        </div>
        <div className="total-bill">
          <div>Total</div>
          <div>5000/-</div>
        </div>
      </div>
    </div>
  );
};
export default BillSummary;
