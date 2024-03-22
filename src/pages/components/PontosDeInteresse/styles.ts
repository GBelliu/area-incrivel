import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  background-color: #282828;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  padding: 60px 0;

  @media (max-width: 767px) {
    padding: 30px 0;
  }
`;

export const Content = styled.div`
  max-width: 1394px;
  height: fit-content;
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;

  gap: 30px;

  h1 {
    color: #fff;

    span {
      color: ${(props) => props.theme.primaryColor};
    }
  }

  @media (max-width: 1023px) {
    padding: 20px 0;
  }

  @media (max-width: 1750px) {
    max-width: 965px;
    gap: 50px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    max-width: 624px;
    gap: 35px;
  }
  @media (max-width: 767px) {
    max-width: 350px;
    align-items: center;
    gap: 25px;
    h1 {
      font-size: 28px;
      text-align: center;
    }
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  height: fit-content;
  width: fit-content;
  padding: 20px 30px;
  background-color: #7b7b7b;
  border: none;
  border-radius: 10px;
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  gap: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
  cursor: pointer;

  @media (max-width: 1750px) {
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 15px 20px;
  }
  @media (max-width: 767px) {
    padding: 15px 20px;
    font-size: 18px;
  }
`;
export const ContentPontos = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  height: 450px;

  @media (max-width: 767px) {
    flex-flow: column-reverse;
    height: fit-content;
  }
`;

export const Mapa = styled.div`
  width: 100%;
  height: 100%;

  iframe {
    width: 100%;
    height: 100%;

    border: none;
    border-radius: 5px;
  }

  @media (max-width: 767px) {
    height: 300px;
  }
`;
export const Itens = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 25px 0;

  @media (max-width: 767px) {
    gap: 7px;
  }
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  span {
    color: #fff;
    font-size: 24px;
    font-weight: 500;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    span {
      font-size: 20px;
    }
  }
  @media (max-width: 767px) {
    span {
      font-size: 20px;
    }
  }
`;
