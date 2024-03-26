import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  padding: 80px 0;
  justify-content: center;
  background-image: url("https://res.cloudinary.com/duv6mjghr/image/upload/v1711492248/public/paper_gmir3l.png");
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
  gap: 30px;
  width: 100%;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  height: fit-content;
  width: fit-content;
  padding: 20px 30px;
  background-color: #282828;
  border: none;
  border-radius: 10px;
  color: #ccc;
  font-size: 20px;
  font-weight: 600;
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
