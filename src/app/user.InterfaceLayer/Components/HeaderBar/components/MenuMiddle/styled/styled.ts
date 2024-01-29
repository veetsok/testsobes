"use client";

import Colors from "@/app/user.InterfaceLayer/constants/colors";
import styled from "styled-components";

export const MenuMiddle = styled.div`
  padding: 30px 0 35px 0;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
`;

export const Search = styled.div`
  width: 100%;
  max-width: 603px;
  margin: 0 47px 0 20px;
  border: 1.5px solid ${Colors.PURPLE};
  border-radius: 5px;
  outline: 0;
  .selectCustom {
    &:placeholder {
      color: ${Colors.GRAY};
      font-family: Jost;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }

  & .ant-select-selector {
    padding: 0;
    height: 40px;
    padding: 0;
    &:active,
    &:visited,
    &:hover,
    &:focus {
      border: 1.5px solid ${Colors.PURPLE};
    }
  }

  .ant-select-arrow {
    margin: -5px -11px 0 0;
    & svg {
      border-radius: 0px 5px 5px 0;
      width: 16px;
      height: 16px;
      fill: ${Colors.WHITE};
      padding: 12px;
      background: ${Colors.PURPLE};
    }
  }
  .anticon-down {
    & svg {
      border-radius: 0px 5px 5px 0;
      width: 16px;
      height: 16px;
      fill: ${Colors.WHITE};
      padding: 12px;
      background: ${Colors.PURPLE};
    }
  }
`;

export const MenuSearch = styled.input`
  border: none;
  outline: none;
  width: 100%;
  font-weight: 400;

  &::-webkit-search-decoration,
  &::-webkit-search-cancel-button,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }
`;

export const ShopBox = styled.div`
  display: flex;
  align-items: center;
`;
