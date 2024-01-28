import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 100px;
  span {
    width: 76px;
    & img {
      width: 100%;
    }
  }
  .swiper-pagination {
    position: static;
    text-align: left;
  }
`;
