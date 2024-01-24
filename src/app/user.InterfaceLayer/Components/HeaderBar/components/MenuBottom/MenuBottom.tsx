import React from "react";
import * as ST from "./styled/styled";
import styles from "../../../../../styles/page.module.css";
import TextAtom from "@/app/user.InterfaceLayer/UI_KIT/Atoms/Text.atom";
import TextEnum from "@/app/user.InterfaceLayer/UI_KIT/Atoms/Text.atom/enum";
import Colors from "@/app/user.InterfaceLayer/constants/colors";

interface MenuBottomProps {}

const MenuBottom: React.FC<MenuBottomProps> = () => {
  return (
    <ST.MenuBottom>
      <div className={styles.container}>
        <ST.Container>
          <TextAtom type={TextEnum.enum_Text_H6} fontSize="14px" fontWeight="500">
            О магазине
          </TextAtom>
          <ST.Box>
            <TextAtom type={TextEnum.enum_Text_H6} fontSize="14px" fontWeight="500">
              Доставка и оплата
            </TextAtom>
            <TextAtom
              type={TextEnum.enum_Text_H6}
              fontSize="10px"
              fontWeight="400"
              color={Colors.WHITE}
              background={Colors.PURPLE}
              padding="3px 8px"
              $borderRadius="300px"
            >
              Доступна рассрочка
            </TextAtom>
          </ST.Box>
          <TextAtom type={TextEnum.enum_Text_H6} fontSize="14px" fontWeight="500">
            Тест-драйв
          </TextAtom>
          <TextAtom type={TextEnum.enum_Text_H6} fontSize="14px" fontWeight="500">
            Блог
          </TextAtom>
          <TextAtom type={TextEnum.enum_Text_H6} fontSize="14px" fontWeight="500">
            Контакты
          </TextAtom>
          <ST.Box>
            <TextAtom type={TextEnum.enum_Text_H6} fontSize="14px" fontWeight="500">
              Акции
            </TextAtom>
            <TextAtom
              type={TextEnum.enum_Text_H6}
              fontSize="10px"
              fontWeight="500"
              color={Colors.WHITE}
              background={Colors.PURPLE}
              $borderRadius="50%"
              padding="4px 5.27px 2px 5.73px"
            >
              %
            </TextAtom>
          </ST.Box>
        </ST.Container>
      </div>
    </ST.MenuBottom>
  );
};
export default MenuBottom;
