import React from "react";
import * as ST from "./styled/styled";
import styles from "../../../styles/page.module.css";
import TextAtom from "../../UI_KIT/Atoms/Text.atom";
import TextEnum from "../../UI_KIT/Atoms/Text.atom/enum";
import Filter from "./components/Filter/Filter";
import CardItem from "./components/CardItem/CardItem";

interface CardsBlockProps {}

const CardsBlock: React.FC<CardsBlockProps> = () => {
  return (
    <ST.Container className={styles.container}>
      <ST.Header>
        <TextAtom type={TextEnum.enum_Text_H1} textTransform="uppercase">
          Электросамокаты
        </TextAtom>
        <Filter />
      </ST.Header>
      <ST.CardsBlock>
        <CardItem />
      </ST.CardsBlock>
    </ST.Container>
  );
};
export default CardsBlock;
