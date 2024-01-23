import { ICommonComponentProps } from "@/app/user.InterfaceLayer/constants/commonComponentProps";
import TextEnum from "../enum";

export interface TextType extends ICommonComponentProps, TextStyleProps {
  type: TextEnum;
  children?: ICommonComponentProps["children"];
  isLoading?: ICommonComponentProps["isLoading"];
  href?: string | undefined;
}
export interface TextStyleProps {
  isLoading?: ICommonComponentProps["isLoading"];
  color?: ICommonComponentProps["color"];
  margin?: ICommonComponentProps["margin"];
  padding?: ICommonComponentProps["padding"];
  align?: ICommonComponentProps["align"];
  fontSize?: ICommonComponentProps["fontSize"];
  fontWeight?: ICommonComponentProps["fontWeight"];
  textTransform?: ICommonComponentProps["textTransform"];
}
