"use client";

import Colors from "@/app/user.InterfaceLayer/constants/colors";
import styled from "styled-components";

export const Container = styled.div``;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CardsBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  padding: 50px 0 110px 0;
`;

export const CardItem = styled.div`
  position: relative;
  width: 255px;
  border-radius: 11px;
  border: 1.5px solid ${Colors.BG_CARD};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CardItemImg = styled.div`
  height: 231px;
  background: rgb(240, 241, 245);
  padding: 27px 0 22px;
  border-radius: 10px 10px 0 0;
`;

export const CardItemBox = styled.div`
  padding: 20px 25px;
`;
export const CardItemTitle = styled.div``;

export const CardItemGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 19px;
  row-gap: 10px;
`;

export const GridTextBox = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;
export const PriceBlock = styled.div``;

export const PriceBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 26px;
  margin-bottom: 16px;
`;

export const Price = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
