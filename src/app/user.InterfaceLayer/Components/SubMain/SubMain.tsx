import React from "react";
import * as ST from "./styled/styled";
import styles from "../../../styles/page.module.css";
import TextAtom from "../../UI_KIT/Atoms/Text.atom";
import TextEnum from "../../UI_KIT/Atoms/Text.atom/enum";
import Colors from "../../constants/colors";
import Yandex from "./components/Yandex/Yandex";

interface SubMainProps {}

const SubMain: React.FC<SubMainProps> = () => {
  return (
    <div className={styles.container}>
      <ST.SubMain>
        <ST.SubMainBox>
          <TextAtom color={Colors.BLACK} type={TextEnum.enum_Text_H3}>
            Гарантия 1 год
          </TextAtom>
          <TextAtom color={Colors.BLACK} type={TextEnum.enum_Text_H5}>
            на весь ассортимент
          </TextAtom>
        </ST.SubMainBox>
        <ST.SubMainBox>
          <TextAtom color={Colors.BLACK} type={TextEnum.enum_Text_H3}>
            рассрочка
          </TextAtom>
          <TextAtom color={Colors.BLACK} type={TextEnum.enum_Text_H5}>
            от 6 месяцев
          </TextAtom>
        </ST.SubMainBox>

        <ST.SubMainBox>
          <TextAtom color={Colors.BLACK} type={TextEnum.enum_Text_H3}>
            Подарки
          </TextAtom>
          <TextAtom color={Colors.BLACK} type={TextEnum.enum_Text_H5}>
            и бонусам к покупкам
          </TextAtom>
        </ST.SubMainBox>
        <Yandex />
      </ST.SubMain>
    </div>
  );
};
export default SubMain;
