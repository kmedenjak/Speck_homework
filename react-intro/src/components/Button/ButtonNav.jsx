import "./Button.scss";
import PropTypes from "prop-types"

// eslint-disable-next-line react/prop-types
const Button = ({ children }) => {
  return (
    <button href="#" className="Button">{children}</button>
  )
}

Button.propTypes = {
  children: PropTypes.node
}

export default Button;