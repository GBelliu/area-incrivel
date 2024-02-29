import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  max-height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  position: relative;
  overflow: hidden;
  padding: 200px 0 60px 0;
  video {
    position: absolute;
    z-index: -1;
    filter: brightness(0.2);
  }

  h1 {
    color: #fff;
    font-family: "Poppins", sans-serif;
    font-size: 78px;
    font-style: normal;
    font-weight: 600;
    line-height: 72px;
    max-width: 1062px;
    text-align: center;
  }

  h2 {
    color: #fff;
    font-family: "Poppins", sans-serif;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 60px;
`;

export const ContentText = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 35px;
`;

export const ButtonHero = styled.button`
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  height: fit-content;
  width: fit-content;
  padding: 20px 30px;
  border-radius: 10px;
  color: #505050;
  background: #f8f8f8;
  cursor: pointer;
  font-weight: 500;
  font-size: 20px;
  box-shadow: 0px 4px 8px rgba(255, 255, 255, 0.15),
    0px 8px 16px rgba(255, 255, 255, 0.1);
`;

export const ArrowBottom = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  span {
    font-size: 16px;
    font-weight: 500;
    color: #f3f3f3;
  }
`;
