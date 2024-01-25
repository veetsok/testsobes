"use client";

import React, { useState } from "react";
import * as ST from "./styled/styled";
import styles from "../../../styles/page.module.css";
import TextAtom from "../../UI_KIT/Atoms/Text.atom";
import TextEnum from "../../UI_KIT/Atoms/Text.atom/enum";
import Filter from "./components/Filter/Filter";
import CardItem from "./components/CardItem/CardItem";
import { useQuery } from "react-query";
import { getProducts } from "@/app/business.InterfaceLayer/hooks/useQueryStore";
import { Products } from "@/app/business.InterfaceLayer/types";
import { useCartStore } from "@/app/business.InterfaceLayer/store/cartStore";

interface CardsBlockProps {}

const CardsBlock: React.FC<CardsBlockProps> = () => {
  const { data: products, isLoading } = useQuery("products", getProducts);
  const addToCart = useCartStore((state) => state.addToCart);

  const [selectedFilter, setSelectedFilter] = useState("all"); // Initialize to "all"

  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Filter products based on the selected filter
  const filteredProducts =
    selectedFilter !== "all"
      ? products.filter((product: Products) => {
          switch (selectedFilter) {
            case "hits":
              return product.productShieldHit;
            case "city":
              return product.forTown;
            case "adults":
              return product.forAdults;
            case "children":
              return product.forChildren;
            default:
              return true;
          }
        })
      : products;

  return (
    <ST.Container className={styles.container}>
      <ST.Header>
        <TextAtom type={TextEnum.enum_Text_H1} textTransform="uppercase">
          Электросамокаты
        </TextAtom>
        <Filter onFilterChange={handleFilterChange} selectedFilter={selectedFilter} />
      </ST.Header>
      <ST.CardsBlock>
        {filteredProducts.map((product: Products) => (
          <CardItem
            key={product.id}
            product={product}
            addToCart={() => addToCart(product)}
          />
        ))}
      </ST.CardsBlock>
    </ST.Container>
  );
};
export default CardsBlock;
