import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  padding: 80px 0;
  justify-content: center;
  background-color: #030303;
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
    color: #fff;
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

export const InstagramContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 55px;
  img {
    width: 100%;
    max-width: 350px;
  }
`;
export const FacebookContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 55px;
  img {
    width: 100%;
    max-width: 350px;
  }
`;
export const TextContent = styled.div`
  color: #fff;
  display: flex;
  flex-flow: column;
  gap: 15px;
  h2 {
    font-size: 28px;
    font-weight: 600;
  }

  p {
    font-size: 24px;
    font-weight: 400;
  }
`;

export const Icon = styled.div`
  width: 65px;
`;
export const Text = styled.div``;

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
`;