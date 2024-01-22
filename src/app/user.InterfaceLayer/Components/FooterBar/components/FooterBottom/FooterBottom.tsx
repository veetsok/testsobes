import React from "react";
import * as ST from "./styled/styled";
import styles from "../../../../../styles/page.module.css";
import ImageAtom from "@/app/user.InterfaceLayer/UI_KIT/Atoms/Image.atom";
import ImageEnum from "@/app/user.InterfaceLayer/UI_KIT/Atoms/Image.atom/enum";
import GoogleIcon from "../../../../shared/assets/icons/google_play.svg?react";
import AppleIcon from "../../../../shared/assets/icons/app_store.svg?react";

interface FooterBottomProps {}

const FooterBottom: React.FC<FooterBottomProps> = () => {
  return (
    <div className={styles.container}>
      <ST.FooterBottom>
        <>lOGO</>
        <ST.Social>
          <ImageAtom type={ImageEnum.enum_defaultSvg} icon={<GoogleIcon />} />
        </ST.Social>
        <ST.Social>
          <ImageAtom type={ImageEnum.enum_defaultSvg} icon={<AppleIcon />} />
        </ST.Social>
      </ST.FooterBottom>
    </div>
  );
};
export default FooterBottom;
