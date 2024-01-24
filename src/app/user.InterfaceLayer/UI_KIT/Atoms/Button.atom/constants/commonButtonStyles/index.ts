import { css } from "styled-components";

import { ButtonStyleProps } from "../../type";

export const commonButtonStyles = css<ButtonStyleProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: ${(props) => (props.height ? props.height : "auto")};
  background: ${(props) => props.background};
  margin: ${(props) => props.margin};
  width: ${(props) => (props.width ? props.width : "auto")};
  padding: ${(props) => props.padding};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.$borderRadius};
  color: ${(props) => props.color};
`;
