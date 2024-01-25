import React from "react";
import TextAtom from "../../Atoms/Text.atom";
import TextEnum from "../../Atoms/Text.atom/enum";
import Colors from "@/app/user.InterfaceLayer/constants/colors";
import Link from "next/link";

interface LogoProps {}

const Logo: React.FC<LogoProps> = () => {
  return (
    <Link href="/">
      <TextAtom
        textTransform="uppercase"
        type={TextEnum.enum_Text_H2}
        color={Colors.BLACK}
      >
        Kugoo
      </TextAtom>
    </Link>
  );
};
export default Logo;
