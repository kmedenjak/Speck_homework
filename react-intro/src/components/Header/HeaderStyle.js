import styled from "styled-components";
import { breakpoints, colors } from "../../utils/styles/theme";
import { ReactComponent as HamburgerIcon } from "../../assets/images/icon-hamburger.svg";
import { ReactComponent as LogoIcon } from "../../assets/images/logo.svg";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
  background-color: ${colors.bgSecondary};
`;

export const HeaderInner = styled.div`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  margin: 0 auto;

  @media screen and (${breakpoints.tablet}) {
    padding: 0 32px;
    max-width: 930px;
  }

  @media screen and (${breakpoints.desktop}) {
    padding: 0;
  }

  @media screen and (${breakpoints.desktopLarge}) {
    max-width: 1280px;
  }
`;

export const Hamburger = styled(HamburgerIcon)`
  display: block;
  width: 32px;
  height: 32px;
  position: absolute;
  right: 5%;

  @media screen and (${breakpoints.desktop}) {
    display: none;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const Logo = styled(LogoIcon)`
  path {
    fill: ${colors.primary};
  }
`;

export const HeaderLink = styled(NavLink)`
  margin-right: 32px;
  line-height: 80px;
  transition: color 0.3s ease-out;

  &.active {
    color: ${colors.primary};
  }

  &.hover {
    color: ${colors.primary};
  }
`;

export const HeaderNav = styled.nav`
  display: none;

  @media screen and (${breakpoints.desktop}) {
    display: block;
  }
`;

export const HeaderLinkHamburger = styled(NavLink)`
  margin-right: 32px;
  line-height: 80px;
  transition: color 0.3s ease-out;

  &.active {
    color: ${colors.primary};
  }

  &.hover {
    color: ${colors.primary};
  }
`;

export const HeaderNavHamburger = styled.nav`
  margin-right: 72px;
  z-index: 1;

  @media screen and (${breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 80px;
    right: 0;
    left: 0;
    width: 100%;
    background: white;
    text-align: center;
  }

  @media screen and (${breakpoints.desktop}) {
    display: none;
  }
`;
