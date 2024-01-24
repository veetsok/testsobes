"use client";

import React from "react";
import * as ST from "./styled/styled";
import styles from "../../../styles/page.module.css";
import TextAtom from "../../UI_KIT/Atoms/Text.atom";
import TextEnum from "../../UI_KIT/Atoms/Text.atom/enum";
import Filter from "./components/Filter/Filter";
import CardItem from "./components/CardItem/CardItem";
import { useQuery } from "react-query";
import { Products, getProducts } from "@/app/business.InterfaceLayer/hooks/useQueryStore";

interface CardsBlockProps {}

const CardsBlock: React.FC<CardsBlockProps> = () => {
  const { data: products, isLoading } = useQuery("products", getProducts);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  console.log(products);

  return (
    <ST.Container className={styles.container}>
      <ST.Header>
        <TextAtom type={TextEnum.enum_Text_H1} textTransform="uppercase">
          Электросамокаты
        </TextAtom>
        <Filter />
      </ST.Header>
      <ST.CardsBlock>
        {products.map((product: Products) => (
          <CardItem key={product.id} product={product} />
        ))}
      </ST.CardsBlock>
    </ST.Container>
  );
};
export default CardsBlock;
