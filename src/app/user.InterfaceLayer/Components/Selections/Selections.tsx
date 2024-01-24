import React from "react";
import * as ST from "./styled/styled";
import styles from "../../../styles/page.module.css";
import TextAtom from "../../UI_KIT/Atoms/Text.atom";
import TextEnum from "../../UI_KIT/Atoms/Text.atom/enum";
import Colors from "../../constants/colors";
import ImageAtom from "../../UI_KIT/Atoms/Image.atom";
import ImageEnum from "../../UI_KIT/Atoms/Image.atom/enum";
import ArrowIcon from "../../shared/assets/icons/arrow.svg?react";

interface SelectionsProps {}

const Selections: React.FC<SelectionsProps> = () => {
  return (
    <div className={styles.container}>
      <ST.Selections>
        <ST.SelectionsLeft>
          <TextAtom
            type={TextEnum.enum_Text_H2}
            margin="0 0 10px 0"
            textTransform="uppercase"
          >
            Подбор модели электро самоката
          </TextAtom>
          <ST.SelectionsSubTitle>
            <TextAtom type={TextEnum.enum_Text_H5} fontWeight="400">
              Пройдите тест и выберите электросамокат по своим критериям
            </TextAtom>
          </ST.SelectionsSubTitle>
          <ST.SelectionsLink>
            <TextAtom type={TextEnum.enum_Text_A1} fontWeight="500" color={Colors.PURPLE}>
              Подобрать модель
            </TextAtom>
            <ImageAtom
              type={ImageEnum.enum_defaultSvg}
              fill={Colors.PURPLE}
              icon={<ArrowIcon />}
            />
          </ST.SelectionsLink>
          <ST.SelectionsImage>
            <ImageAtom type={ImageEnum.enum_srcImage} src="img/samocat-preview.png" />
          </ST.SelectionsImage>
        </ST.SelectionsLeft>

        <ST.SelectionsRight>
          <TextAtom
            type={TextEnum.enum_Text_H2}
            margin="0 0 10px 0"
            textTransform="uppercase"
          >
            Сервисное обслуживание
          </TextAtom>
          <ST.SelectionsSubTitle>
            <TextAtom type={TextEnum.enum_Text_H5} fontWeight="400">
              Крупнейший сервисный центр в России для продуктов Kugoo{" "}
            </TextAtom>
          </ST.SelectionsSubTitle>
          <ST.SelectionsLink>
            <TextAtom type={TextEnum.enum_Text_A1} fontWeight="500" color={Colors.PURPLE}>
              Подобрать модель
            </TextAtom>
            <ImageAtom
              type={ImageEnum.enum_defaultSvg}
              fill={Colors.PURPLE}
              icon={<ArrowIcon />}
            />
          </ST.SelectionsLink>
          <ST.SelectionsImage>
            <ImageAtom
              margin="0 30px 0 0"
              type={ImageEnum.enum_srcImage}
              src="img/women-preview.png"
            />
          </ST.SelectionsImage>
        </ST.SelectionsRight>
      </ST.Selections>
    </div>
  );
};
export default Selections;
