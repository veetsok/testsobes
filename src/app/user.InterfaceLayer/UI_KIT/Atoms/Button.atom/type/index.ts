import { ICommonComponentProps } from "@/app/user.InterfaceLayer/constants/commonComponentProps";
import ButtonEnum from "../enum";

export interface ButtonType extends ICommonComponentProps, ButtonStyleProps {
  type: ButtonEnum;
  children?: ICommonComponentProps["children"];
  isLoading?: ICommonComponentProps["isLoading"];
  onClick?: ICommonComponentProps["onClick"];
}

export interface ButtonStyleProps {
  isLoading?: ICommonComponentProps["isLoading"];
  active?: ICommonComponentProps["active"];
  padding?: ICommonComponentProps["padding"];
  margin?: ICommonComponentProps["margin"];
  width?: ICommonComponentProps["width"];
  border?: ICommonComponentProps["border"];
  $borderRadius?: ICommonComponentProps["borderRadius"];
  background?: ICommonComponentProps["background"];
  color?: ICommonComponentProps["color"];
}