import { css } from "styled-components";
import { TextStyleProps } from "../../type";
import Colors from "@/app/user.InterfaceLayer/constants/colors";

export const commonTextStyles = css<TextStyleProps>`
  text-overflow: ellipsis;
  overflow: hidden;
  margin: 0;
  white-space: normal;
  display: ${(props) => props.display};
  color: ${(props) => (props.color ? props.color : Colors.BLACK)};
  width: ${(props) => props.width};
  background: ${(props) => props.background};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.$borderRadius};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  text-align: ${(props) => props.align};
  text-transform: ${(props) => props.textTransform};
`;
