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
