import styled from "styled-components";
import { colors } from "../../utils/styles/theme";

export const SearchInputs = styled.div`
  display: flex;
`;

export const Input = styled.input`
  border: 1px solid ${colors.primary};
  border-radius: 5px;
  font-size: 18px;
  padding: 5px;
  margin-bottom: 30px;
  position: relative;
`;

export const Search = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
