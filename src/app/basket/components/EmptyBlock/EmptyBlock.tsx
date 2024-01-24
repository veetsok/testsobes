import React from "react";
import * as ST from "./styled/styled";
import ImageAtom from "@/app/user.InterfaceLayer/UI_KIT/Atoms/Image.atom";
import EmpryIcon from "../../../user.InterfaceLayer/shared/assets/icons/empty.svg?react";
import ImageEnum from "@/app/user.InterfaceLayer/UI_KIT/Atoms/Image.atom/enum";
import TextAtom from "@/app/user.InterfaceLayer/UI_KIT/Atoms/Text.atom";
import TextEnum from "@/app/user.InterfaceLayer/UI_KIT/Atoms/Text.atom/enum";
import ButtonAtom from "@/app/user.InterfaceLayer/UI_KIT/Atoms/Button.atom";
import ButtonEnum from "@/app/user.InterfaceLayer/UI_KIT/Atoms/Button.atom/enum";
import Colors from "@/app/user.InterfaceLayer/constants/colors";

interface EmptyBlockProps {}

const EmptyBlock: React.FC<EmptyBlockProps> = () => {
  return (
    <ST.Container>
      <ImageAtom type={ImageEnum.enum_defaultSvg} icon={<EmpryIcon />} />
      <TextAtom type={TextEnum.enum_Text_H2}>Ваша корзина пуста</TextAtom>
      <TextAtom
        type={TextEnum.enum_Text_H6}
        fontSize="14px"
        fontWeight="400"
        color={Colors.BLACK}
        margin="0 0 25px 0"
      >
        Добавьте в нее товары из каталога
      </TextAtom>
      <ButtonAtom
        type={ButtonEnum.enum_defaultButton}
        background={Colors.PURPLE}
        padding="10px 20px"
        $borderRadius="5px"
        border={`1.3px solid ${Colors.PURPLE}`}
      >
        <TextAtom type={TextEnum.enum_Text_H6} color={Colors.WHITE}>
          Перейти в каталог
        </TextAtom>
      </ButtonAtom>
    </ST.Container>
  );
};
export default EmptyBlock;
