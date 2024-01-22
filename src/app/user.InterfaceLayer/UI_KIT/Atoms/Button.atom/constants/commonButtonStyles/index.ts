import { css } from "styled-components";

import { ButtonStyleProps } from "../../type";
import Colors from "../../../../../constants/colors";

export const commonButtonStyles = css<ButtonStyleProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: ${(props) => props.background};
  margin: ${(props) => props.margin};
  width: ${(props) => (props.width ? props.width : "auto")};
  padding: ${(props) => (props.padding ? props.padding : "14px 0")};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};
  color: ${(props) => props.color};
`;
