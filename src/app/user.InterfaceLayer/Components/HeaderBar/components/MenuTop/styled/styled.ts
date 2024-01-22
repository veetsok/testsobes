"use client";

import Colors from "@/app/user.InterfaceLayer/constants/colors";
import styled from "styled-components";

export const MenuTop = styled.div`
  padding: 11px 0;
  border: 1px solid ${Colors.BORDER};
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
`;

export const ListItem = styled.div`
  display: flex;
  margin-right: 30px;
`;

export const Social = styled.div`
  display: flex;
`;

export const MenuTopRight = styled.div``;

export const A = styled.a`
  color: var(--Gray-600, #5d6c7b);
  /* 12 px (regular) */
  font-family: Jost;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
