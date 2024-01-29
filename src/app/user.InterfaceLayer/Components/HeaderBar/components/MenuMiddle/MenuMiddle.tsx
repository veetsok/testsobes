"use client";

import React from "react";
import * as ST from "./styled/styled";
import styles from "../../../../../styles/page.module.css";
import TextAtom from "../../../../UI_KIT/Atoms/Text.atom";
import TextEnum from "../../../../UI_KIT/Atoms/Text.atom/enum";
import ImageAtom from "../../../../UI_KIT/Atoms/Image.atom";
import ImageEnum from "../../../../UI_KIT/Atoms/Image.atom/enum";
import BurgerIcon from "../../../../shared/assets/icons/menumiddle/burger.svg?react";
import SearchIcon from "../../../../shared/assets/icons/menumiddle/search.svg?react";
import BalanceIcon from "../../../../shared/assets/icons/balance.svg?react";
import HeartIcon from "../../../../shared/assets/icons/heart.svg?react";
import BasketIcon from "../../../../shared/assets/icons/shopping-cart.svg?react";
import Colors from "../../../../constants/colors";
import ButtonAtom from "@/app/user.InterfaceLayer/UI_KIT/Atoms/Button.atom";
import ButtonEnum from "@/app/user.InterfaceLayer/UI_KIT/Atoms/Button.atom/enum";
import Link from "next/link";
import Logo from "@/app/user.InterfaceLayer/UI_KIT/Molecules/Logo/Logo";
import type { SelectProps } from "antd";
import { Select, Space } from "antd";

interface MenuMiddleProps {}

const MenuMiddle: React.FC<MenuMiddleProps> = () => {
  const handleChange = (value: string[]) => {
    console.log(`Искать самокат KUGO ${value}`);
  };

  const options: SelectProps["options"] = [
    {
      label: "RU",
      value: "russian",
      emoji: "ru",
      desc: "Russian",
    },
    {
      label: "EN",
      value: "English",
      emoji: "ru",
      desc: "English",
    },
    {
      label: "Везде",
      value: "Везде",
      emoji: "ru",
      desc: "Везде",
    },
  ];

  return (
    <ST.MenuMiddle>
      <div className={styles.container}>
        <ST.Box>
          <Logo />

          <ButtonAtom
            padding="8px 18px 9px 15px"
            $borderRadius="5px"
            margin="0 0 0 35px"
            height="40px"
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
              fontWeight="500"
              type={TextEnum.enum_Text_H5}
              color={Colors.WHITE}
            >
              Каталог
            </TextAtom>
          </ButtonAtom>

          <ST.Search>
            <Select
              className="selectCustom"
              mode="multiple"
              style={{ width: "100%" }}
              placeholder="Искать самокат KUGO"
              defaultValue={["china"]}
              onChange={handleChange}
              optionLabelProp="label"
              options={options}
              optionRender={(option) => (
                <Space>
                  <span role="img" aria-label={option.data.label}></span>
                  {option.data.desc}
                </Space>
              )}
            />

            {/* <ST.MenuSearch type="search" placeholder="Искать самокат KUGO" />
             */}
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
            <Link href="/basket">
              <ButtonAtom
                type={ButtonEnum.enum_defaultButton}
                background={Colors.TRANSPARENT}
              >
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
            </Link>
          </ST.ShopBox>
        </ST.Box>
      </div>
    </ST.MenuMiddle>
  );
};
export default MenuMiddle;
