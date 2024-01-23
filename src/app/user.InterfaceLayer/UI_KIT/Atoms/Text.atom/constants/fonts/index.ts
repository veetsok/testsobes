import FontsEnum from "@/app/user.InterfaceLayer/constants/fonts";
import TextEnum from "../../enum";

const commonTextFonts = {
  [TextEnum.enum_Text_H1]: {
    fontFamily: `${FontsEnum.Jost}`,
    fontSize: "35px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "normal",
  },
  [TextEnum.enum_Text_H2]: {
    fontFamily: `${FontsEnum.Jost}`,
    fontSize: "25px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "normal",
  },
  [TextEnum.enum_Text_H3]: {
    fontFamily: `${FontsEnum.Jost}`,
    fontSize: "20px",
    fontStyle: "normal",
    // fontWeight: 500,
    lineHeight: "normal",
  },
  [TextEnum.enum_Text_H4]: {
    fontFamily: `${FontsEnum.Jost}`,
    fontSize: "18px",
    fontStyle: "normal",
    // fontWeight: 600,
    lineHeight: "normal",
  },
  [TextEnum.enum_Text_H5]: {
    fontFamily: `${FontsEnum.Jost}`,
    fontSize: "16px",
    fontStyle: "normal",
    // fontWeight: 500,
    lineHeight: "normal",
  },
  [TextEnum.enum_Text_H6]: {
    fontFamily: `${FontsEnum.Jost}`,
    // fontSize: "12px",  ==== 2||14 ====
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
