import React from "react";
import * as ST from "./styled/styled";
import styles from "../../../styles/page.module.css";
import ImageAtom from "../../UI_KIT/Atoms/Image.atom";
import ImageEnum from "../../UI_KIT/Atoms/Image.atom/enum";
import TextAtom from "../../UI_KIT/Atoms/Text.atom";
import TextEnum from "../../UI_KIT/Atoms/Text.atom/enum";
import Colors from "../../constants/colors";
import ButtonAtom from "../../UI_KIT/Atoms/Button.atom";
import ButtonEnum from "../../UI_KIT/Atoms/Button.atom/enum";

interface DeliveryBlockProps {}

const DeliveryBlock: React.FC<DeliveryBlockProps> = () => {
  return (
    <ST.DeliveryBlock>
      <ST.Container className={styles.container}>
        <ST.Box>
          <TextAtom
            type={TextEnum.enum_Text_H6}
            color={Colors.WHITE}
            fontSize="14px"
            fontWeight="400"
            padding="3px 13px 4px 11px"
            background={Colors.RED}
            width="max-content"
            $borderRadius="5px"
          >
            Акция
          </TextAtom>
          <TextAtom
            type={TextEnum.enum_Text_H1}
            color={Colors.WHITE}
            margin="31px 0 28px 0"
          >
            Бесплатная доставка электросамокатов по России до 01.09
          </TextAtom>
          <ButtonAtom
            background={Colors.WHITE}
            padding="15px 25px"
            border={Colors.TRANSPARENT}
            $borderRadius="5px"
            type={ButtonEnum.enum_defaultButton}
          >
            <TextAtom type={TextEnum.enum_Text_H6} fontSize="16px" fontWeight="400">
              Подробнее
            </TextAtom>
          </ButtonAtom>
        </ST.Box>
      </ST.Container>
      <ST.DeliveryBlockImage>
        <ImageAtom
          type={ImageEnum.enum_srcImage}
          src="img/delivery-free-img.png"
          alt="DeliveryBlock"
        />
      </ST.DeliveryBlockImage>
    </ST.DeliveryBlock>
  );
};
export default DeliveryBlock;
