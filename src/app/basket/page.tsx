"use client";

import React, { useEffect } from "react";
import * as ST from "./styled/styled";
import styles from "../styles/page.module.css";
import TextAtom from "../user.InterfaceLayer/UI_KIT/Atoms/Text.atom";
import TextEnum from "../user.InterfaceLayer/UI_KIT/Atoms/Text.atom/enum";
import { useCartStore } from "../business.InterfaceLayer/store/cartStore";
import PayBlock from "./components/PayBlock/PayBlock";
import ButtonAtom from "../user.InterfaceLayer/UI_KIT/Atoms/Button.atom";
import ButtonEnum from "../user.InterfaceLayer/UI_KIT/Atoms/Button.atom/enum";

export default function Basket() {
  const items = useCartStore((state) => state.items);

  useEffect(() => {
    // Ensure that the store is properly initialized on the client side
    useCartStore.getState();
  }, []);

  return (
    <main>
      <ST.Container className={styles.container}>
        <TextAtom
          margin="49px 0 40px 0"
          type={TextEnum.enum_Text_H1}
          textTransform="uppercase"
        >
          Моя корзина
        </TextAtom>
        <TextAtom type={TextEnum.enum_Text_H6} fontSize="14px" fontWeight="400">
          $sum товаров
        </TextAtom>
        <ST.Basket>
          <ST.HeaderBox>
            <TextAtom type={TextEnum.enum_Text_H6}>Товар</TextAtom>
            <TextAtom type={TextEnum.enum_Text_H6}>Количество</TextAtom>
            <TextAtom type={TextEnum.enum_Text_H6}>Сумма</TextAtom>
            <ButtonAtom type={ButtonEnum.enum_defaultButton}>Удалить все</ButtonAtom>
          </ST.HeaderBox>
          <>
            {items.map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </>
          <PayBlock />
        </ST.Basket>
      </ST.Container>
    </main>
  );
}
