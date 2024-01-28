import React from "react";
import * as ST from "./styled/styled";
import TextAtom from "@/app/user.InterfaceLayer/UI_KIT/Atoms/Text.atom";
import TextEnum from "@/app/user.InterfaceLayer/UI_KIT/Atoms/Text.atom/enum";
import Colors from "@/app/user.InterfaceLayer/constants/colors";
import ImageAtom from "@/app/user.InterfaceLayer/UI_KIT/Atoms/Image.atom";
import ImageEnum from "@/app/user.InterfaceLayer/UI_KIT/Atoms/Image.atom/enum";
import StockIcon from "../../../../user.InterfaceLayer/shared/assets/icons/stock.svg?react";
import ShareIcon from "../../../../user.InterfaceLayer/shared/assets/icons/share.svg?react";
import BalanceIcon from "../../../../user.InterfaceLayer/shared/assets/icons/balance.svg?react";
import ButtonAtom from "@/app/user.InterfaceLayer/UI_KIT/Atoms/Button.atom";
import ButtonEnum from "@/app/user.InterfaceLayer/UI_KIT/Atoms/Button.atom/enum";
import { ContentProps } from "./type";
import Equipment from "./components/Equipment/Equipment";
import ImageContentBox from "./components/ImageContentBox/ImageContentBox";

const Content: React.FC<ContentProps> = ({ product }) => {
  return (
    <ST.Content>
      <ST.ImageBlock>
        <ImageContentBox product={product} />
      </ST.ImageBlock>
      <ST.ContentText>
        <ST.MainBlock>
          <TextAtom
            type={TextEnum.enum_Text_H1}
            textTransform="uppercase"
            color={Colors.BLACK}
          >
            {product.title}
          </TextAtom>
          <ST.Statistic>
            <TextAtom
              type={TextEnum.enum_Text_H6}
              color={Colors.GRAY}
              margin="0 20px 0 0"
              fontSize="12px"
              fontWeight="400"
            >
              Просмотров 350
            </TextAtom>
            <TextAtom
              type={TextEnum.enum_Text_H6}
              color={Colors.GRAY}
              margin="0 20px 0 0"
              fontSize="12px"
              fontWeight="400"
            >
              Купили 196 раз
            </TextAtom>
            <TextAtom
              type={TextEnum.enum_Text_H6}
              color={Colors.GRAY}
              margin="0 20px 0 0"
              fontSize="12px"
              fontWeight="400"
            >
              Артикул: 2200000000026
            </TextAtom>
          </ST.Statistic>
          <ST.Instock>
            <ST.Box>
              <ImageAtom
                type={ImageEnum.enum_defaultSvg}
                icon={<StockIcon />}
                fill={Colors.BLACK}
                margin="0 11px 0 0"
              />
              <TextAtom
                type={TextEnum.enum_Text_H6}
                fontSize="14px"
                fontWeight="400"
                color={Colors.BLACK}
              >
                В наличии
              </TextAtom>
            </ST.Box>
            <ST.Box>
              <ImageAtom
                type={ImageEnum.enum_defaultSvg}
                icon={<BalanceIcon />}
                fill={Colors.BLACK}
                margin="0 11px 0 0"
              />
              <TextAtom
                type={TextEnum.enum_Text_H6}
                fontSize="14px"
                fontWeight="400"
                color={Colors.BLACK}
              >
                Сравнить
              </TextAtom>
            </ST.Box>
            <ST.Box>
              <ImageAtom
                type={ImageEnum.enum_defaultSvg}
                icon={<ShareIcon />}
                fill={Colors.BLACK}
                margin="0 11px 0 0"
              />
              <TextAtom
                type={TextEnum.enum_Text_H6}
                fontSize="14px"
                fontWeight="400"
                color={Colors.BLACK}
              >
                Поделиться
              </TextAtom>
            </ST.Box>
          </ST.Instock>
        </ST.MainBlock>
        <ST.PriceBox>
          <div>
            <TextAtom
              type={TextEnum.enum_Text_H6}
              $textDecoration="line-through"
              color={Colors.GRAY}
            >
              {product.priceSale} ₽
            </TextAtom>
            <TextAtom type={TextEnum.enum_Text_H2}>{product.actualPrice} ₽</TextAtom>
          </div>
          <ButtonAtom type={ButtonEnum.enum_defaultButton}>
            <ImageAtom type={ImageEnum.enum_srcImage} src="../img/card.png" />
            <ST.PriceWrapper>
              <TextAtom
                type={TextEnum.enum_Text_H6}
                color={Colors.GRAY}
                fontSize="12px"
                fontWeight="400"
              >
                Рассрочка:
              </TextAtom>
              <TextAtom
                type={TextEnum.enum_Text_H6}
                color={Colors.GRAY}
                fontSize="12px"
                fontWeight="400"
              >
                {Math.ceil(product.actualPrice / 12).toLocaleString()} ₽ в месяц / 24
                месяца
              </TextAtom>
            </ST.PriceWrapper>
          </ButtonAtom>
        </ST.PriceBox>
        <Equipment />
      </ST.ContentText>
    </ST.Content>
  );
};
export default Content;
