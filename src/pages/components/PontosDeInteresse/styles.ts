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

  > p {
    font-size: 20px;
    text-align: center;
    font-weight: 500;
    color: #fff;
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
  background-color: ${(props) => props.theme.primaryColor};
  border: none;
  border-radius: 10px;
  color: #f3f3f3;
  font-size: 20px;
  font-weight: 500;
  gap: 10px;
  box-shadow: 0px 4px 8px rgba(255, 255, 255, 0.15);
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
export const ContentPontos = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  height: 450px;

  @media (max-width: 1023px) {
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

  @media (max-width: 1023px) {
    height: 300px;
  }
`;
export const Itens = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 25px 0;

  p {
    color: #ccc;
    font-size: 12px;
  }

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

export const TableContainer = styled.div`
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  color: #030303;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 1023px) {
    overflow-x: auto;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHeader = styled.th`
  border: 1px solid #dddddd;
  text-align: center;
  padding: 12px;
  background-color: #f8f9fa;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
  background-color: ${(props) => props.theme.primaryColor};
`;

export const TableCell = styled.td`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 12px;

  &:nth-child(even) {
    text-align: center;
  }

  &:last-child {
    text-align: right;
  }
`;
