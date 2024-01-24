import React from "react";
import * as ST from "./styled/styled";
import TextAtom from "@/app/user.InterfaceLayer/UI_KIT/Atoms/Text.atom";
import TextEnum from "@/app/user.InterfaceLayer/UI_KIT/Atoms/Text.atom/enum";
import Colors from "@/app/user.InterfaceLayer/constants/colors";
import ImageAtom from "@/app/user.InterfaceLayer/UI_KIT/Atoms/Image.atom";
import ImageEnum from "@/app/user.InterfaceLayer/UI_KIT/Atoms/Image.atom/enum";
import YandexIcon from "../../../../shared/assets/icons/yandex.svg?react";
import StarIcon from "../../../../shared/assets/icons/star.svg?react";

interface YandexProps {}

const Yandex: React.FC<YandexProps> = () => {
  return (
    <ST.Box>
      <ST.YandexBlock>
        <ST.Background></ST.Background>
        <ImageAtom type={ImageEnum.enum_defaultSvg} icon={<YandexIcon />} />
      </ST.YandexBlock>
      <ST.YandexText>
        <TextAtom
          color={Colors.BLACK}
          type={TextEnum.enum_Text_H6}
          fontWeight="400"
          fontSize="12px"
        >
          Яндекс отзывы
        </TextAtom>
        <ST.YandexSubText>
          <ImageAtom
            width="14px"
            height="14px"
            type={ImageEnum.enum_defaultSvg}
            icon={<StarIcon />}
          />
          <TextAtom
            margin="0 0 0 5px"
            color={Colors.BLACK}
            type={TextEnum.enum_Text_H2}
            textTransform="uppercase"
            fontWeight="600"
          >
            4,9
          </TextAtom>
        </ST.YandexSubText>
      </ST.YandexText>
    </ST.Box>
  );
};
export default Yandex;
