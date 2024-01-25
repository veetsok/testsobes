import React from "react";
import * as ST from "./styled/styled";
import { Products } from "@/app/business.InterfaceLayer/types";
import ImageAtom from "@/app/user.InterfaceLayer/UI_KIT/Atoms/Image.atom";
import ImageEnum from "@/app/user.InterfaceLayer/UI_KIT/Atoms/Image.atom/enum";
import TextAtom from "@/app/user.InterfaceLayer/UI_KIT/Atoms/Text.atom";
import TextEnum from "@/app/user.InterfaceLayer/UI_KIT/Atoms/Text.atom/enum";
import Colors from "@/app/user.InterfaceLayer/constants/colors";
import StockIcon from "../../../user.InterfaceLayer/shared/assets/icons/stock.svg?react";
import MinusIcon from "../../../user.InterfaceLayer/shared/assets/icons/minus.svg?react";
import PlusIcon from "../../../user.InterfaceLayer/shared/assets/icons/plus.svg?react";
import DeleteIcon from "../../../user.InterfaceLayer/shared/assets/icons/delete.svg?react";

interface CardsBoxProps {
  item?: Products[];
  onDelete?: () => void;
}

const CardsBox: React.FC<CardsBoxProps> = ({ item, onDelete }) => {
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
          src={img[0]}
          alt={title}
        />
        <ST.Description>
          <TextAtom type={TextEnum.enum_Text_H4}>{title}</TextAtom>
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
      <ST.CardBlock2>
        <ST.Quantity>
          <ImageAtom
            $borderRadius="5px 0 0 5px"
            background={Colors.BG_BUTTON}
            padding="18px 17px"
            type={ImageEnum.enum_defaultSvg}
            fill={Colors.GRAY}
            icon={<MinusIcon />}
            cursor="pointer"
          />
          <TextAtom
            padding="8px 0"
            background={Colors.BG_BUTTON}
            color={Colors.BLACK}
            fontWeight="400"
            type={TextEnum.enum_Text_H5}
          >
            1
          </TextAtom>
          <ImageAtom
            $borderRadius="0 5px 5px 0"
            background={Colors.BG_BUTTON}
            padding="14px 17px"
            type={ImageEnum.enum_defaultSvg}
            fill={Colors.GRAY}
            icon={<PlusIcon />}
            cursor="pointer"
          />
        </ST.Quantity>
        <ST.PriceBlock>
          <TextAtom color={Colors.BLACK} type={TextEnum.enum_Text_H3}>
            $ 123 ₽
          </TextAtom>
          <ImageAtom
            margin="0 43px 0 0"
            type={ImageEnum.enum_defaultSvg}
            icon={<DeleteIcon />}
            onClick={onDelete}
            cursor="pointer"
          />
        </ST.PriceBlock>
      </ST.CardBlock2>
    </ST.Container>
  );
};
export default CardsBox;
