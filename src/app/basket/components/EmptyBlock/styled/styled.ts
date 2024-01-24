import Colors from "@/app/user.InterfaceLayer/constants/colors";
import styled from "styled-components";

export const Container = styled.div`
  border-radius: 10px;
  background: ${Colors.BG_BUTTON};
  width: 100%;
  padding: 45px 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 100px;
  & h2 {
    color: ${Colors.BLACK};
    margin: 25px 0 5px 0;
  }
`;
