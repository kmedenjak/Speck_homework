import styled from "styled-components";
import { breakpoints, colors } from "../../utils/styles/theme";
import { Form as FormFormik } from "formik";

export const Title = styled.h2`
  @media screen and (${breakpoints.tablet}) {
    font-size: 32px;
  }

  @media screen and (${breakpoints.desktop}) {
    font-size: 36px;
    margin-left: -370px;
  }

  text-align: left;
`;

export const Form = styled(FormFormik)`
  @media screen and (${breakpoints.desktopLarge}), (${breakpoints.desktop}) {
    max-width: 400px;
    margin-top: 50px;
    margin-left: -370px;
  }

  @media screen and (${breakpoints.tablet}),
    (${breakpoints.tabletSmall}),
    (${breakpoints.mobileLarge}) {
    max-width: 400px;
    align-items: left;
    margin-top: 50px;
  }
`;


export const Labels = styled.label`
  color: ${colors.textPrimary};
  font-size: 15px;
  padding-bottom: 32px;
`;

export const SectionPass = styled.div`
    color: ${colors.bgSecondary};
    flex: 1;
    float: left;
    margin-right: 60px;
`

export const PassForm = styled(FormFormik)`
  @media screen and (${breakpoints.desktopLarge}), (${breakpoints.desktop}) {
    max-width: 400px;
    margin-top: 50px;
    margin-left: 25px;
  }

  @media screen and (${breakpoints.tablet}),
    (${breakpoints.tabletSmall}),
    (${breakpoints.mobileLarge}) {
    max-width: 400px;
    align-items: left;
    margin-top: 50px;
  }
`;

