import PropTypes from "prop-types";
import {
  PassBackground,
  PassBackgroundInner,
  PassTitle,
  PassSubtitle,
} from "./PasswordStyle";

const Password = ({ title, subtitle, children }) => {
  return (
    <PassBackground>
      <PassBackgroundInner>
        <PassTitle>{title}</PassTitle>
        <PassSubtitle>{subtitle}</PassSubtitle>
        {children}
      </PassBackgroundInner>
    </PassBackground>
  );
};

Password.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.node,
};

export default Password;
