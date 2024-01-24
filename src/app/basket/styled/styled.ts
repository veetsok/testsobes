import Colors from "@/app/user.InterfaceLayer/constants/colors";
import styled from "styled-components";

export const Container = styled.div`
  padding: 30px 0 35px 0;
`;

export const Basket = styled.div`
  margin: 41px 0 0 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 30px;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeaderBox = styled.div`
  max-width: 760px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px;
  border-radius: 5px;
  background: ${Colors.BG_BUTTON};
  margin-bottom: 40px;
  & h6 {
    font-size: 12px;
    font-weight: 500;
    color: ${Colors.BLACK};
  }
`;
