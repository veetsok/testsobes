import React from "react";
import * as ST from "./styled/styled";
import { Products } from "@/app/business.InterfaceLayer/types";
import ImageAtom from "@/app/user.InterfaceLayer/UI_KIT/Atoms/Image.atom";
import ImageEnum from "@/app/user.InterfaceLayer/UI_KIT/Atoms/Image.atom/enum";
import TextAtom from "@/app/user.InterfaceLayer/UI_KIT/Atoms/Text.atom";
import TextEnum from "@/app/user.InterfaceLayer/UI_KIT/Atoms/Text.atom/enum";

interface CardsBoxProps {
  item: Products[];
}

const CardsBox: React.FC<CardsBoxProps> = ({ item }) => {
  const { title, img } = item;
  
  return (
    <ST.Container>
        <ST.CardBlock>
          <ImageAtom type={ImageEnum.enum_srcImage} src={img} alt={title} />
          <ST.Description>
            <TextAtom type={TextEnum.enum_Text_H5}>{title}</TextAtom>
          </ST.Description>
        </ST.CardBlock>
    </ST.Container>
  );
};
export default CardsBox;
