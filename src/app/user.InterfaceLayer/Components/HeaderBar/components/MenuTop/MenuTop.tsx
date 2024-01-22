import React from "react";
import * as ST from "./styled/styled";
import styles from "../../../../../styles/page.module.css";

interface MenuTopProps {}

const MenuTop: React.FC<MenuTopProps> = () => {
  return (
    <ST.MenuTop>
      <nav className={styles.container}>Have a good coding</nav>
    </ST.MenuTop>
  );
};
export default MenuTop;
