const Toast = (props) => {
  const { message, open, close } = props;
  const [] = use;
  return (
    <div>
      {open && (
        <div className="toast-container">
          <div className="toast-message">{message}</div>
          <div>
            <button className="toast-close-button" onClick={close}>
              <i className="fa fa-times" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default Toast;
