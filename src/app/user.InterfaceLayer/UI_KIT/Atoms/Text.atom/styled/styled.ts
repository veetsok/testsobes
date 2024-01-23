"use client";

import styled from "styled-components";
import TextEnum from "../enum";
import commonTextFonts from "../constants/fonts";
import { commonTextStyles } from "../constants/commonTextStyles";
import { TextStyleProps } from "../type";

export const H1 = styled.h1<TextStyleProps>`
  ${commonTextStyles};
  font-family: ${commonTextFonts[TextEnum.enum_Text_H1].fontFamily};
  font-size: ${commonTextFonts[TextEnum.enum_Text_H1].fontSize};
  font-style: ${commonTextFonts[TextEnum.enum_Text_H1].fontStyle};
  font-weight: ${commonTextFonts[TextEnum.enum_Text_H1].fontWeight};
  line-height: ${commonTextFonts[TextEnum.enum_Text_H1].lineHeight};
`;

export const H2 = styled.h2<TextStyleProps>`
  ${commonTextStyles};
  font-family: ${commonTextFonts[TextEnum.enum_Text_H2].fontFamily};
  font-size: ${commonTextFonts[TextEnum.enum_Text_H2].fontSize};
  font-style: ${commonTextFonts[TextEnum.enum_Text_H2].fontStyle};
  font-weight: ${commonTextFonts[TextEnum.enum_Text_H2].fontWeight};
  line-height: ${commonTextFonts[TextEnum.enum_Text_H2].lineHeight};
`;
export const H3 = styled.h3<TextStyleProps>`
  ${commonTextStyles};
  font-family: ${commonTextFonts[TextEnum.enum_Text_H3].fontFamily};
  font-size: ${commonTextFonts[TextEnum.enum_Text_H3].fontSize};
  font-style: ${commonTextFonts[TextEnum.enum_Text_H3].fontStyle};
  font-weight: ${(props) => props.fontWeight};
  line-height: ${commonTextFonts[TextEnum.enum_Text_H3].lineHeight};
`;
export const H4 = styled.h4<TextStyleProps>`
  ${commonTextStyles};
  font-family: ${commonTextFonts[TextEnum.enum_Text_H4].fontFamily};
  font-size: ${commonTextFonts[TextEnum.enum_Text_H4].fontSize};
  font-style: ${commonTextFonts[TextEnum.enum_Text_H4].fontStyle};
  font-weight: ${(props) => props.fontWeight};
  line-height: ${commonTextFonts[TextEnum.enum_Text_H4].lineHeight};
`;

export const H5 = styled.h5<TextStyleProps>`
  ${commonTextStyles};
  font-family: ${commonTextFonts[TextEnum.enum_Text_H5].fontFamily};
  font-size: ${commonTextFonts[TextEnum.enum_Text_H5].fontSize};
  font-style: ${commonTextFonts[TextEnum.enum_Text_H5].fontStyle};
  font-weight: ${(props) => props.fontWeight};
  line-height: ${commonTextFonts[TextEnum.enum_Text_H5].lineHeight};
`;
export const H6 = styled.h6<TextStyleProps>`
  ${commonTextStyles};
  font-family: ${commonTextFonts[TextEnum.enum_Text_H6].fontFamily};
  font-size:${(props) => props.fontSize};
  font-style: ${commonTextFonts[TextEnum.enum_Text_H6].fontStyle};
  font-weight: ${(props) => props.fontWeight},
  line-height: ${commonTextFonts[TextEnum.enum_Text_H6].lineHeight};
`;

export const A1 = styled.a<TextStyleProps>`
  ${commonTextStyles};
  text-decoration: none;
  font-family: ${commonTextFonts[TextEnum.enum_Text_A1].fontFamily};
  font-size: ${(props) => props.fontSize},
  font-style: ${commonTextFonts[TextEnum.enum_Text_A1].fontStyle};
  font-weight: ${(props) => props.fontWeight},
  line-height: ${commonTextFonts[TextEnum.enum_Text_A1].lineHeight};
`;

export const Text = styled.div<TextStyleProps>`
  ${commonTextStyles};
  font-family: ${commonTextFonts[TextEnum.enum_Text_H5].fontFamily};
  font-size: ${commonTextFonts[TextEnum.enum_Text_H5].fontSize};
  font-style: ${commonTextFonts[TextEnum.enum_Text_H5].fontStyle};
  font-weight: ${(props) => props.fontWeight};
  line-height: ${commonTextFonts[TextEnum.enum_Text_H5].lineHeight};
`;
