"use client";

import React from "react";
import styles from "../../styles/page.module.css";
import { useQuery } from "react-query";
import { getProducts } from "@/app/business.InterfaceLayer/hooks/useQueryStore";
import { useParams } from "next/navigation";
import { Products } from "@/app/business.InterfaceLayer/types";

interface ProductPageProps {}

const ProductPage: React.FC<ProductPageProps> = () => {
  const { id } = useParams<{ id: string }>();
  const { data: products, isLoading } = useQuery("products", getProducts);
  const product = products?.find((product: Products) => product.id === parseInt(id));

  return (
    <div className={styles.container}>
      <h1>Product Details Page</h1>
      {isLoading ? (
        <div>Loading...</div>
      ) : product ? (
        <>
          <h2>{product.title}</h2>
          <h2>{product.priceSale}</h2>
        </>
      ) : (
        <div>Product not found</div>
      )}
    </div>
  );
};

export default ProductPage;
