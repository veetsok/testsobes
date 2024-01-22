import React from "react";
import * as ST from "./styled/styled";
import styles from "../../../../../styles/page.module.css";

interface MenuBottomProps {}

const MenuBottom: React.FC<MenuBottomProps> = () => {
  return (
    <ST.MenuBottom>
      <div className={styles.container}> Have a good coding</div>
    </ST.MenuBottom>
  );
};
export default MenuBottom;
