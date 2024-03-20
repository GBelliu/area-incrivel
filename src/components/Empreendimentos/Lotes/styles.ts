import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  width: 100%;
  height: fit-content;
  padding: 80px 0;
  justify-content: center;
  background-color: #f0f0f0;
  position: relative;

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
  z-index: 10;
  h1 {
    font-size: 36px;
    font-weight: 700;
    color: #000;

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

export const ContentCards = styled.div`
  display: flex;
  justify-content: flex-start;
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
  right: -50px;
  bottom: -50px;
  height: 100%;
  img {
    height: 100%;
  }

  @media (max-width: 767px) {
    height: 50%;
  }
`;
