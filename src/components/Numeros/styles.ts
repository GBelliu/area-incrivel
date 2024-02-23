import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  padding: 80px 0;
  justify-content: center;
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
    color: #404040;
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

export const ContentNumeros = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ItemNumeros = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  h2 {
    text-align: center;
    font-size: 62px;
    font-weight: 900;
    background-image: linear-gradient(
      -90deg,
      rgba(255, 0, 0, 1),
      rgba(0, 0, 0, 1)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
  }

  p {
    color: #443d4b;
    text-align: center;
    font-size: 24px;
    font-weight: 500;
    max-width: 190px;
  }
`;
