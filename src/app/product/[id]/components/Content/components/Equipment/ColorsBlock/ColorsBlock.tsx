import React from "react";
import PinkIcon from "../../../../../../../user.InterfaceLayer/shared/assets/icons/pink.svg?react";
import BlueIcon from "../../../../../../../user.InterfaceLayer/shared/assets/icons/blue.svg?react";
import RedIcon from "../../../../../../../user.InterfaceLayer/shared/assets/icons/red.svg?react";
import ButtonAtom from "@/app/user.InterfaceLayer/UI_KIT/Atoms/Button.atom";
import ButtonEnum from "@/app/user.InterfaceLayer/UI_KIT/Atoms/Button.atom/enum";
import ImageAtom from "@/app/user.InterfaceLayer/UI_KIT/Atoms/Image.atom";
import ImageEnum from "@/app/user.InterfaceLayer/UI_KIT/Atoms/Image.atom/enum";
import TextAtom from "@/app/user.InterfaceLayer/UI_KIT/Atoms/Text.atom";
import TextEnum from "@/app/user.InterfaceLayer/UI_KIT/Atoms/Text.atom/enum";
import Colors from "@/app/user.InterfaceLayer/constants/colors";

interface ColorsBlockProps {}

const ColorsBlock: React.FC<ColorsBlockProps> = () => {
  return (
    <div>
      <ButtonAtom
        type={ButtonEnum.enum_equipmentButton}
        display="inline-block"
        width="227px"
        height="126px"
        padding="27.5px 0"
        margin="20px 20px 0  0"
      >
        <TextAtom type={TextEnum.enum_Text_H4} margin="0 0 -10px 0" color={Colors.BLACK}>
          Без упаковки
        </TextAtom>
      </ButtonAtom>
      <ButtonAtom
        type={ButtonEnum.enum_equipmentButton}
        display="inline-block"
        width="227px"
        height="126px"
        padding="27.5px 0"
        margin="20px 0 0  0"
      >
        <ImageAtom type={ImageEnum.enum_defaultSvg} icon={<PinkIcon />} />
        <TextAtom type={TextEnum.enum_Text_H4} color={Colors.BLACK}>
          Розовый
        </TextAtom>
      </ButtonAtom>
      <ButtonAtom
        type={ButtonEnum.enum_equipmentButton}
        display="inline-block"
        width="227px"
        height="126px"
        padding="27.5px 0"
        margin="20px 20px 0  0"
      >
        <ImageAtom
          type={ImageEnum.enum_defaultSvg}
          fill={Colors.PURPLE}
          icon={<BlueIcon />}
        />
        <TextAtom type={TextEnum.enum_Text_H4} color={Colors.BLACK}>
          Синий
        </TextAtom>
      </ButtonAtom>
      <ButtonAtom
        type={ButtonEnum.enum_equipmentButton}
        display="inline-block"
        width="227px"
        height="126px"
        padding="27.5px 0"
        margin="20px 20px 0  0"
      >
        <ImageAtom type={ImageEnum.enum_defaultSvg} icon={<RedIcon />} />
        <TextAtom type={TextEnum.enum_Text_H4} color={Colors.BLACK}>
          Красный
        </TextAtom>
      </ButtonAtom>
    </div>
  );
};
export default ColorsBlock;
