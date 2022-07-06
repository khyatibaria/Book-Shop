const DateInput = (props) => {
  const { id, label, name, placeholder, value, onChange } = props;
  return (
    <div className="input-box">
      <fieldset className="fieldset">
        <input
          className="input"
          id={id}
          name={name}
          type="date"
          placeholder={placeholder}
          value={value}
          //ref={ref}
          onChange={onChange}
        />
        <legend className="legend">
          <span>{label}</span>
        </legend>
      </fieldset>
    </div>
  );
};
export default DateInput;
