import React from "react";
import * as ST from "./styled/styled";
import TextAtom from "@/app/user.InterfaceLayer/UI_KIT/Atoms/Text.atom";
import TextEnum from "@/app/user.InterfaceLayer/UI_KIT/Atoms/Text.atom/enum";
import Colors from "@/app/user.InterfaceLayer/constants/colors";
import ButtonAtom from "@/app/user.InterfaceLayer/UI_KIT/Atoms/Button.atom";
import ButtonEnum from "@/app/user.InterfaceLayer/UI_KIT/Atoms/Button.atom/enum";
import { Checkbox, Col } from "antd";
interface PayBlockProps {}

const PayBlock: React.FC<PayBlockProps> = () => {
  return (
    <ST.Container>
      <ST.Basket>
        <TextAtom
          color={Colors.BLACK}
          type={TextEnum.enum_Text_H6}
          fontSize="12px"
          fontWeight="400"
        >
          Итого
        </TextAtom>
        <TextAtom margin="0 0 11px 0" color={Colors.BLACK} type={TextEnum.enum_Text_H2}>
          $Summa ₽
        </TextAtom>

        <ST.Cost>
          <ST.Title>
            <ST.CostBlock>
              <TextAtom
                fontSize="12px"
                fontWeight="400"
                color={Colors.BLACK}
                type={TextEnum.enum_Text_H6}
              >
                Стоимость товаров
              </TextAtom>
              <TextAtom color={Colors.BLACK} type={TextEnum.enum_Text_H5}>
                $Общая стоимость ₽
              </TextAtom>
            </ST.CostBlock>
          </ST.Title>
          <ST.CostBlock>
            <TextAtom
              fontSize="12px"
              fontWeight="400"
              color={Colors.BLACK}
              type={TextEnum.enum_Text_H6}
            >
              Сумма скидки
            </TextAtom>
            <TextAtom color={Colors.BLACK} type={TextEnum.enum_Text_H5}>
              $Сумма скидки ₽
            </TextAtom>
          </ST.CostBlock>
          <ST.CostBlock>
            <TextAtom
              fontSize="12px"
              fontWeight="400"
              color={Colors.BLACK}
              type={TextEnum.enum_Text_H6}
            >
              Итого без учета доставки
            </TextAtom>
            <TextAtom color={Colors.BLACK} type={TextEnum.enum_Text_H5}>
              $доставка ₽
            </TextAtom>
          </ST.CostBlock>
          <ST.SubTitle></ST.SubTitle>
          <ButtonAtom type={ButtonEnum.enum_defaultButton}>
            <TextAtom type={TextEnum.enum_Text_H5}>Оформить заказ</TextAtom>
          </ButtonAtom>
          <ST.Conditions>
            <Checkbox />
            <div>
              <TextAtom
                type={TextEnum.enum_Text_H6}
                color={Colors.BLACK}
                fontSize="12px"
                fontWeight="400"
              >
                Нажимая на кнопку, вы соглашаетесь на обработку персональных данных и
              </TextAtom>
              <TextAtom
                type={TextEnum.enum_Text_A1}
                color={Colors.PURPLE}
                fontSize="12px"
                fontWeight="400"
              >
                политикой конфиденциальности
              </TextAtom>
            </div>
          </ST.Conditions>
        </ST.Cost>
      </ST.Basket>
    </ST.Container>
  );
};
export default PayBlock;
