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
  position: relative;

  .reddec {
    position: absolute;
    top: 0;
    right: 0;
    width: 150px;
    z-index: 0;
  }
  .graydec {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 150px;
    z-index: 0;
  }

  @media (max-width: 767px) {
    padding: 30px 0;
    .reddec,
    .graydec {
      width: 50px;
    }
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
  z-index: 1;
  gap: 25px;

  h1 {
    font-size: 36px;
    font-weight: 700;
    color: #ccc;

    span {
      color: #c21313;
    }
  }

  a {
    text-decoration: none;
  }

  @media (max-width: 1023px) {
    padding: 20px 0;
  }

  @media (max-width: 1750px) {
    max-width: 965px;
    gap: 20px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    max-width: 624px;
  }
  @media (max-width: 767px) {
    max-width: 350px;
    align-items: center;
    h1 {
      font-size: 28px;
      text-align: center;
    }
  }
`;

export const ContentEmpresas = styled.div`
  display: flex;
  align-items: stretch;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  gap: 25px;
  img {
    width: 200px;
  }
  h2 {
    font-size: 24px;
    color: #030303;
    font-weight: 600;
    text-align: center;
  }

  p {
    font-size: 18px;
    color: #282828;
    font-weight: 500;
    text-align: center;
  }

  @media (max-width: 1023px) {
    flex-wrap: wrap;
  }
`;

export const LarIncrivelContent = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
  background-color: #fff;
  border-radius: 20px;
  padding: 25px;
  box-sizing: border-box;
  box-shadow: 0px 2px 8px rgba(255, 255, 255, 0.15),
    0px 4px 8px rgba(255, 255, 255, 0.1);
`;
export const EnergiaAmigaContent = styled.div`
  width: 100%;

  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
  background-color: #fff;
  border-radius: 20px;
  padding: 25px;
  box-sizing: border-box;
  box-shadow: 0px 2px 8px rgba(255, 255, 255, 0.15),
    0px 4px 8px rgba(255, 255, 255, 0.1);
`;
export const LarNoCelularContent = styled.div`
  width: 100%;

  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
  background-color: #fff;
  border-radius: 20px;
  padding: 25px;
  box-sizing: border-box;
  box-shadow: 0px 2px 8px rgba(255, 255, 255, 0.15),
    0px 4px 8px rgba(255, 255, 255, 0.1);
`;

interface ButtonProps {
  rede?: string;
}
export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: fit-content;
  width: fit-content;
  background-color: ${({ rede }) => (rede === "face" ? "#1877F2" : "#FE0A5D")};
  color: #fff;
  border-radius: 4px;
  border: none;
  padding: 14px 30px;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:active {
    transform: scale(0.95) translateZ(0px) !important;
  }

  &:hover {
    transform: scale(1.03) translateZ(0px);
  }
`;
