import TextAtom from "@/app/user.InterfaceLayer/UI_KIT/Atoms/Text.atom";
import TextEnum from "@/app/user.InterfaceLayer/UI_KIT/Atoms/Text.atom/enum";
import React from "react";
import * as ST from "./styled/styled";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Colors from "@/app/user.InterfaceLayer/constants/colors";
import ImageAtom from "@/app/user.InterfaceLayer/UI_KIT/Atoms/Image.atom";
import ImageEnum from "@/app/user.InterfaceLayer/UI_KIT/Atoms/Image.atom/enum";
import ButtonAtom from "@/app/user.InterfaceLayer/UI_KIT/Atoms/Button.atom";
import ButtonEnum from "@/app/user.InterfaceLayer/UI_KIT/Atoms/Button.atom/enum";

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

  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return `<span class="${className}">${index + 1}</span>`;
    },
  };

  return (
    <>
      <ST.SliderTitle>
        <Swiper
          navigation={true}
          pagination={pagination}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
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
              </>
            </SwiperSlide>
          ))}
        </Swiper>
      </ST.SliderTitle>
    </>
  );
};

export default SliderTitle;
