import Colors from "@/app/user.InterfaceLayer/constants/colors";
import styled from "styled-components";

export const Equipment = styled.div``;

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 20px 0;
`;

export const EquipmentList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Border = styled.div`
  background: ${Colors.BG_CARD};
  width: 100%;
  height: 1px;
  margin: 20px 0;
`;

export const Tire = styled.div`
  display: flex;
`;

export const BlockDefault = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const GiftBlock = styled.div`
  border-radius: 10px;
  padding: 20px 38px 25px 20px;
  background: ${Colors.BG_BUTTON};
`;

export const GiftBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 230px;
  & h6 {
    max-width: 166px;
    margin-left: 16px;
  }
`;
