import React from "react";
import * as ST from "./styled/styled";
import { Products } from "@/app/business.InterfaceLayer/types";
import ImageAtom from "@/app/user.InterfaceLayer/UI_KIT/Atoms/Image.atom";
import ImageEnum from "@/app/user.InterfaceLayer/UI_KIT/Atoms/Image.atom/enum";
import TextAtom from "@/app/user.InterfaceLayer/UI_KIT/Atoms/Text.atom";
import TextEnum from "@/app/user.InterfaceLayer/UI_KIT/Atoms/Text.atom/enum";
import Colors from "@/app/user.InterfaceLayer/constants/colors";
import StockIcon from "../../../user.InterfaceLayer/shared/assets/icons/stock.svg?react";

interface CardsBoxProps {
  item: Products[];
}

const CardsBox: React.FC<CardsBoxProps> = ({ item }) => {
  const { title, img } = item;

  return (
    <ST.Container>
      <ST.CardBlock>
        <ImageAtom
          $borderRadius="5.625px"
          background={Colors.BG_IMG}
          width="75px"
          height="75px"
          type={ImageEnum.enum_srcImage}
          src={img}
          alt={title}
        />
        <ST.Description>
          <TextAtom type={TextEnum.enum_Text_H5}>{title}</TextAtom>
          <ST.Bottom>
            <ST.Status>
              <ImageAtom type={ImageEnum.enum_defaultSvg} icon={<StockIcon />} />
              <TextAtom
                type={TextEnum.enum_Text_H6}
                color={Colors.GRAY}
                fontSize="12px"
                fontWeight="400"
              >
                В наличии
              </TextAtom>
            </ST.Status>
            <TextAtom
              type={TextEnum.enum_Text_H6}
              color={Colors.GRAY}
              fontSize="12px"
              fontWeight="400"
            >
              + 2 подарка
            </TextAtom>
          </ST.Bottom>
        </ST.Description>
      </ST.CardBlock>
    </ST.Container>
  );
};
export default CardsBox;
