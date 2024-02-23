import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  max-height: 500px;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  position: relative;
  overflow: hidden;
  padding: 400px 0;
  video {
    position: absolute;
    z-index: -1;
    filter: brightness(0.2);
  }

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
