import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  padding: 60px 0;
  justify-content: center;
  background-color: #f0f0f0;
  position: relative;

  @media (max-width: 1023px) {
    padding: 40px 0;
  }
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
  justify-content: space-between;
  align-items: center;
  padding: 0;
  gap: 30px;

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
    h1 {
      text-align: center;
    }
  }
  @media (max-width: 767px) {
    max-width: 350px;
    align-items: center;
    h1 {
      text-align: center;
      font-size: 28px;
    }
  }
`;

export const ContentGarantia = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  gap: 30px;

  @media (max-width: 767px) {
    flex-flow: column-reverse;
  }
`;

export const LeftContent = styled.div`
  width: 100%;
  background-color: #ccc;
  height: 510px;
  border-radius: 25px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
  }
`;
export const RightContent = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  gap: 25px;
  align-items: center;
`;

export const Text = styled.div`
  display: flex;
  flex-flow: column;
  gap: 15px;
  p {
    font-size: 20px;
    font-weight: 400;
    color: #030303;

    span {
      font-weight: 600;
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
  padding: 15px 75px;
  background-color: #7b7b7b;
  border: none;
  border-radius: 10px;
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  gap: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:active {
    transform: scale(0.95) translateZ(0px) !important;
  }

  &:hover {
    transform: scale(1.03) translateZ(0px);
  }
`;

export const Security = styled.div`
  position: absolute;
  right: -100px;
  bottom: -100px;

  @media (max-width: 767px) {
    display: none;
  }
`;
