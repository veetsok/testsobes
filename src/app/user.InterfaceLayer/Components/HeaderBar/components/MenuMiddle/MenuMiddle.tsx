import React from "react";
import * as ST from "./styled/styled";
import styles from "../../../../../styles/page.module.css";
import TextAtom from "../../../../UI_KIT/Atoms/Text.atom";
import TextEnum from "../../../../UI_KIT/Atoms/Text.atom/enum";
import ImageAtom from "../../../../UI_KIT/Atoms/Image.atom";
import ImageEnum from "../../../../UI_KIT/Atoms/Image.atom/enum";
import BurgerIcon from "../../../../shared/assets/icons/menumiddle/burger.svg?react";
import SearchIcon from "../../../../shared/assets/icons/menumiddle/search.svg?react";
import BalanceIcon from "../../../../shared/assets/icons/menumiddle/balance.svg?react";
import HeartIcon from "../../../../shared/assets/icons/menumiddle/heart.svg?react";
import BasketIcon from "../../../../shared/assets/icons/menumiddle/shopping-cart.svg?react";
import Colors from "../../../../constants/colors";
import ButtonAtom from "@/app/user.InterfaceLayer/UI_KIT/Atoms/Button.atom";
import ButtonEnum from "@/app/user.InterfaceLayer/UI_KIT/Atoms/Button.atom/enum";

interface MenuMiddleProps {}

const MenuMiddle: React.FC<MenuMiddleProps> = () => {
  return (
    <ST.MenuMiddle>
      <div className={styles.container}>
        <ST.Box>
          <ST.Logo>
            <TextAtom type={TextEnum.enum_Text_H2}>Kugoo</TextAtom>
          </ST.Logo>

          <ButtonAtom
            padding="8px 18px 9px 15px"
            $borderRadius="5px"
            border={`1.5px solid ${Colors.PURPLE}`}
            background={Colors.PURPLE}
            type={ButtonEnum.enum_defaultButton}
          >
            <ImageAtom
              type={ImageEnum.enum_defaultSvg}
              icon={<BurgerIcon />}
              fill={Colors.WHITE}
            />
            <TextAtom
              margin="0 0 0 13px"
              type={TextEnum.enum_Text_H4}
              color={Colors.WHITE}
            >
              Каталог
            </TextAtom>
          </ButtonAtom>

          <ST.Search>
            <div>SELECT</div>
            <ImageAtom type={ImageEnum.enum_defaultSvg} icon={<SearchIcon />} />
          </ST.Search>
          <ST.ShopBox>
            <ImageAtom
              margin="0 25px 0 0"
              type={ImageEnum.enum_defaultSvg}
              icon={<BalanceIcon />}
              fill={Colors.BLACK}
            />
            <ImageAtom
              margin="0 25px 0 0"
              type={ImageEnum.enum_defaultSvg}
              icon={<HeartIcon />}
              fill={Colors.BLACK}
            />
            <ButtonAtom type={ButtonEnum.enum_defaultButton}>
              <ImageAtom
                type={ImageEnum.enum_defaultSvg}
                icon={<BasketIcon />}
                fill={Colors.PURPLE}
                stroke={Colors.PURPLE}
              />
              <TextAtom margin="0 0 0 10px" type={TextEnum.enum_Text_H4}>
                Корзина
              </TextAtom>
            </ButtonAtom>
          </ST.ShopBox>
        </ST.Box>
      </div>
    </ST.MenuMiddle>
  );
};
export default MenuMiddle;
