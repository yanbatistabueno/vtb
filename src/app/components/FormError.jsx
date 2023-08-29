import "./FormError.css";
function FormError(props) {
  return (
    <div
      className="error-container"
      data-visible={props.error ? "true" : "false"}
    >
      <div className="error-name">
        <p>{props.nomeError}</p>
      </div>
    </div>
  );
}

export default FormError;
