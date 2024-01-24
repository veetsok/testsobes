import { css } from "styled-components";
import { TextStyleProps } from "../../type";

export const commonTextStyles = css<TextStyleProps>`
  text-overflow: ellipsis;
  overflow: hidden;
  margin: 0;
  white-space: normal;
  color: ${(props) => props.color};
  width: ${(props) => props.width};
  background: ${(props) => props.background};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.$borderRadius};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  text-align: ${(props) => props.align};
  color: ${(props) => props.color};
  text-transform: ${(props) => props.textTransform};
`;
