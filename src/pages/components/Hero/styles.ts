import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  position: relative;
  overflow: hidden;
  padding: 120px 0 50px 0;
  background: linear-gradient(#28282800, #282828);
  /* background: #33333365; */
  > img {
    position: absolute;
    z-index: -1;
    top: 0;
    filter: brightness(0.7);
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  > video {
    position: absolute;
    z-index: -1;
    top: 0;
    filter: brightness(0.7);
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 1750px) {
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 200px 0 50px 0;
  }
  @media (max-width: 767px) {
    padding: 150px 0 30px 0;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1394px;
  gap: 60px;

  a {
    text-decoration: none;
  }

  @media (max-width: 1750px) {
    max-width: 965px;
    gap: 50px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    max-width: 624px;
    gap: 50px;
  }
  @media (max-width: 767px) {
    max-width: 350px;
    align-items: center;
    flex-flow: column;

    a {
      align-self: center;
    }
  }
`;

export const ContentText = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  gap: 30px;

  span {
    font-size: 24px;
    font-weight: 600;
    color: #e4e4e4;
  }

  h1 {
    color: #fff;
    font-family: "Poppins", sans-serif;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    max-width: 1062px;
  }

  h2 {
    color: #e4e4e4;
    font-family: "Poppins", sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  h3 {
    font-size: 32px;
    font-weight: 600;
    color: #e4e4e4;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    h1 {
      font-size: 40px;
      line-height: 64px;
    }
    h2 {
      font-size: 20px;

      line-height: normal;
    }
    h3 {
      font-size: 32px;
    }
  }
  @media (max-width: 767px) {
    h1 {
      font-size: 36px;
      line-height: 64px;
      text-align: center;
      width: 100%;
    }
    h2 {
      font-size: 16px;
      text-align: center;
      line-height: normal;
      text-align: center;
      width: 100%;
    }
    h3 {
      font-size: 24px;
      text-align: center;
      width: 100%;
    }
  }
`;
export const ContentSocial = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  gap: 20px;

  img {
    width: 50px;
    height: 50px;
  }

  @media (max-width: 767px) {
    flex-direction: row;
  }
`;

export const Category = styled.div`
  display: flex;
  text-align: center;
  border: 1px solid #b8b8b8;
  border-radius: 5px;
  font-weight: 500;
  word-spacing: 25%;
  text-transform: uppercase;
  color: #fff;
  width: fit-content;
  padding: 15px 20px;

  @media (max-width: 767px) {
    align-self: center;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-flow: column;
  gap: 5px;
  @media (max-width: 767px) {
    span {
      text-align: center;
    }
    width: 100%;
  }
`;

export const Value = styled.div`
  display: flex;
  flex-flow: column;
  gap: 5px;
  @media (max-width: 767px) {
    width: 100%;
  }
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

  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 18px;
  }
  @media (max-width: 767px) {
    font-size: 16px;
  }
`;
