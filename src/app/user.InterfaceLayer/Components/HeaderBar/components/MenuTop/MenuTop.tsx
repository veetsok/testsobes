import React from "react";
import * as ST from "./styled/styled";
import styles from "../../../../../styles/page.module.css";
import ImageAtom from "../../../../UI_KIT/Atoms/Image.atom";
import ImageEnum from "../../../../UI_KIT/Atoms/Image.atom/enum";
import Viber from "../../../../shared/assets/icons/menutop/viber.svg?react";
import WhatsApp from "../../../../shared/assets/icons/menutop/whatsapp.svg?react";
import Telegram from "../../../../shared/assets/icons/menutop/telegram.svg?react";
import Plus from "../../../../shared/assets/icons/menutop/plus.svg?react";
import Colors from "@/app/user.InterfaceLayer/constants/colors";

interface MenuTopProps {}

const MenuTop: React.FC<MenuTopProps> = () => {
  return (
    <ST.MenuTop>
      <nav className={styles.container}>
        <ST.Box>
          <ST.MenuTopLeft>
            <ST.MenuTopListItem>
              <a href="">Сервис</a>
              <a href="">Сотрудничество</a>
              <a href="">Заказать звонок</a>
            </ST.MenuTopListItem>
            <ST.MenuTopSocial>
              <ImageAtom
                type={ImageEnum.enum_defaultSvg}
                icon={<Viber />}
                margin="0 9px 0 0"
                cursor="pointer"
                fill={Colors.GRAY}
              />
              <ImageAtom
                type={ImageEnum.enum_defaultSvg}
                icon={<WhatsApp />}
                margin="0 9px 0 0"
                cursor="pointer"
                fill={Colors.GRAY}
              />
              <ImageAtom
                type={ImageEnum.enum_defaultSvg}
                icon={<Telegram />}
                cursor="pointer"
                fill={Colors.GRAY}
              />
            </ST.MenuTopSocial>
          </ST.MenuTopLeft>
          <ST.MenuTopRight>
            <a href="">+7 (800) 505-54-61</a>
            <ImageAtom
              type={ImageEnum.enum_defaultSvg}
              icon={<Plus />}
              border={`1px solid ${Colors.GRAY}`}
              borderRadius="20px"
              padding="4px"
            />
          </ST.MenuTopRight>
        </ST.Box>
      </nav>
    </ST.MenuTop>
  );
};
export default MenuTop;
