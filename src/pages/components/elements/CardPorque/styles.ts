import styled from "styled-components";

interface CardProps {
  type?: string;
}

export const Container = styled.div<CardProps>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  background: #fff;
  border-radius: 4px;
  /* overflow: hidden; */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15), 0px 8px 16px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  height: 450px;
  border-radius: 20px;
  overflow: hidden;
`;
export const ContentTop = styled.div<CardProps>`
  width: 100%;
  height: 100%;
  display: flex;
  background: red;

  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  height: fit-content;
  width: fit-content;
  display: flex;
  flex-flow: column;
  gap: 20px;
  padding: 35px;
`;
export const ContentTextInfo = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  span {
    font-size: 20px;
    font-weight: 300;
    color: #404040;

    text-transform: uppercase;
    word-spacing: 5%;
  }

  h2 {
    font-size: 24px;
    font-weight: 600;
    color: #000;
  }
`;
