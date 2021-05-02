// ---- button component
const Button = (props) => (
  <button type="button" title={props.text} aria-label={props.text} {...props}>
    {props.icon ? <i className={props.icon}></i> : props.text}
  </button>
);
export default Button;
