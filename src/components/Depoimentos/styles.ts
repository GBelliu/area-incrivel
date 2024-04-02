import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  padding: 80px 0 20px 0;
  justify-content: center;
  background-color: #282828;

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

export const FlexContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: row;
  gap: 20px;
  width: 100%;

  @media (max-width: 1750px) {
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    display: flex;
    flex-flow: column;
    align-items: center;
    &:not(:first-child) {
      flex-flow: column-reverse;
    }
  }
  @media (max-width: 767px) {
    display: flex;
    flex-flow: column;
    align-items: center;
    &:not(:first-child) {
      flex-flow: column-reverse;
    }
  }
`;

export const Column = styled.div`
  display: flex;
  flex-flow: column;
  gap: 20px;
  width: 100%;
`;

export const TestemonialCard = styled.div`
  width: 100%;
  height: fit-content;
  border-radius: 10px;
  box-shadow: -2px 2px 10px 0px rgba(#444, 0.4);
  img {
    border-radius: inherit;
    max-width: 300px;
  }

  @media (max-width: 767px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Iframe = styled.div`
  width: fit-content;
  height: 450px;

  iframe {
    height: 100%;
    border: none;
    border-radius: 20px;
  }
`;
