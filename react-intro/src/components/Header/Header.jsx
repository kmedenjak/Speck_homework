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
import { useContext, useState } from "react";
import { VscClose } from "react-icons/vsc";
import { AuthContext } from "../../context/AuthContext";

const Header = ({
  navHome,
  navCourses,
  navSignIn,
  navProfile,
  setIsAdmin,
  setIsLoggedIn
}) => {
  const navigate = useNavigate();
  const [clickMenu, setClickMenu] = useState(false);

  const {isAdmin, isLoggedIn} = useContext(AuthContext);

  function LogOut() {
    setIsAdmin(!isAdmin);
    setIsLoggedIn(!isLoggedIn);
    setClickMenu(false);
  }

  

  return (
    <HeaderWrapper>
      <HeaderInner>
        <Link to="/">
          <Logo />
        </Link>

        {(() => {
          if (isLoggedIn) {
            if (isAdmin) {
              return (
                <HeaderNav>
                  <HeaderLink to={"/"}>{navHome}</HeaderLink>
                  <HeaderLink to={"/courses"}>{navCourses}</HeaderLink>
                  <HeaderLink to={"/profile"}>{navProfile}</HeaderLink>

                  {isLoggedIn ? (
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
                  {isLoggedIn !== "false" ? (
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
            if (isLoggedIn) {
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

                    {(isLoggedIn) ? (
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
                    {isLoggedIn ? (
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
  setIsLoggedIn: PropTypes.func,
};

export default Header;
