"use client";

import React, { useEffect } from "react";

import * as ST from "./styled/styled";
import styles from "../styles/page.module.css";
import TextAtom from "../user.InterfaceLayer/UI_KIT/Atoms/Text.atom";
import TextEnum from "../user.InterfaceLayer/UI_KIT/Atoms/Text.atom/enum";
import { useCartStore } from "../business.InterfaceLayer/store/cartStore";

export default function Basket() {
  const items = useCartStore((state) => state.items);

  useEffect(() => {
    // Ensure that the store is properly initialized on the client side
    useCartStore.getState();
  }, []);

  return (
    <main>
      <ST.Basket>
        <ST.Container className={styles.container}>
          <TextAtom
            margin="49px 0 40px 0"
            type={TextEnum.enum_Text_H1}
            textTransform="uppercase"
          >
            Моя корзина
          </TextAtom>
          <>
            {items.map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </>
        </ST.Container>
      </ST.Basket>
    </main>
  );
}
