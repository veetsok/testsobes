import Colors from "@/app/user.InterfaceLayer/constants/colors";
import styled from "styled-components";

export const SliderTitle = styled.div`
  max-width: 615px;
  .mySwiper {
    .swiper-button-prev {
      position: absolute;
      bottom: 0;
      left: 0;
      background: ${Colors.TRANSPARENT};
      border: none;
      border-radius: 50%;
      padding: 2px;
      outline: none;
      border: 1px solid ${Colors.BUTTON_BR};
      color: ${Colors.WHITE};
      cursor: pointer;
      &:after {
        font-size: 7px;
      }
    }
    .swiper-button-next {
      position: absolute;
      bottom: 0;
      right: 0;
      background: ${Colors.TRANSPARENT};
      border: none;
      border-radius: 50%;
      padding: 2px;
      outline: none;
      border: 1px solid ${Colors.BUTTON_BR};
      color: ${Colors.WHITE};
      cursor: pointer;
      &:after {
        font-size: 7px;
      }
    }
  }
`;
