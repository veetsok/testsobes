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
