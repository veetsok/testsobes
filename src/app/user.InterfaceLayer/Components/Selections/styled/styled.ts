"use client";

import styled from "styled-components";

export const Selections = styled.div`
  padding: 55px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
`;

export const SelectionsLeft = styled.div`
  width: calc(50% - 15px);
  background-image: url(../img/selections-layer-bg.png);
  background-repeat: no-repeat;
  background-position: right;
  background-color: #f4f7fb;
  border-radius: 10px;
  padding: 32px 40px;
  position: relative;
  overflow: hidden;
  transition: transform 0.2s linear;
  cursor: pointer;
  & h2 {
    max-width: 270px;
    line-height: 1.5;
  }
`;

export const SelectionsImage = styled.div`
  position: absolute;
  top: 1px;
  right: 0;
  bottom: 0;
  filter: drop-shadow(35px 39px 43px #000);
`;

export const SelectionsRight = styled.div`
  width: calc(50% - 15px);
  background-image: url(../img/selections-layer-bg.png);
  background-repeat: no-repeat;
  background-position: right;
  background-color: #f4f7fb;
  border-radius: 10px;
  padding: 32px 40px;
  position: relative;
  overflow: hidden;
  transition: transform 0.2s linear;
  cursor: pointer;
  & h2 {
    max-width: 270px;
    line-height: 1.5;
  }
`;

export const SelectionsSubTitle = styled.div`
  max-width: 258px;
  margin-bottom: 22px;
`;

export const SelectionsLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`;
