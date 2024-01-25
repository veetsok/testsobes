import Colors from "@/app/user.InterfaceLayer/constants/colors";
import styled from "styled-components";

export const HeaderBox = styled.div`
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

export const HeaderBox2 = styled.div`
  display: flex;
  align-items: center;
  gap: 57.5px;
`;
