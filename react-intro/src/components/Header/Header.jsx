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
          <Buttons onClick={() => navigate("/register")}>Register</Buttons>
        </HeaderNav>

        {clickMenu ? (
          <Hamburger onClick={() => setClickMenu(clickMenu)} />
        ) : (
          <Hamburger onClick={() => setClickMenu(!clickMenu)} />
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
              to={"/signin"}
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
