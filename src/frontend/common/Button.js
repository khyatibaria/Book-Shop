import "./Button.css";
const Button = (props) => {
  const { className = "btn primary", label, onClick } = props;
  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
