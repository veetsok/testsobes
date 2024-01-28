import ImageAtom from "@/app/user.InterfaceLayer/UI_KIT/Atoms/Image.atom";
import ImageEnum from "@/app/user.InterfaceLayer/UI_KIT/Atoms/Image.atom/enum";
import React from "react";
import * as ST from "./styled/styled";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface ImageContentBoxProps {
  product?: any;
}

const ImageContentBox: React.FC<ImageContentBoxProps> = ({ product }) => {
  const { img, title } = product;

  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return (
        '<span class="' +
        className +
        '">' +
        `<img src=${`../../${img[index]}`} alt="" />` +
        "</span>"
      );
    },
  };

  return (
    <ST.Container>
      <Swiper pagination={pagination} modules={[Pagination]} className="mySwiper">
        {img.map((image: [string], index: number) => (
          <SwiperSlide key={index}>
            <ImageAtom
              type={ImageEnum.enum_srcImage}
              src={`../../${image}`}
              alt={title}
              width="570px"
              height="506px"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </ST.Container>
  );
};
export default ImageContentBox;

// '<div class="' +
// className +
// '">' +
// `<img src=${`../../${img[index + 1]}`} alt="" />` +
// (
//   <ImageAtom
//     type={ImageEnum.enum_srcImage}
//     src={`../../${img[index + 1]}`}
//     alt={title}
//     width="73px"
//     height="73px"
//   />
// )
// "</div>"
