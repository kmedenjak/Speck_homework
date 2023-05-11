import styled from "styled-components";
import { breakpoints, colors} from "../../utils/styles/theme";

export const PassBackground = styled.section`
  display: flex;
  margin-top: 40px;
  min-width: 400px;
`;

export const PassBackgroundInner = styled.div`
  padding: 20px 0;
  background-color: ${colors.bgSecondary};
  min-width: 400px;

  @media screen and (${breakpoints.tablet}) {
    padding: 20px 0;
  }
  
  @media screen and (${breakpoints.desktop}) {
    padding: 20px 0;
  }

  @media screen and (${breakpoints.desktopLarge}) {
    max-width: 1280px;
  }
`;

export const PassTitle = styled.h2`
  @media screen and (${breakpoints.tablet}) {
    font-size: 16px;
  }

  @media screen and (${breakpoints.desktop}) {
    font-size: 16px;
  }

  @media screen and (${breakpoints.mobileLarge}) {
    font-size: 16px;
  }

  color: ${colors.textPrimary};
  max-width: 600px;
  text-align: left;
  padding-left: 20px;
  margin-bottom: 32px;
  font-size: 28px;
`;

export const PassSubtitle = styled.p`
  padding-left: 20px;
  padding-right: 20px;
  text-align: left;
  color: ${colors.textPrimary};
  font-size: 16px;
  margin-bottom: 48px;
`;
