import { ICommonComponentProps } from "@/app/user.InterfaceLayer/constants/commonComponentProps";
import TextEnum from "../enum";

export interface TextType extends ICommonComponentProps, TextStyleProps {
  type: TextEnum;
  children?: ICommonComponentProps["children"];
  isLoading?: ICommonComponentProps["isLoading"];
  href?: string | undefined;
}
export interface TextStyleProps {
  display?: ICommonComponentProps["display"];
  isLoading?: ICommonComponentProps["isLoading"];
  color?: ICommonComponentProps["width"];
  width?: ICommonComponentProps["border"];
  border?: ICommonComponentProps["color"];
  margin?: ICommonComponentProps["margin"];
  padding?: ICommonComponentProps["padding"];
  align?: ICommonComponentProps["align"];
  fontSize?: ICommonComponentProps["fontSize"];
  fontWeight?: ICommonComponentProps["fontWeight"];
  textTransform?: ICommonComponentProps["textTransform"];
  background?: ICommonComponentProps["background"];
  $borderRadius?: ICommonComponentProps["borderRadius"];
  $textDecoration?: ICommonComponentProps["textDecoration"];
}
