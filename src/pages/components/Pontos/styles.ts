import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  padding: 80px 0;
  justify-content: center;

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
  gap: 30px;

  h1 {
    font-size: 27px;
    font-weight: 400;
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
    }
  }
`;
export const Cards = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 45px;
`;
