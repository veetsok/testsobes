import TextAtom from "@/app/user.InterfaceLayer/UI_KIT/Atoms/Text.atom";
import TextEnum from "@/app/user.InterfaceLayer/UI_KIT/Atoms/Text.atom/enum";
import React from "react";
import * as ST from "./styled/styled";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import Colors from "@/app/user.InterfaceLayer/constants/colors";

interface SliderTitleProps {}

const SliderTitle: React.FC<SliderTitleProps> = () => {
  const titles = [
    {
      id: 1,
      title: "Электросамокаты Kugoo Kirin от официального дилера",
      desc: "с бесплатной доставкой по РФ от 1 дня",
    },
    {
      id: 2,
      title: "Электросамокаты Kugoo Kirin RU производства",
      desc: "доставка по РФ абсолютна бесплатна!",
    },
    {
      id: 3,
      title: "Электросамокаты Kugoo Kirin EU производства",
      desc: "доставка в страны Европы за 10-20 дней",
    },
  ];

  return (
    <>
      <ST.SliderTitle>
        <Swiper autoplay={{ delay: 2000 }} loop speed={2000} className="mySwiper">
          {titles.map((title, index) => (
            <SwiperSlide key={index}>
              <>
                <TextAtom
                  type={TextEnum.enum_Text_H1}
                  color={Colors.WHITE}
                  margin="40px 0 7px 0"
                  textTransform="uppercase"
                >
                  {title.title}
                </TextAtom>
                <TextAtom type={TextEnum.enum_Text_H4} color={Colors.WHITE}>
                  {title.desc}
                </TextAtom>
              </>
            </SwiperSlide>
          ))}
        </Swiper>
      </ST.SliderTitle>
    </>
  );
};

export default SliderTitle;
