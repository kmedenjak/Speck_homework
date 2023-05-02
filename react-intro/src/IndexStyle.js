import styled from "styled-components";
import { colors } from "../../utils/styles/theme";

export const All = styled.element`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
`;
export const Body = styled.body`
  font-family: ${colors.primary};
  color: ${colors.textPrimary};
`;

export const A = styled.a`
  text-decoration: none;
  color: inherit;
`;
