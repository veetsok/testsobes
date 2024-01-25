"use client";

import React, { useEffect } from "react";
import * as ST from "./styled/styled";
import styles from "../styles/page.module.css";
import TextAtom from "../user.InterfaceLayer/UI_KIT/Atoms/Text.atom";
import TextEnum from "../user.InterfaceLayer/UI_KIT/Atoms/Text.atom/enum";
import { useCartStore } from "../business.InterfaceLayer/store/cartStore";
import PayBlock from "./components/PayBlock/PayBlock";
import CardsBox from "./components/CardsBox/CardsBox";
import EmptyBlock from "./components/EmptyBlock/EmptyBlock";
import CardHeader from "./components/CardHeader/CardHeader";

export default function Basket() {
  const items = useCartStore((state) => state.items);

  useEffect(() => {
    // Ensure that the store is properly initialized on the client side
    useCartStore.getState();
  }, []);

  console.log(items);

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
        {items.length > 0 ? (
          <>
            <TextAtom type={TextEnum.enum_Text_H6} fontSize="14px" fontWeight="400">
              $sum товаров
            </TextAtom>
            <ST.Basket>
              <ST.Box>
                <CardHeader />
                <ST.CardsBox>
                  {items.map((item) => (
                    <CardsBox key={item.id} item={item} />
                  ))}
                </ST.CardsBox>
              </ST.Box>
              <PayBlock />
            </ST.Basket>
          </>
        ) : (
          <EmptyBlock />
        )}
      </ST.Container>
    </main>
  );
}
