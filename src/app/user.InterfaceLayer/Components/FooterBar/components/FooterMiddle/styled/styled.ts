"use client";

import Colors from "@/app/user.InterfaceLayer/constants/colors";
import styled from "styled-components";

export const FooterMiddle = styled.div`
  border-bottom: 1px solid ${Colors.BORDER};
`;

export const Grid = styled.div`
  display: grid;
  padding: 46px 0;
  margin-bottom: 36px;
  grid-template-columns: 255px 370px 1fr;
`;

export const GridItem = styled.div`
  height: 120px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;
