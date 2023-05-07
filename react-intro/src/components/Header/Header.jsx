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
  HeaderLinkHamburger,
  HeaderNavHamburger,
} from "./HeaderStyle";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { VscClose } from "react-icons/vsc";

const Header = ({ navHome, navCourses, navSignIn }) => {
  const navigate = useNavigate();
  const [clickMenu, setClickMenu] = useState(false);

  return (
    <HeaderWrapper>
      <HeaderInner>
        <Link to="/">
          <Logo />
        </Link>

        <HeaderNav>
          <HeaderLink to={"/"}>{navHome}</HeaderLink>
          <HeaderLink to={"/courses"}>{navCourses}</HeaderLink>
          <Buttons onClick={() => navigate("/sign-in")} isOutline>Sign in</Buttons>
          <Buttons onClick={() => navigate("/register")}>Register</Buttons>
        </HeaderNav>

        {clickMenu ? (
          <VscClose size="32px" onClick={() => setClickMenu(false)} />
        ) : (
          <Hamburger onClick={() => setClickMenu(true)} />
        )}

        {clickMenu && (
          <HeaderNavHamburger>
            <HeaderLinkHamburger to={"/"} onClick={() => setClickMenu(false)}>
              {navHome}
            </HeaderLinkHamburger>
            <HeaderLinkHamburger
              to={"/courses"}
              onClick={() => setClickMenu(false)}
            >
              {navCourses}
            </HeaderLinkHamburger>
            <HeaderLinkHamburger
              to={"/sign-in"}
              onClick={() => setClickMenu(false)}
            >
              {navSignIn}
            </HeaderLinkHamburger>
            <HeaderLinkHamburger>
              <Buttons
                onClick={() => {
                  navigate("/register");
                  setClickMenu(false);
                }}
              >
                Register
              </Buttons>
            </HeaderLinkHamburger>
          </HeaderNavHamburger>
        )}
      </HeaderInner>
    </HeaderWrapper>
  );
};

Header.propTypes = {
  navHome: PropTypes.string,
  navCourses: PropTypes.string,
  navSignIn: PropTypes.string,
};

export default Header;
