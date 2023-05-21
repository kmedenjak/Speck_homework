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

const Header = ({
  navHome,
  navCourses,
  navSignIn,
  navProfile,
  isAdmin,
  isLogedIn,
  setIsAdmin,
  setIsLogedIn,
}) => {
  const navigate = useNavigate();
  const [clickMenu, setClickMenu] = useState(false);

  function LogOut() {
    setIsAdmin(false);
    setIsLogedIn(false);
    localStorage.removeItem("admin");
    localStorage.removeItem("logged");
    setClickMenu(false);
  }

  return (
    <HeaderWrapper>
      <HeaderInner>
        <Link to="/">
          <Logo />
        </Link>

        {(() => {
          if (isLogedIn) {
            if (isAdmin) {
              return (
                <HeaderNav>
                  <HeaderLink to={"/"}>{navHome}</HeaderLink>
                  <HeaderLink to={"/courses"}>{navCourses}</HeaderLink>
                  <HeaderLink to={"/profile"}>{navProfile}</HeaderLink>

                  {isLogedIn ? (
                    <HeaderLink onClick={LogOut} to={"/"}>
                      Log Out
                    </HeaderLink>
                  ) : (
                    <HeaderLink to={"sign-in"}>Sign In</HeaderLink>
                  )}
                </HeaderNav>
              );
            } else {
              return (
                <HeaderNav>
                  <HeaderLink to={"/"}>{navHome}</HeaderLink>
                  <HeaderLink to={"/courses"}>{navCourses}</HeaderLink>
                  {isLogedIn ? (
                    <HeaderLink onClick={LogOut} to={"/"}>
                      Log Out
                    </HeaderLink>
                  ) : (
                    <HeaderLink to={"/sign-in"}>Sign In</HeaderLink>
                  )}
                </HeaderNav>
              );
            }
          } else {
            return (
              <HeaderNav>
                <HeaderLink to={"/"}>{navHome}</HeaderLink>
                <HeaderLink to={"/courses"}>{navCourses}</HeaderLink>
                <HeaderLink to={"/sign-in"}>{navSignIn}</HeaderLink>
                <Buttons onClick={() => navigate("/register")}>
                  Register
                </Buttons>
              </HeaderNav>
            );
          }
        })()}

        {clickMenu ? (
          <VscClose size="32px" onClick={() => setClickMenu(false)} />
        ) : (
          <Hamburger onClick={() => setClickMenu(true)} />
        )}

        {clickMenu &&
          (() => {
            if (isLogedIn) {
              if (isAdmin) {
                return (
                  <HeaderNavHamburger>
                    <HeaderLinkHamburger
                      to={"/"}
                      onClick={() => setClickMenu(false)}
                    >
                      {navHome}
                    </HeaderLinkHamburger>
                    <HeaderLinkHamburger
                      to={"/courses"}
                      onClick={() => setClickMenu(false)}
                    >
                      {navCourses}
                    </HeaderLinkHamburger>

                    <HeaderLinkHamburger
                      to={"/profile"}
                      onClick={() => setClickMenu(false)}
                    >
                      {navProfile}
                    </HeaderLinkHamburger>

                    {isLogedIn ? (
                      <HeaderLinkHamburger onClick={LogOut} to={"/"}>
                        Log Out
                      </HeaderLinkHamburger>
                    ) : (
                      <HeaderLinkHamburger
                        to={"sign-in"}
                        onClick={() => setClickMenu(false)}
                      >
                        Sign In
                      </HeaderLinkHamburger>
                    )}
                  </HeaderNavHamburger>
                );
              } else {
                return (
                  <HeaderNavHamburger>
                    <HeaderLinkHamburger
                      to={"/"}
                      onClick={() => setClickMenu(false)}
                    >
                      {navHome}
                    </HeaderLinkHamburger>
                    <HeaderLinkHamburger
                      to={"/courses"}
                      onClick={() => setClickMenu(false)}
                    >
                      {navCourses}
                    </HeaderLinkHamburger>
                    {isLogedIn ? (
                      <HeaderLinkHamburger onClick={LogOut} to={"/"}>
                        Log Out
                      </HeaderLinkHamburger>
                    ) : (
                      <HeaderLinkHamburger
                        to={"sign-in"}
                        onClick={() => setClickMenu(false)}
                      >
                        Sign In
                      </HeaderLinkHamburger>
                    )}
                  </HeaderNavHamburger>
                );
              }
            } else {
              return (
                <HeaderNavHamburger>
                  <HeaderLinkHamburger
                    to={"/"}
                    onClick={() => setClickMenu(false)}
                  >
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
                    <Buttons
                      onClick={() => {
                        navigate("/register");
                        setClickMenu(false);
                      }}
                    >
                      Register
                    </Buttons>
                </HeaderNavHamburger>
              );
            }
          })()}
      </HeaderInner>
    </HeaderWrapper>
  );
};

Header.propTypes = {
  navHome: PropTypes.string,
  navCourses: PropTypes.string,
  navSignIn: PropTypes.string,
  navProfile: PropTypes.string,
  setIsAdmin: PropTypes.func,
  setIsLogedIn: PropTypes.func,
  isAdmin: PropTypes.bool,
  isLogedIn: PropTypes.bool,
};

export default Header;
