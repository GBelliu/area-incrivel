import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  border-radius: 20px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
`;

export const LeftContent = styled.div`
  width: 20%;
  background: #c21313;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    font-size: 48px;
    font-weight: bold;
    color: #fff;
  }

  @media (max-width: 767px) {
    span {
      font-size: 36px;
    }
  }
`;

export const RightContent = styled.div`
  width: 80%;
  padding: 25px;
  h1 {
    font-size: 24px;
    font-weight: 600;
    color: #282828;
  }

  p {
    font-size: 16px;
    font-weight: 500;
    color: #282828;
  }

  @media (max-width: 767px) {
    display: flex;
    flex-flow: column;
    gap: 10px;
    h1 {
      font-size: 20px;
      text-align: start;
    }
    p {
      font-size: 16px;
    }
  }
`;
