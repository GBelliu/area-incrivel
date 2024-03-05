import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  width: 100%;
  height: fit-content;
  padding: 0;
  justify-content: center;
  background-color: #f0f0f0;
`;

export const Content = styled.div`
  height: fit-content;
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  padding: 0;

  h1 {
    font-size: 36px;
    font-weight: 700;
    color: #000;

    span {
      color: #c21313;
    }
  }
`;
