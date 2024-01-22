import React from "react";
import * as ST from "./styled/styled";
import MenuBottom from "./components/MenuBottom/MenuBottom";
import MenuTop from "./components/MenuTop/MenuTop";
import MenuMiddle from "./components/MenuMiddle/MenuMiddle";

interface HeaderBarProps {}

const HeaderBar: React.FC<HeaderBarProps> = () => {
  return (
    <ST.Header>
      <MenuTop />
      <MenuMiddle />
      <MenuBottom />
    </ST.Header>
  );
};
export default HeaderBar;
