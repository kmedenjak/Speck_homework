import styled, { css } from "styled-components";
import { breakpoints, colors, fonts } from "../../utils/styles/theme";
import {
  Form as FormFormik,
  Field as FieldFormik,
  ErrorMessage as ErrorMessageFormik,
} from "formik";

export const Buttons = styled.button`
  display: inline-block;
  padding: 12px 20px;
  border-radius: 4px;
  background-color: ${colors.primary};
  color: ${colors.secondary};
  transition: background-color 0.3s ease-out;
  outline: none;
  border: none;
  margin-left: 16px;
  margin-right: 16px;
  ${(props) =>
    props.isSecondary &&
    `
    padding: 16px 20px;
  `}

  ${(props) =>
    props.isProfile &&
    `
    padding: 16px 20px;
    position: absolute;
    right: 5%;
    top: 27%;
    background-color: ${colors.secondary};
    border: 1px solid ${colors.primary};
    color: ${colors.primary};
    
    @media screen and (${breakpoints.tablet}) {
      top: 20%;
  }
  `}

${(props) =>
    props.isProfile2 &&
    `
    padding: 16px 20px;
    position: absolute;
    right: 5%;
    top: 27%;

    @media screen and (${breakpoints.tablet}) {
      top: 20%;
  }
  `}

  ${(props) =>
    props.isOutline &&
    `
    background-color: ${colors.secondary};
    border: 1px solid ${colors.primary};
    color: ${colors.primary};
  `}

  &:hover {
    background-color: ${colors.primaryDark};
    ${(props) =>
      props.isOutline &&
      `
    color: ${colors.secondary};
  `}
    ${(props) =>
      props.isProfile &&
      `
    color: ${colors.secondary};
  `}
  }
`;

export const Grid = styled.div`
  display: grid;
  gap: 32px;

  @media screen and (${breakpoints.mobileLarge}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (${breakpoints.tablet}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (${breakpoints.desktopLarge}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const Form = styled(FormFormik)`
  @media screen and (${breakpoints.desktopLarge}) {
    max-width: 400px;
    margin: 0 auto;
  }
`;

export const FormRow = styled.div`
  margin-bottom: 32px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const FieldStlye = css`
  border: 1px solid ${colors.textSecondary};
  border-radius: 6px;
  width: 350px;
  line-height: 50px;
  height: 50px;
  padding: 0 12px;
  outline: none;
  font-size: 14px;
  font-family: ${fonts.primary};

  &:focus {
    border: 1px solid ${colors.textPrimary};
  }

  @media screen and (${breakpoints.desktop}) {
    font-size: 16px;
  }
`;

export const Field = styled(FieldFormik)`
  ${FieldStlye};
`;

export const Select = styled.select`
  ${FieldStlye};
`;

export const Option = styled.option``;

export const ErrorMessage = styled(ErrorMessageFormik)`
  font-size: 14px;
  color: ${colors.primary};
  padding-top: 8px;
`;
