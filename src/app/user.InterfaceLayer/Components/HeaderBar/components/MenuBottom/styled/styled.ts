"use client";

import Colors from "@/app/user.InterfaceLayer/constants/colors";
import styled from "styled-components";

export const MenuBottom = styled.div`
  background: ${Colors.BG_BUTTON};
  padding: 10px 0;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 776px;
`;

export const Box = styled.div`
  display: flex;
  gap: 8px;
`;