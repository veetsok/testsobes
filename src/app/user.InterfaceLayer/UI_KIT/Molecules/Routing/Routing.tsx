import React from "react";
import * as ST from "./styled/styled";

import ImageAtom from "../../Atoms/Image.atom";
import Link from "next/link";
import ImageEnum from "../../Atoms/Image.atom/enum";
import Colors from "@/app/user.InterfaceLayer/constants/colors";
import TextAtom from "../../Atoms/Text.atom";
import TextEnum from "../../Atoms/Text.atom/enum";
import HomeIcon from "../../../shared/assets/icons/home.svg?react";
import { ICommonComponentProps } from "@/app/user.InterfaceLayer/constants/commonComponentProps";

interface RoutingProps {
  childrenText?: ICommonComponentProps["children"];
}

const Routing: React.FC<RoutingProps> = ({ childrenText }) => {
  return (
    <ST.Routing>
      <Link href="/">
        <ImageAtom
          type={ImageEnum.enum_defaultSvg}
          icon={<HomeIcon />}
          fill={Colors.GRAY}
          $hoverFill={Colors.PURPLE}
          cursor="pointer"
          margin="0 5px 0 0"
        />
      </Link>
      <TextAtom type={TextEnum.enum_Text_H6} fontSize="12px" color={Colors.GRAY}>
        {childrenText}
      </TextAtom>
    </ST.Routing>
  );
};
export default Routing;
