import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  width: 100%;
  height: fit-content;
  padding: 80px 0;
  justify-content: center;
  background-color: #030303;
  position: relative;
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
  z-index: 10;
  h1 {
    font-size: 36px;
    font-weight: 700;
    color: #ccc;

    span {
      color: #c21313;
    }
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
  }
`;

export const ContentEmpreendimentos = styled.div``;

export const ContentCards = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  gap: 25px;

  @media (max-width: 1750px) {
  }
  @media (min-width: 768px) and (max-width: 1023px) {
  }
  @media (max-width: 767px) {
    flex-flow: column;
  }
`;

export const Image = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;

  height: 100%;
  img {
    height: 100%;
  }
`;
