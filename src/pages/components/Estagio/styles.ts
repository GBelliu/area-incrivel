import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  background-color: #f0f0f0;
  justify-content: center;
  padding: 60px 0;

  @media (max-width: 1023px) {
    padding: 40px 0;
  }
  @media (max-width: 1767px) {
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
  padding: 30px 0;
  gap: 30px;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;

  h1 {
    color: #404040;

    span {
      font-weight: 700;
    }
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
      font-size: 26px;
    }
  }
`;

export const DataContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 50px;

  @media (max-width: 1023px) {
    flex-flow: column;
  }
`;
export const GraphicContainer = styled.div`
  width: 50%;
  box-sizing: content-box;
  padding: 25px 75px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
`;
export const DataContent = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  gap: 10px;
`;
export const ProgressContent = styled.div`
  span {
    font-size: 20px;
    font-weight: 600;
    color: #443d4b;
  }
`;
