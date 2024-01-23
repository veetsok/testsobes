import React from "react";
import * as ST from "./styled/styled";
import styles from "../../../styles/page.module.css";
import TextAtom from "../../UI_KIT/Atoms/Text.atom";
import TextEnum from "../../UI_KIT/Atoms/Text.atom/enum";
import Filter from "./components/Filter/Filter";
import CardItem from "./components/CardItem/CardItem";
import { useQueryStore } from "@/app/business.InterfaceLayer/hooks/useQueryStore";
import useLocalStore from "@/app/business.InterfaceLayer/useLocalStore";

interface CardsBlockProps {}

const CardsBlock: React.FC<CardsBlockProps> = () => {
  // const { products, isLoading } = useQueryStore();
  // const { selectProduct } = useLocalStore();

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <ST.Container className={styles.container}>
      <ST.Header>
        <TextAtom type={TextEnum.enum_Text_H1} textTransform="uppercase">
          Электросамокаты
        </TextAtom>
        <Filter />
      </ST.Header>
      <ST.CardsBlock>
        {/* {products.map((product) => (
          <CardItem
            key={product.id}
            product={product}
            onSelect={() => selectProduct(product)}
          />
        ))} */}
      </ST.CardsBlock>
    </ST.Container>
  );
};
export default CardsBlock;
