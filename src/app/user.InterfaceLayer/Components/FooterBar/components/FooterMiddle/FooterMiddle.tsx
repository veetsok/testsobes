import React from "react";
import * as ST from "./styled/styled";
import styles from "../../../../../styles/page.module.css";
import TextAtom from "@/app/user.InterfaceLayer/UI_KIT/Atoms/Text.atom";
import TextEnum from "@/app/user.InterfaceLayer/UI_KIT/Atoms/Text.atom/enum";

interface FooterMiddleProps {}

const FooterMiddle: React.FC<FooterMiddleProps> = () => {
  return (
    <ST.FooterMiddle>
      <ST.Container className={styles.container}>
        <ST.Grid>
          <ST.GridItem>
            <TextAtom type={TextEnum.enum_Text_H4} fontWeight="500">
              Каталог товаров
            </TextAtom>
            <TextAtom type={TextEnum.enum_Text_H6} fontWeight="400">
              Электросамокаты
            </TextAtom>
            <TextAtom type={TextEnum.enum_Text_H6} fontWeight="400">
              Электроскутеры
            </TextAtom>
            <TextAtom type={TextEnum.enum_Text_H6} fontWeight="400">
              Электровелосипеды
            </TextAtom>
          </ST.GridItem>
          <ST.GridItem>
            <TextAtom type={TextEnum.enum_Text_H4} fontWeight="500">
              Покупателям
            </TextAtom>
            <ST.GridItemBlock1>
              <TextAtom type={TextEnum.enum_Text_H6} fontWeight="400">
                Сервисный центр
              </TextAtom>
              <TextAtom type={TextEnum.enum_Text_H6} fontWeight="400">
                Доставка и оплата
              </TextAtom>
              <TextAtom type={TextEnum.enum_Text_H6} fontWeight="400">
                Рассрочка
              </TextAtom>
              <TextAtom type={TextEnum.enum_Text_H6} fontWeight="400">
                Тест-драйв
              </TextAtom>
              <TextAtom type={TextEnum.enum_Text_H6} fontWeight="400">
                Блог
              </TextAtom>
              <TextAtom type={TextEnum.enum_Text_H6} fontWeight="400">
                Сотрудничество
              </TextAtom>
              <TextAtom type={TextEnum.enum_Text_H6} fontWeight="400">
                Контакты
              </TextAtom>
              <TextAtom type={TextEnum.enum_Text_H6} fontWeight="400">
                Акции
              </TextAtom>
            </ST.GridItemBlock1>
          </ST.GridItem>
          <ST.GridItem>
            <TextAtom type={TextEnum.enum_Text_H4} fontWeight="500">
              Контакты
            </TextAtom>
            <ST.GridItemBlock2>
              <TextAtom type={TextEnum.enum_Text_H6} fontWeight="400" fontSize="12px">
                Call-центр
              </TextAtom>
              <TextAtom type={TextEnum.enum_Text_H6} fontWeight="400" fontSize="12px">
                Сервисный центр
              </TextAtom>
              <TextAtom type={TextEnum.enum_Text_H5} fontWeight="500">
                +7 (800) 505-54-61
              </TextAtom>
              <TextAtom type={TextEnum.enum_Text_H5} fontWeight="500">
                +7 (499) 350-76-92
              </TextAtom>
              <TextAtom type={TextEnum.enum_Text_H6} fontWeight="400" fontSize="12px">
                Пн-Вс 10:00 - 20:00
              </TextAtom>
              <TextAtom type={TextEnum.enum_Text_H6} fontWeight="400" fontSize="12px">
                Пн-Вс 10:00 - 20:00
              </TextAtom>
            </ST.GridItemBlock2>
          </ST.GridItem>
        </ST.Grid>
      </ST.Container>
    </ST.FooterMiddle>
  );
};
export default FooterMiddle;
