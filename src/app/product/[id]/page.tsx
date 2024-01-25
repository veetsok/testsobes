"use client";

import React from "react";
import styles from "../../styles/page.module.css";

interface ProductPageProps {}

const ProductPage: React.FC<ProductPageProps> = () => {
  return (
    <div className={styles.container}>
      <h1>Product Details Page</h1>
      <h2>$product.title</h2>
      <h2>$product.price</h2>
    </div>
  );
};

export default ProductPage;
