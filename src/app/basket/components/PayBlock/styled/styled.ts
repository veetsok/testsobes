import Colors from "@/app/user.InterfaceLayer/constants/colors";
import styled from "styled-components";

export const Container = styled.div`
  padding: 20px 27px 25px;
  border-radius: 5px;
  background: ${Colors.BG_BUTTON};
  max-width: 285px;
  width: 100%;
`;

export const Basket = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1px;
`;

export const Title = styled.div`
  border-top: 1px solid ${Colors.BLACK};
  padding-top: 14px;
`;
export const SubTitle = styled.div`
  border-bottom: 1px solid ${Colors.BLACK};
  padding-bottom: 14px;
`;

export const Cost = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const CostBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Conditions = styled.div`
  max-width: 320px;
  display: flex;
  gap: 12px;
  margin-top: 15px;
`;
