import React from "react";
import * as ST from "./styled/styled";
import TextAtom from "@/app/user.InterfaceLayer/UI_KIT/Atoms/Text.atom";
import TextEnum from "@/app/user.InterfaceLayer/UI_KIT/Atoms/Text.atom/enum";
import QuestionIcon from "../../../../../../user.InterfaceLayer/shared/assets/icons/questionCircle.svg?react";
import ButtonAtom from "@/app/user.InterfaceLayer/UI_KIT/Atoms/Button.atom";
import ButtonEnum from "@/app/user.InterfaceLayer/UI_KIT/Atoms/Button.atom/enum";
import ImageAtom from "@/app/user.InterfaceLayer/UI_KIT/Atoms/Image.atom";
import ImageEnum from "@/app/user.InterfaceLayer/UI_KIT/Atoms/Image.atom/enum";
import Colors from "@/app/user.InterfaceLayer/constants/colors";

interface EquipmentProps {}

const Equipment: React.FC<EquipmentProps> = () => {
  return (
    <ST.Equipment>
      <ST.Header>
        <TextAtom
          type={TextEnum.enum_Text_H5}
          margin="0 6px 0 0"
          fontWeight="500"
          color={Colors.BLACK}
        >
          Комплектация
        </TextAtom>
        <ImageAtom type={ImageEnum.enum_defaultSvg} icon={<QuestionIcon />} />
      </ST.Header>
      <ST.EquipmentList>
        <ButtonAtom
          type={ButtonEnum.enum_equipmentButton}
          margin="0 20px 0 0"
          width="227px"
          padding="27.5px 0"
        >
          <TextAtom type={TextEnum.enum_Text_H5} color={Colors.BLACK}>
            Базовая
          </TextAtom>
        </ButtonAtom>
        <ButtonAtom
          type={ButtonEnum.enum_equipmentButton}
          width="227px"
          padding="27.5px 0"
        >
          <TextAtom type={TextEnum.enum_Text_H5} color={Colors.BLACK}>
            Версия MAX
          </TextAtom>
        </ButtonAtom>
        <ButtonAtom
          type={ButtonEnum.enum_equipmentButton}
          width="227px"
          padding="27.5px 0"
          margin="20px 0 0 0"
        >
          <TextAtom type={TextEnum.enum_Text_H5} color={Colors.BLACK}>
            VIP-версия
          </TextAtom>
        </ButtonAtom>
      </ST.EquipmentList>
      <ST.BlockDefault>
        <ST.TextContent>
          <TextAtom type={TextEnum.enum_Text_H5}>Комплектация</TextAtom>
          <TextAtom type={TextEnum.enum_Text_H5}>Базовая</TextAtom>
        </ST.TextContent>
        <TextAtom type={TextEnum.enum_Text_A1}>Изменить</TextAtom>
      </ST.BlockDefault>
    </ST.Equipment>
  );
};
export default Equipment;
