"use client";

import React from "react";
import * as ST from "./styled/styled";
import styles from "../../../styles/page.module.css";
import TextAtom from "../../UI_KIT/Atoms/Text.atom";
import TextEnum from "../../UI_KIT/Atoms/Text.atom/enum";
import Colors from "../../constants/colors";
import ImageAtom from "../../UI_KIT/Atoms/Image.atom";
import ImageEnum from "../../UI_KIT/Atoms/Image.atom/enum";
import ButtonAtom from "../../UI_KIT/Atoms/Button.atom";
import ButtonEnum from "../../UI_KIT/Atoms/Button.atom/enum";
import SliderTitle from "./components/SliderTitle/SliderTitle";

interface SliderBlockProps {}

const SliderBlock: React.FC<SliderBlockProps> = () => {
  return (
    <ST.Container>
      <ST.SliderBlock>
        <div className={styles.container}>
          <ST.Box>
            <ST.ContentSlider>
              <TextAtom
                type={TextEnum.enum_Text_H6}
                color={Colors.WHITE}
                fontSize="14px"
                fontWeight="400"
                padding="3px 11px 4px 11px"
                background={Colors.TRANSPARENT}
                width="max-content"
                $borderRadius="5px"
                border={`1px solid ${Colors.WHITE}`}
              >
                Новинка
              </TextAtom>
              <SliderTitle />
              <ButtonAtom
                width="177px"
                $borderRadius="5px"
                padding="15px 25px"
                margin="25px 0 0 0"
                background={Colors.WHITE}
                type={ButtonEnum.enum_defaultButton}
              >
                <TextAtom type={TextEnum.enum_Text_H5} color={Colors.PURPLE}>
                  Перейти в католог
                </TextAtom>
              </ButtonAtom>
              <ST.BoxShield>
                <ImageAtom
                  type={ImageEnum.enum_srcImage}
                  width="22px"
                  height="22px"
                  src="img/power.png"
                  margin="0 10px 0 0"
                />
                <TextAtom
                  type={TextEnum.enum_Text_H6}
                  fontSize="14px"
                  fontWeight="400"
                  color={Colors.WHITE}
                >
                  Тест-драйв и обучение
                </TextAtom>
                <ST.NewText>
                  <TextAtom
                    type={TextEnum.enum_Text_H6}
                    color={Colors.PURPLE}
                    fontSize="14px"
                    fontWeight="400"
                    padding="3px 11px 4px 11px"
                    background={Colors.WHITE}
                    width="max-content"
                    $borderRadius="5px"
                    border={`1px solid ${Colors.WHITE}`}
                    textTransform="uppercase"
                  >
                    Бесплатно
                  </TextAtom>
                </ST.NewText>
              </ST.BoxShield>
            </ST.ContentSlider>
            <ST.ImageSlider>
              <ImageAtom
                width="538px"
                height="405px"
                type={ImageEnum.enum_srcImage}
                src="../img/Slider.png"
              />
            </ST.ImageSlider>
          </ST.Box>
        </div>
      </ST.SliderBlock>
    </ST.Container>
  );
};
export default SliderBlock;
