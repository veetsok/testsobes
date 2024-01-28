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
  const deleteToCart = useCartStore((state) => state.removeFromCart);

  useEffect(() => {
    useCartStore.getState();
  }, []);

  const addToCart = useCartStore((state) => state.addToCart);
  const removeItem = useCartStore((state) => state.removeItem);
  const clearCart = useCartStore((state) => state.clearCart);

  console.log(items);

  const totalItems = items.reduce((total, item) => total + item.quantity, 0);
  const totalSumProduct = items.reduce((total, item) => total + item.sumProduct, 0);

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
              Количество товара {totalItems}
            </TextAtom>
            <ST.Basket>
              <ST.Box>
                <CardHeader clearCart={clearCart} />
                <ST.CardsBox>
                  {items.map((item) => (
                    <CardsBox
                      key={item.id}
                      item={item}
                      onDelete={() => deleteToCart(item.id)}
                      addToCart={addToCart}
                      removeItem={removeItem}
                    />
                  ))}
                </ST.CardsBox>
              </ST.Box>
              <PayBlock totalSumProduct={totalSumProduct} />
            </ST.Basket>
          </>
        ) : (
          <EmptyBlock />
        )}
      </ST.Container>
    </main>
  );
}
