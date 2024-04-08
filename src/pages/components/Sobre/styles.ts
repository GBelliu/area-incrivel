import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  padding: 60px 0;
  justify-content: center;

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

  p {
    font-size: 24px;
    font-weight: 400;
    color: #404040;
  }

  img {
    max-width: 450px;
  }

  @media (max-width: 1750px) {
    max-width: 965px;
    gap: 50px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    max-width: 624px;
    p {
      text-align: center;
    }
  }
  @media (max-width: 767px) {
    max-width: 350px;
    align-items: center;
    p {
      text-align: center;
      font-size: 20px;
    }

    img {
      width: 250px;
    }
  }
`;
export const ButtonAbout = styled.a`
  background-color: ${(props) => props.theme.primaryColor};
  color: #fff;

  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  height: fit-content;
  width: fit-content;
  padding: 20px 30px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 600;
  font-size: 20px;
  box-shadow: 0px 4px 8px rgba(255, 255, 255, 0.15),
    0px 8px 16px rgba(255, 255, 255, 0.1);
  transition: all 0.2s ease-in-out;
  &:active {
    transform: scale(0.95) translateZ(0px) !important;
  }

  &:hover {
    transform: scale(1.03) translateZ(0px);
  }

  @media (max-width: 767px) {
    padding: 15px 25px;
  }
`;
