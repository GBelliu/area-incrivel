import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  width: 100%;
  height: fit-content;
  padding: 80px 0;
  justify-content: center;
  background: linear-gradient(#030303, #272727);

  @media (max-width: 1023px) {
    padding: 40px 0;
  }
`;

export const ContentFormulario = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1394px;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 30px;
  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 1750px) {
    max-width: 965px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    max-width: 624px;
  }

  @media (max-width: 767px) {
    max-width: 350px;
  }
`;

export const Forms = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 100%;
  margin-top: 30px;

  @media (max-width: 900px) {
    align-items: center;

    margin-bottom: 50px;
  }

  input {
    width: 400px !important;
    height: 30px;
    border: none;
    border-bottom: 2px solid #030303;
    font-size: 25px;
    background: transparent;
    color: #ccc;
    @media (max-width: 1200px) {
      width: 300px !important;
    }

    @media (max-width: 900px) {
      font-size: 22px;
      border-bottom: 2px solid #949494;
    }

    @media (max-width: 500px) {
      font-size: 18px;
    }

    &:focus {
      outline: none;
    }

    &::placeholder {
      font-weight: 600;
      font-size: 28px;
      line-height: 30px;
      opacity: 1;

      color: #949494;

      @media (max-width: 900px) {
        font-size: 22px;
      }

      @media (max-width: 500px) {
        font-size: 18px;
      }
    }
  }

  h1 {
    text-align: center;
    font-size: 36px;
    font-weight: 700;
    color: #ccc;
  }

  .formItem {
    margin: 45px 0;
  }
`;

export const Informacoes = styled.div`
  width: 100%;
  height: fit-content;
  padding: 30px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  background-image: url("https://res.cloudinary.com/duv6mjghr/image/upload/v1711492248/public/paper_gmir3l.png");
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 15px 25px;
  flex-direction: column;
  gap: 35px;
  background-color: #fff;

  @media (max-width: 1510px) {
    width: 100%;

    position: static;
  }

  @media (max-width: 900px) {
    width: 100%;
    margin: 0 auto;
    max-width: 350px;
    padding: 40px;
  }

  .titleInfo {
    display: flex;
    flex-flow: column;
    width: 100%;
    align-items: center;
    gap: 10px;
    h2 {
      font-weight: 700;
      font-size: 36px;
      width: 100%;
      color: #030303;
      text-align: center;
    }
  }
  .infoText {
    display: flex;
    flex-direction: column;
    text-align: start;
    display: flex;
    flex-flow: column;
    gap: 10px;
    h4 {
      font-weight: 500;
      font-size: 20px;
      color: #494949;
    }

    span {
      font-weight: 700;
    }
  }
  .infoMap {
    width: 100%;
    display: flex;
    margin: auto;

    iframe {
      height: 300px;
      width: 100%;
    }
  }

  @media (max-width: 1750px) {
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    gap: 25px;
    .titleInfo {
      h2 {
        font-size: 32px;
      }
    }
  }
  @media (max-width: 767px) {
    gap: 25px;
    .titleInfo {
      h2 {
        font-size: 28px;
      }
    }
    .infoText {
      display: flex;
      flex-direction: column;
      text-align: start;

      h4 {
        font-weight: 500;
        font-size: 20px;
        color: #494949;
      }

      span {
        font-weight: 700;
      }
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
  padding: 15px 75px;
  background-color: #7b7b7b;
  border: none;
  border-radius: 10px;
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  gap: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:active {
    transform: scale(0.95) translateZ(0px) !important;
  }

  &:hover {
    transform: scale(1.03) translateZ(0px);
  }

  @media (max-width: 900px) {
    width: 100%;
  }
`;
