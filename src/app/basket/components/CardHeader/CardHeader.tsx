import React from "react";
import * as ST from "./styled/styled";
import TextAtom from "@/app/user.InterfaceLayer/UI_KIT/Atoms/Text.atom";
import TextEnum from "@/app/user.InterfaceLayer/UI_KIT/Atoms/Text.atom/enum";
import ButtonAtom from "@/app/user.InterfaceLayer/UI_KIT/Atoms/Button.atom";
import ButtonEnum from "@/app/user.InterfaceLayer/UI_KIT/Atoms/Button.atom/enum";

interface CardHeaderProps {
  clearCart?: any;
}

const CardHeader: React.FC<CardHeaderProps> = ({ clearCart }) => {
  return (
    <ST.HeaderBox>
      <TextAtom type={TextEnum.enum_Text_H6}>Товар</TextAtom>
      <ST.HeaderBox2>
        <TextAtom type={TextEnum.enum_Text_H6}>Количество</TextAtom>
        <TextAtom type={TextEnum.enum_Text_H6}>Сумма</TextAtom>
        <ButtonAtom type={ButtonEnum.enum_defaultButton} onClick={clearCart}>
          Удалить все
        </ButtonAtom>
      </ST.HeaderBox2>
    </ST.HeaderBox>
  );
};
export default CardHeader;
