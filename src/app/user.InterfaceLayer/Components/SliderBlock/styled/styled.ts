"use client";

import Colors from "@/app/user.InterfaceLayer/constants/colors";
import styled from "styled-components";

export const Container = styled.div`
  max-width: 1400px;
  padding: 10px;
  margin: 0 auto;
  width: 100%;
`;

export const SliderBlock = styled.div`
  border-radius: 10px;
  position: relative;
  background: radial-gradient(544.32% 83.35% at 75.14% 62.23%, #a6a9ff 0%, #6f73ee 100%);
  padding: 39px 0 31px;
  margin: 31px 0 39px;
`;

export const ContentSlider = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 99;
`;

export const Box = styled.div`
  display: flex;
  gap: 60px;
`;

export const ImageSlider = styled.div``;

export const BoxShield = styled.div`
  display: flex;
  align-items: center;
  border-radius: 5px;
  padding: 13px;
  border: 1px solid ${Colors.TRANSPARENT};
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(2.5px);
  width: 207px;
  flex-shrink: 0;
  position: absolute;
  bottom: 120px;
  left: 547px;
`;
