import Colors from "@/app/user.InterfaceLayer/constants/colors";
import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 64px;
  margin-bottom: 100px;
`;

export const ContentText = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MainBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Statistic = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const Instock = styled.div`
  align-items: center;
  display: flex;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  margin-right: 42px;
`;

export const PriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
`;

export const PriceBox = styled.div`
  display: flex;
  margin: 31px 0;
  gap: 81px;
  & button {
    & h6 {
      text-align: left;
    }
  }
`;

export const PriceButton = styled.div``;

export const Equipment = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const BlockDefault = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  border-bottom: 1px solid ${Colors.BG_CARD};
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
`;
