import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  padding: 80px 0;
  justify-content: center;
  background-image: url("paper.png");
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: 1023px) {
    padding: 40px 0;
  }
`;

export const Content = styled.div`
  max-width: 1394px;
  height: fit-content;
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  gap: 60px;

  h1 {
    font-size: 36px;
    font-weight: 700;
    color: #030303;
  }

  @media (max-width: 1750px) {
    max-width: 965px;
    gap: 50px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    max-width: 624px;
  }
  @media (max-width: 767px) {
    max-width: 350px;
    align-items: center;

    h1 {
      text-align: center;
    }
  }
`;

export const Abouts = styled.div`
  display: flex;
  flex-flow: column;
  gap: 30px;
  width: 100%;
`;
