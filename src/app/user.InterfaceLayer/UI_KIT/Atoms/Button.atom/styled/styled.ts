"use client";

import styled from "styled-components";
import { ButtonStyleProps } from "../type";
import { commonButtonStyles } from "../constants/commonButtonStyles";
import { commonButtonAnimate } from "../constants/commonButtonStyles/animation";
import Colors from "../../../../constants/colors";

export const DefaultButton = styled.button<ButtonStyleProps>`
  ${commonButtonStyles};
  ${commonButtonAnimate};
  border: 1.3px solid ${Colors.PURPLE};
  // background: ${(props) => (props.active ? Colors.WHITE : Colors.TRANSPARENT)};
  color: ${(props) => (props.active ? Colors.WHITE : Colors.GRAY)};
`;
export const FilterButton = styled.button<ButtonStyleProps>`
  ${commonButtonStyles};
  ${commonButtonAnimate};
  border-radius: 5px;
  padding: 10px 20px;
  border: 1.3px solid ${(props) => (props.active ? Colors.PURPLE : Colors.TRANSPARENT)};
  background: ${(props) => (props.active ? Colors.TRANSPARENT : Colors.BG_BUTTON)};
  color: ${(props) => (props.active ? Colors.PURPLE : Colors.GRAY)};
`;

export const Button = styled.div<ButtonStyleProps>`
  ${commonButtonStyles};
  border: 2px solid ${Colors.RED};
  color: ${Colors.RED};
`;
