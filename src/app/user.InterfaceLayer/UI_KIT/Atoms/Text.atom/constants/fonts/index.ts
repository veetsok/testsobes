import FontsEnum from "@/app/user.InterfaceLayer/constants/fonts";
import TextEnum from "../../enum";

const commonTextFonts = {
  [TextEnum.enum_Text_H1]: {
    fontFamily: `${FontsEnum.Jost}`,
    fontSize: "60px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
  },
  [TextEnum.enum_Text_H2]: {
    fontFamily: `${FontsEnum.Jost}`,
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
  },
  [TextEnum.enum_Text_H3]: {
    fontFamily: `${FontsEnum.Jost}`,
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "normal",
  },
  [TextEnum.enum_Text_H4]: {
    fontFamily: `${FontsEnum.Jost}`,
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
  },
  [TextEnum.enum_Text_H5]: {
    fontFeatureFettings: "'clig' off, 'liga' off",
    fontFamily: `${FontsEnum.Jost}`,
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "130%",
    letterSpacing: "0.1px",
  },
  [TextEnum.enum_Text_H6]: {
    fontFamily: `${FontsEnum.Jost}`,
    fontSize: "12px",
    fontStyle: "normal",
    lineHeight: "normal",
  },
  [TextEnum.enum_Text_A1]: {
    fontFamily: `${FontsEnum.Jost}`,
    fontStyle: "normal",
    lineHeight: "normal",
  },
};

export default commonTextFonts;
