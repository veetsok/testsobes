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
          margin="20px 0 10px 0"
        >
          <TextAtom type={TextEnum.enum_Text_H5} color={Colors.BLACK}>
            VIP-версия
          </TextAtom>
        </ButtonAtom>
        <ST.Border></ST.Border>
      </ST.EquipmentList>
      <ST.BlockDefault>
        <ST.TextContent>
          <TextAtom
            type={TextEnum.enum_Text_H6}
            fontSize="14px"
            fontWeight="400"
            color={Colors.GRAY}
            margin="0 0 8px 0"
          >
            Покрышки
          </TextAtom>
          <TextAtom type={TextEnum.enum_Text_H4}>Внедорожная шипованная</TextAtom>
          <TextAtom type={TextEnum.enum_Text_H6} fontSize="14px" fontWeight="400">
            + установка (с доп.комплектом базовых покрышек)
          </TextAtom>
          <TextAtom
            type={TextEnum.enum_Text_H6}
            fontSize="14px"
            fontWeight="500"
            margin=" 8px 0 0  0"
          >
            7600 руб.
          </TextAtom>
        </ST.TextContent>
        <TextAtom type={TextEnum.enum_Text_H6} fontSize="14px" color={Colors.PURPLE}>
          Изменить
        </TextAtom>
      </ST.BlockDefault>
      <ST.Border></ST.Border>
      <ST.BlockDefault>
        <ST.Equipment>
          <TextAtom margin="10px 0 20px 0 " type={TextEnum.enum_Text_H5} fontWeight="500">
            Гарантия
          </TextAtom>
          <ButtonAtom
            type={ButtonEnum.enum_equipmentButton}
            display="inline-block"
            width="227px"
            height="126px"
            padding="27.5px 0"
            margin="0 20px 0  0"
          >
            <TextAtom type={TextEnum.enum_Text_H5} color={Colors.BLACK}>
              Стандартная 1 год
            </TextAtom>
            <TextAtom type={TextEnum.enum_Text_H5} color={Colors.BLACK}>
              Бесплатно
            </TextAtom>
          </ButtonAtom>
          <ButtonAtom
            type={ButtonEnum.enum_equipmentButton}
            display="inline-block"
            width="227px"
            height="126px"
            height="126px"
            padding="27.5px 0"
          >
            <TextAtom type={TextEnum.enum_Text_H5} color={Colors.BLACK}>
              Расширенная 2 года
            </TextAtom>
            <TextAtom type={TextEnum.enum_Text_H5} color={Colors.BLACK}>
              2 990 руб.
            </TextAtom>
          </ButtonAtom>
        </ST.Equipment>
      </ST.BlockDefault>
      <ST.Border></ST.Border>
      <ST.BlockDefault>
        <ST.Equipment>
          <TextAtom margin="10px 0 20px 0 " type={TextEnum.enum_Text_H5} fontWeight="500">
            Дополнительные услуги
          </TextAtom>
          <ButtonAtom
            type={ButtonEnum.enum_equipmentButton}
            display="inline-block"
            width="227px"
            height="126px"
            padding="27.5px 0"
            margin="0 20px 0  0"
          >
            <TextAtom type={TextEnum.enum_Text_H5} color={Colors.BLACK}>
              Нет
            </TextAtom>
            <TextAtom type={TextEnum.enum_Text_H5} color={Colors.BLACK}>
              <br />
            </TextAtom>
          </ButtonAtom>
          <ButtonAtom
            type={ButtonEnum.enum_equipmentButton}
            display="inline-block"
            width="227px"
            height="126px"
            padding="27.5px 0"
          >
            <TextAtom type={TextEnum.enum_Text_H5} color={Colors.BLACK}>
              Настройка
            </TextAtom>
            <TextAtom type={TextEnum.enum_Text_H5} color={Colors.BLACK}>
              1 520 руб.
            </TextAtom>
          </ButtonAtom>
          <ButtonAtom
            type={ButtonEnum.enum_equipmentButton}
            display="inline-block"
            width="227px"
            height="126px"
            padding="27.5px 0"
            margin="20px 20px 0 0"
          >
            <TextAtom type={TextEnum.enum_Text_H5} color={Colors.BLACK}>
              Гидроизоляция
            </TextAtom>
            <TextAtom type={TextEnum.enum_Text_H5} color={Colors.BLACK}>
              3 850 руб.
            </TextAtom>
          </ButtonAtom>
          <ButtonAtom
            type={ButtonEnum.enum_equipmentButton}
            display="inline-block"
            width="227px"
            height="126px"
            padding="27.5px 0"
            margin="20px 0 0 0"
          >
            <TextAtom type={TextEnum.enum_Text_H5} color={Colors.BLACK}>
              Гидроизоляция и настройка
            </TextAtom>
            <TextAtom type={TextEnum.enum_Text_H5} color={Colors.BLACK}>
              3 409 руб. (-30%)
            </TextAtom>
          </ButtonAtom>
        </ST.Equipment>
      </ST.BlockDefault>
    </ST.Equipment>
  );
};
export default Equipment;
