"use client";

import React from "react";
import styles from "../../styles/page.module.css";
import * as ST from "./styled/styled";
import { useQuery } from "react-query";
import { getProducts } from "@/app/business.InterfaceLayer/hooks/useQueryStore";
import { useParams } from "next/navigation";
import { Products } from "@/app/business.InterfaceLayer/types";
import TextAtom from "@/app/user.InterfaceLayer/UI_KIT/Atoms/Text.atom";
import TextEnum from "@/app/user.InterfaceLayer/UI_KIT/Atoms/Text.atom/enum";
import Content from "./components/Content/Content";

interface ProductPageProps {}

const ProductPage: React.FC<ProductPageProps> = () => {
  const { id } = useParams<{ id: string }>();
  const { data: products, isLoading } = useQuery("products", getProducts);
  const product = products?.find((product: Products) => product.id === parseInt(id));

  return (
    <ST.Container className={styles.container}>
      {isLoading ? (
        <div>Loading...</div>
      ) : product ? (
        <>
          <Content product={product} />
        </>
      ) : (
        <TextAtom type={TextEnum.enum_Text_H2}>Product not found</TextAtom>
      )}
    </ST.Container>
  );
};

export default ProductPage;
