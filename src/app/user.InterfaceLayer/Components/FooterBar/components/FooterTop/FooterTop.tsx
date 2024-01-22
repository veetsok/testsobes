import React from "react";
import * as ST from "./styled/styled";
import styles from "../../../../../styles/page.module.css";
import TextAtom from "@/app/user.InterfaceLayer/UI_KIT/Atoms/Text.atom";
import TextEnum from "@/app/user.InterfaceLayer/UI_KIT/Atoms/Text.atom/enum";
import Colors from "@/app/user.InterfaceLayer/constants/colors";
import ButtonAtom from "@/app/user.InterfaceLayer/UI_KIT/Atoms/Button.atom";
import ButtonEnum from "@/app/user.InterfaceLayer/UI_KIT/Atoms/Button.atom/enum";

interface FooterTopProps {}

const FooterTop: React.FC<FooterTopProps> = () => {
  return (
    <ST.FooterTop>
      <div className={styles.container}>
        <TextAtom type={TextEnum.enum_Text_H1} color={Colors.WHITE} fontWeight="600">
          Оставьте свою почту и станьте первым, кто получит скидку на новые самокаты
        </TextAtom>
        <ButtonAtom type={ButtonEnum.enum_defaultButton}>Подписаться</ButtonAtom>
      </div>
    </ST.FooterTop>
  );
};
export default FooterTop;
