const NumberInput = (props) => {
  const {
    id,
    name,
    type = "number",
    placeholder,
    label,
    value,
    ref,
    onChange,
  } = props;
  return (
    <div className="input-box">
      <fieldset className="fieldset">
        <input
          className="input"
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          ref={ref}
          onChange={onChange}
        />
        <legend className="legend">
          <span>{label}</span>
        </legend>
      </fieldset>
    </div>
  );
};
