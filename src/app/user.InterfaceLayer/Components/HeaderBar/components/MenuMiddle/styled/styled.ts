"use client";

import styled from "styled-components";

export const MenuMiddle = styled.div`
  padding: 30px 0 35px 0;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
`;

export const Search = styled.div``;

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
