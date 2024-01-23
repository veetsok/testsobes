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
          <TextAtom
            color={Colors.BLACK}
            type={TextEnum.enum_Text_H2}
            textTransform="uppercase"
          >
            Гарантия 1 год
          </TextAtom>
          <TextAtom color={Colors.BLACK} type={TextEnum.enum_Text_H5} fontWeight="400">
            на весь ассортимент
          </TextAtom>
        </ST.SubMainBox>
        <ST.SubMainBox>
          <TextAtom
            color={Colors.BLACK}
            type={TextEnum.enum_Text_H2}
            textTransform="uppercase"
          >
            рассрочка
          </TextAtom>
          <TextAtom color={Colors.BLACK} type={TextEnum.enum_Text_H5} fontWeight="400">
            от 6 месяцев
          </TextAtom>
        </ST.SubMainBox>

        <ST.SubMainBox>
          <TextAtom
            color={Colors.BLACK}
            type={TextEnum.enum_Text_H2}
            textTransform="uppercase"
          >
            Подарки
          </TextAtom>
          <TextAtom color={Colors.BLACK} type={TextEnum.enum_Text_H5} fontWeight="400">
            и бонусам к покупкам
          </TextAtom>
        </ST.SubMainBox>
        <Yandex />
      </ST.SubMain>
    </div>
  );
};
export default SubMain;
