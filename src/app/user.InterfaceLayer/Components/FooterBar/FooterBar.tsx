import React from "react";
import * as ST from "./styled/styled";
import FooterTop from "./components/FooterTop/FooterTop";
import FooterMiddle from "./components/FooterMiddle/FooterMiddle";
import FooterBottom from "./components/FooterBottom/FooterBottom";

interface FooterBarProps {}

const FooterBar: React.FC<FooterBarProps> = () => {
  return (
    <ST.FooterBar>
      <FooterTop />
      <FooterMiddle />
      <FooterBottom />
    </ST.FooterBar>
  );
};
export default FooterBar;
