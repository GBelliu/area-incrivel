import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 800px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url("./home.png");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;

  h1 {
    color: #fff;
    font-family: "Poppins", sans-serif;
    font-size: 96px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
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
