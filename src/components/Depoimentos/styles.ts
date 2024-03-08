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

export const GridContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  width: 100%;

  @media (max-width: 1750px) {
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    display: flex;
    flex-flow: column;
    &:not(:first-child) {
      flex-flow: column-reverse;
    }
  }
  @media (max-width: 767px) {
    display: flex;
    flex-flow: column;
    &:not(:first-child) {
      flex-flow: column-reverse;
    }
  }
`;

export const HorizontalItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  box-sizing: border-box;
  background: #ccc;
  color: #fff;
  grid-column-start: auto;
  grid-row-start: auto;
  color: #fff;
  background-size: cover;
  background-position: center;
  box-shadow: -2px 2px 10px 0px rgba(#444, 0.4);
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  counter-increment: item-counter;
  grid-column-end: span 3;
  width: 100%;
  border-radius: 10px;
`;
export const SmallItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  box-sizing: border-box;
  background: #ccc;
  color: #fff;
  grid-column-start: auto;
  grid-row-start: auto;
  color: #fff;
  background-size: cover;
  background-position: center;
  box-shadow: -2px 2px 10px 0px rgba(#444, 0.4);
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  counter-increment: item-counter;
  grid-column-end: span 2;
  width: 100%;
  border-radius: 10px;
`;
export const VerticalItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  box-sizing: border-box;
  background: #ccc;
  color: #fff;
  grid-column-start: auto;
  grid-row-start: auto;
  color: #fff;
  background-size: cover;
  background-position: center;
  box-shadow: -2px 2px 10px 0px rgba(#444, 0.4);
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  counter-increment: item-counter;
  grid-row-end: span 2;
  width: 100%;
  border-radius: 10px;
`;
export const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit);
  grid-gap: 20px;
  grid-auto-rows: 150px;
  grid-auto-flow: row dense;
  width: 100%;
`;
