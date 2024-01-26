import React from "react";
import * as ST from "./styled/styled";
import TextAtom from "@/app/user.InterfaceLayer/UI_KIT/Atoms/Text.atom";
import TextEnum from "@/app/user.InterfaceLayer/UI_KIT/Atoms/Text.atom/enum";

interface ContentProps {
  product?: any;
}

const Content: React.FC<ContentProps> = ({ product }) => {
  return (
    <ST.Content>
      IMG
      <ST.ContentText>
        <ST.MainBlock>
          <TextAtom type={TextEnum.enum_Text_H1} textTransform="uppercase">
            {product.title}
          </TextAtom>
          <TextAtom type={TextEnum.enum_Text_H2}>{product.priceSale} ₽</TextAtom>
        </ST.MainBlock>
        <ST.Equipment>
          <ST.BlockDefault></ST.BlockDefault>
        </ST.Equipment>
      </ST.ContentText>
    </ST.Content>
  );
};
export default Content;
