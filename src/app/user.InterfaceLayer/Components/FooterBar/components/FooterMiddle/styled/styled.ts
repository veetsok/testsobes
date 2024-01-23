"use client";

import Colors from "@/app/user.InterfaceLayer/constants/colors";
import styled from "styled-components";

export const FooterMiddle = styled.div`
  border-bottom: 1px solid ${Colors.BORDER};
`;

export const Container = styled.div`
  position: relative;
`;

export const Grid = styled.div`
  display: grid;
  padding: 46px 0;
  margin-bottom: 36px;
  grid-template-columns: 255px 370px 1fr;
`;

export const GridItem = styled.div`
  height: 153px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  row-gap: 10px;
  & h6 {
    color: ${Colors.GRAY};
  }
`;

export const GridItemBlock1 = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  max-width: 255px;
  row-gap: 10px;
  & h6 {
    color: ${Colors.GRAY};
  }
`;
export const GridItemBlock2 = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  max-width: 365px;
  row-gap: 10px;
`;
