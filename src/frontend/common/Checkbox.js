import "./Checkbox.css";
const Checkbox = (props) => {
  const { type = "checkbox", label, labelPosition, onChange } = props;
  return (
    <div className="checkbox-container">
      {labelPosition === "before" && (
        <label className="checkbox-label">{label}</label>
      )}
      <input className="checkbox-input" type={type} onChange={onChange} />
      {!labelPosition && <label className="checkbox-label">{label}</label>}
    </div>
  );
};
export default Checkbox;
