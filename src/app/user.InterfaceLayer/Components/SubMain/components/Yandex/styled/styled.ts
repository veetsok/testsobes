"use client";

import styled from "styled-components";

export const Box = styled.div`
  padding: 10px;
  display: inline-flex;
  min-width: 190px;
  align-items: center;
  & h3 {
  }
`;

export const YandexBlock = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const YandexText = styled.div`
  margin: 0 0 0 18px;
`;

export const YandexSubText = styled.div`
  display: flex;
  align-items: center;
  & h6 {
    font-size: 30px;
  }
`;

export const Background = styled.div`
  position: absolute;
  width: 48px;
  height: 48px;
  top: 13px;
  left: 4px;
  z-index: -1;
  border-radius: 5px;
  opacity: 0.5;
  background: #fc3f1d;
  filter: blur(7.5px);
`;
