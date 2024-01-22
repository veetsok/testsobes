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
import TextAtom from "@/app/user.InterfaceLayer/UI_KIT/Atoms/Text.atom";
import TextEnum from "@/app/user.InterfaceLayer/UI_KIT/Atoms/Text.atom/enum";

interface MenuTopProps {}

const MenuTop: React.FC<MenuTopProps> = () => {
  return (
    <ST.MenuTop>
      <nav className={styles.container}>
        <ST.Box>
          <ST.Left>
            <ST.ListItem>
              <TextAtom
                type={TextEnum.enum_Text_A1}
                href=""
                color={Colors.GRAY}
                margin="0 30px 0 0"
              >
                Сервис
              </TextAtom>
              <TextAtom
                type={TextEnum.enum_Text_A1}
                href=""
                color={Colors.GRAY}
                margin="0 30px 0 0"
              >
                Сотрудничество
              </TextAtom>
              <TextAtom type={TextEnum.enum_Text_A1} href="" color={Colors.GRAY}>
                Заказать звонок
              </TextAtom>
            </ST.ListItem>
            <ST.Social>
              <ImageAtom
                type={ImageEnum.enum_defaultSvg}
                icon={<Viber />}
                margin="0 9px 0 0"
                cursor="pointer"
                width="12px"
                fill={Colors.GRAY}
              />
              <ImageAtom
                type={ImageEnum.enum_defaultSvg}
                icon={<WhatsApp />}
                margin="0 9px 0 0"
                cursor="pointer"
                width="12px"
                fill={Colors.GRAY}
              />
              <ImageAtom
                type={ImageEnum.enum_defaultSvg}
                icon={<Telegram />}
                cursor="pointer"
                width="12px"
                fill={Colors.GRAY}
              />
            </ST.Social>
          </ST.Left>
          <ST.MenuTopRight>
            <TextAtom
              type={TextEnum.enum_Text_A1}
              href=""
              color={Colors.GRAY}
              margin="0 9px 0 0"
            >
              +7 (800) 505-54-61
            </TextAtom>
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
