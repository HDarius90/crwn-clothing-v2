import './form-input.styles.scss';

const FormInput = ({ label, ...ottherProps }) => {
  return (
    <div className="group">
      <input className="form-input" {...ottherProps} />
      {label && (
        <label
          className={`${
            ottherProps.value.length ? 'shrink' : ''
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
