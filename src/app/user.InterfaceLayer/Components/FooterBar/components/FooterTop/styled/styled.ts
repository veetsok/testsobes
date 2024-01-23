"use client";

import Colors from "@/app/user.InterfaceLayer/constants/colors";
import styled from "styled-components";

export const FooterTop = styled.div`
  padding: 23px 0 21px;
  background: ${Colors.PURPLE};
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  & h4 {
    max-width: 445px;
  }
`;
