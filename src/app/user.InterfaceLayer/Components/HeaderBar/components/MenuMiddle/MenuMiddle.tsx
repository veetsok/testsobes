import React from "react";
import * as ST from "./styled/styled";
import styles from "../../../../../styles/page.module.css";
import TextAtom from "../../../../UI_KIT/Atoms/Text.atom";
import TextEnum from "../../../../UI_KIT/Atoms/Text.atom/enum";
import ImageAtom from "../../../../UI_KIT/Atoms/Image.atom";
import ImageEnum from "../../../../UI_KIT/Atoms/Image.atom/enum";
import SearchIcon from "../../../../shared/assets/icons/menumiddle/search.svg?react";
import BalanceIcon from "../../../../shared/assets/icons/menumiddle/balance.svg?react";
import HeartIcon from "../../../../shared/assets/icons/menumiddle/heart.svg?react";
import BasketIcon from "../../../../shared/assets/icons/menumiddle/shopping-cart.svg?react";
import Colors from "../../../../constants/colors";

interface MenuMiddleProps {}

const MenuMiddle: React.FC<MenuMiddleProps> = () => {
  return (
    <ST.MenuMiddle>
      <div className={styles.container}>
        <ST.Box>
          <ST.Logo>
            <TextAtom type={TextEnum.enum_Text_H2}>Kugoo</TextAtom>
          </ST.Logo>
          <TextAtom type={TextEnum.enum_Text_H4}>Каталог</TextAtom>

          <ST.Search>
            <div>SELECT</div>
            <ImageAtom type={ImageEnum.enum_defaultSvg} icon={<SearchIcon />} />
          </ST.Search>
          <ST.ShopBox>
            <ImageAtom
              type={ImageEnum.enum_defaultSvg}
              icon={<BalanceIcon />}
              fill={Colors.BLACK}
            />
            <ImageAtom
              type={ImageEnum.enum_defaultSvg}
              icon={<HeartIcon />}
              fill={Colors.BLACK}
            />
            <ImageAtom
              type={ImageEnum.enum_defaultSvg}
              icon={<BasketIcon />}
              fill={Colors.BLACK}
            />
          </ST.ShopBox>
        </ST.Box>
      </div>
    </ST.MenuMiddle>
  );
};
export default MenuMiddle;
