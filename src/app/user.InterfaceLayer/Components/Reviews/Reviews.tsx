"use client";

import React from "react";
import styles from "../../../styles/page.module.css";
import * as ST from "./styled/styled";
import TextAtom from "../../UI_KIT/Atoms/Text.atom";
import TextEnum from "../../UI_KIT/Atoms/Text.atom/enum";
import ArrowIcon from "../../shared/assets/icons/arrow.svg?react";
import Colors from "../../constants/colors";
import ImageAtom from "../../UI_KIT/Atoms/Image.atom";
import ImageEnum from "../../UI_KIT/Atoms/Image.atom/enum";

type ReviewsProps = {};

const Reviews: React.FC<ReviewsProps> = () => {
  return (
    <ST.Reviews>
      <ST.Container className={styles.container}>
        <TextAtom type={TextEnum.enum_Text_H1} textTransform="uppercase">
          Отзывы и фото реальных покупателей
        </TextAtom>
        <ST.HeadDesc>
          <TextAtom
            type={TextEnum.enum_Text_H6}
            color={Colors.PURPLE}
            fontSize="14px"
            fontWeight="400"
          >
            Читать отзывы на Яндекс
          </TextAtom>
          <ImageAtom
            margin="0 0 0 11px"
            type={ImageEnum.enum_defaultSvg}
            fill={Colors.PURPLE}
            icon={<ArrowIcon />}
          />
        </ST.HeadDesc>
      </ST.Container>
      <ST.Gallery>
        <ImageAtom
          height="284px"
          width="214px"
          type={ImageEnum.enum_srcImage}
          src="../img/rewiew1.jpg"
        />
        <ImageAtom
          height="284px"
          width="213px"
          type={ImageEnum.enum_srcImage}
          src="../img/rewiew2.jpg"
        />
        <ImageAtom
          height="284px"
          width="378px"
          type={ImageEnum.enum_srcImage}
          src="../img/rewiew3.jpg"
        />
        <ImageAtom
          height="284px"
          width="378px"
          type={ImageEnum.enum_srcImage}
          src="../img/rewiew4.jpg"
        />
        <ImageAtom
          height="284px"
          width="213px"
          type={ImageEnum.enum_srcImage}
          src="../img/rewiew5.jpg"
        />
      </ST.Gallery>
      <ST.Gallery>
        <ImageAtom
          height="284px"
          width="213px"
          type={ImageEnum.enum_srcImage}
          src="../img/rewiew2.jpg"
        />
        <ImageAtom
          height="284px"
          width="214px"
          type={ImageEnum.enum_srcImage}
          src="../img/rewiew1.jpg"
        />
        <ImageAtom
          height="284px"
          width="213px"
          type={ImageEnum.enum_srcImage}
          src="../img/rewiew5.jpg"
        />
         <ImageAtom
          height="284px"
          width="378px"
          type={ImageEnum.enum_srcImage}
          src="../img/rewiew3.jpg"
        />
        <ImageAtom
          height="284px"
          width="378px"
          type={ImageEnum.enum_srcImage}
          src="../img/rewiew4.jpg"
        />
      </ST.Gallery>
    </ST.Reviews>
  );
};
export default Reviews;
