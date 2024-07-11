import './button.styles.scss'

const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({ children, buttonType, ...ottherProps }) => {
  return (
    <Button
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...ottherProps}
    >
      {children}
    </Button>
  );
};

export default Button;
