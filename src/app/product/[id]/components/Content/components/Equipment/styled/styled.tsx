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

export const Total = styled.div`
  background: ${Colors.BG_BUTTON};
  padding: 27px 31px 28px 30px;
  border-radius: 10px;
  margin: 30px 0 20px 0;
`;

export const TotalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 53px;
`;

export const TotalDesc = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  margin-bottom: 30px;
  & h5 {
    max-width: 249px;
  }
`;

export const TotalDescText = styled.div`
  max-width: 249px;
`;
