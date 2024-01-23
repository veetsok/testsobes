import React from "react";
import * as ST from "./styled/styled";
import TextAtom from "@/app/user.InterfaceLayer/UI_KIT/Atoms/Text.atom";
import TextEnum from "@/app/user.InterfaceLayer/UI_KIT/Atoms/Text.atom/enum";
import ImageAtom from "@/app/user.InterfaceLayer/UI_KIT/Atoms/Image.atom";
import ImageEnum from "@/app/user.InterfaceLayer/UI_KIT/Atoms/Image.atom/enum";
import Colors from "@/app/user.InterfaceLayer/constants/colors";
import AccumulatorIcon from "../../../../shared/assets/icons/accumulator.svg?react";
import PowerIcon from "../../../../shared/assets/icons/power.svg?react";
import SpeedometerIcon from "../../../../shared/assets/icons/speedometer.svg?react";
import TimerIcon from "../../../../shared/assets/icons/timer.svg?react";
import CartIcon from "../../../../shared/assets/icons/shopping-cart.svg?react";
import HeartIcon from "../../../../shared/assets/icons/heart.svg?react";

interface CardItemProps {}

const CardItem: React.FC<CardItemProps> = () => {
  return (
    <ST.CardItem>
      <ST.CardItemImg>IMG</ST.CardItemImg>
      <ST.CardItemBox>
        <TextAtom type={TextEnum.enum_Text_H5}>TITLE</TextAtom>
        <ST.CardItemGrid>
          <ST.GridTextBox>
            <ImageAtom type={ImageEnum.enum_defaultSvg} icon={<AccumulatorIcon />} />
            <TextAtom
              type={TextEnum.enum_Text_H6}
              fontSize="14px"
              fontWeight="400"
              color={Colors.GRAY}
            >
              mAh
            </TextAtom>
          </ST.GridTextBox>
          <ST.GridTextBox>
            <ImageAtom type={ImageEnum.enum_defaultSvg} icon={<PowerIcon />} />
            <TextAtom
              type={TextEnum.enum_Text_H6}
              fontSize="14px"
              fontWeight="400"
              color={Colors.GRAY}
            >
              л.с.
            </TextAtom>
          </ST.GridTextBox>
          <ST.GridTextBox>
            <ImageAtom type={ImageEnum.enum_defaultSvg} icon={<SpeedometerIcon />} />
            <TextAtom
              type={TextEnum.enum_Text_H6}
              fontSize="14px"
              fontWeight="400"
              color={Colors.GRAY}
            >
              км/ч
            </TextAtom>
          </ST.GridTextBox>
          <ST.GridTextBox>
            <ImageAtom type={ImageEnum.enum_defaultSvg} icon={<TimerIcon />} />
            <TextAtom
              type={TextEnum.enum_Text_H6}
              fontSize="14px"
              fontWeight="400"
              color={Colors.GRAY}
            >
              часов
            </TextAtom>
          </ST.GridTextBox>
        </ST.CardItemGrid>
        <ST.PriceBlock>
          <ST.PriceBox>
            <ST.Price>
              <TextAtom
                type={TextEnum.enum_Text_H6}
                fontSize="12px"
                fontWeight="500"
                color={Colors.GRAY}
                text-decoration-line={true}
              >
                123
              </TextAtom>
              <TextAtom type={TextEnum.enum_Text_H3} color={Colors.BLACK}>
                123 ₽
              </TextAtom>
            </ST.Price>
            <ST.Icons>
              <ImageAtom
                type={ImageEnum.enum_defaultSvg}
                icon={<CartIcon />}
                fill={Colors.PURPLE}
                border={`1.3px solid ${Colors.PURPLE}`}
                $borderRadius="50%"
                padding="8px"
                cursor="pointer"
              />
              <ImageAtom
                type={ImageEnum.enum_defaultSvg}
                icon={<HeartIcon />}
                fill={Colors.PURPLE}
                border={`1.3px solid ${Colors.PURPLE}`}
                $borderRadius="50%"
                padding="8px"
                cursor="pointer"
              />
            </ST.Icons>
          </ST.PriceBox>
        </ST.PriceBlock>
      </ST.CardItemBox>
    </ST.CardItem>
  );
};
export default CardItem;
