import React from "react";
import * as ST from "./styled/styled";
import styles from "../../../../../styles/page.module.css";
import TextAtom from "@/app/user.InterfaceLayer/UI_KIT/Atoms/Text.atom";
import TextEnum from "@/app/user.InterfaceLayer/UI_KIT/Atoms/Text.atom/enum";

interface FooterMiddleProps {}

const FooterMiddle: React.FC<FooterMiddleProps> = () => {
  return (
    <ST.FooterMiddle>
      <div className={styles.container}>
        <ST.Grid>
          <ST.GridItem>
            <TextAtom margin="5px 0" type={TextEnum.enum_Text_H4} fontWeight="500">
              Каталог товаров
            </TextAtom>
            <TextAtom margin="5px 0" type={TextEnum.enum_Text_H6} fontWeight="400">
              Электросамокаты
            </TextAtom>
            <TextAtom margin="5px 0" type={TextEnum.enum_Text_H6} fontWeight="400">
              Электроскутеры
            </TextAtom>
            <TextAtom margin="5px 0" type={TextEnum.enum_Text_H6} fontWeight="400">
              Электровелосипеды
            </TextAtom>
          </ST.GridItem>
          <ST.GridItem>
            <TextAtom margin="5px 0" type={TextEnum.enum_Text_H4} fontWeight="500">
              Покупателям
            </TextAtom>
            <TextAtom margin="5px 0" type={TextEnum.enum_Text_H6} fontWeight="400">
              Сервисный центр
            </TextAtom>
            <TextAtom margin="5px 0" type={TextEnum.enum_Text_H6} fontWeight="400">
              Доставка и оплата
            </TextAtom>
            <TextAtom margin="5px 0" type={TextEnum.enum_Text_H6} fontWeight="400">
              Рассрочка
            </TextAtom>
            <TextAtom margin="5px 0" type={TextEnum.enum_Text_H6} fontWeight="400">
              Тест-драйв
            </TextAtom>
            <TextAtom margin="5px 0" type={TextEnum.enum_Text_H6} fontWeight="400">
              Блог
            </TextAtom>
            <TextAtom margin="5px 0" type={TextEnum.enum_Text_H6} fontWeight="400">
              Сотрудничество
            </TextAtom>
            <TextAtom margin="5px 0" type={TextEnum.enum_Text_H6} fontWeight="400">
              Контакты
            </TextAtom>
            <TextAtom margin="5px 0" type={TextEnum.enum_Text_H6} fontWeight="400">
              Акции
            </TextAtom>
          </ST.GridItem>
          <ST.GridItem>
            <TextAtom margin="5px 0" type={TextEnum.enum_Text_H4} fontWeight="500">
              Контакты
            </TextAtom>
            <TextAtom
              margin="5px 0"
              type={TextEnum.enum_Text_H6}
              fontWeight="400"
              fontSize="12px"
            >
              Call-центр
            </TextAtom>
            <TextAtom margin="5px 0" type={TextEnum.enum_Text_H5} fontWeight="500">
              +7 (800) 505-54-61
            </TextAtom>
            <TextAtom
              margin="5px 0"
              type={TextEnum.enum_Text_H6}
              fontWeight="400"
              fontSize="12px"
            >
              Пн-Вс 10:00 - 20:00
            </TextAtom>
            <TextAtom
              margin="5px 0"
              type={TextEnum.enum_Text_H6}
              fontWeight="400"
              fontSize="12px"
            >
              Сервисный центр
            </TextAtom>
            <TextAtom margin="5px 0" type={TextEnum.enum_Text_H5} fontWeight="500">
              +7 (499) 350-76-92
            </TextAtom>
            <TextAtom
              margin="5px 0"
              type={TextEnum.enum_Text_H6}
              fontWeight="400"
              fontSize="12px"
            >
              Пн-Вс 10:00 - 20:00
            </TextAtom>
          </ST.GridItem>
        </ST.Grid>
      </div>
    </ST.FooterMiddle>
  );
};
export default FooterMiddle;
