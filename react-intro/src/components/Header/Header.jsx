import PropTypes from "prop-types";
import { Buttons } from "../../utils/styles/generalStyles";
import { Link } from "react-router-dom";
import {
  Header as HeaderWrapper,
  HeaderInner,
  Logo,
  Hamburger,
  HeaderLink,
  HeaderNav,
} from "./HeaderStyle";
import { useNavigate } from "react-router-dom";

const Header = ({ navHome, navCourses }) => {
  const navigate = useNavigate();

  return (
    <HeaderWrapper>
      <HeaderInner>
        <Link to="/">
          <Logo />
        </Link>
        <Hamburger />
        <HeaderNav>
          <HeaderLink to={"/"}>{navHome}</HeaderLink>
          <HeaderLink to={"/courses"}>{navCourses}</HeaderLink>
          <Buttons onClick={() => navigate("/register")}>Register</Buttons>
        </HeaderNav>
      </HeaderInner>
    </HeaderWrapper>
  );
};

Header.propTypes = {
  navHome: PropTypes.string,
  navCourses: PropTypes.string,
};

export default Header;
