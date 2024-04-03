import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  background: linear-gradient(#282828, #23000070);
  justify-content: center;
  align-items: center;
  flex-flow: column;
  padding: 60px 0;
`;

export const Content = styled.div`
  max-width: 1394px;
  height: fit-content;
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;

  gap: 30px;

  h1 {
    font-size: 36px;
    font-weight: 700;
    color: #ccc;

    span {
      color: #c21313;
    }
  }

  a {
    text-decoration: none;
  }

  @media (max-width: 1023px) {
    padding: 20px 0;
  }

  @media (max-width: 1750px) {
    max-width: 965px;
    gap: 50px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    max-width: 624px;
  }
  @media (max-width: 767px) {
    max-width: 350px;
    align-items: center;
    h1 {
      text-align: center;
    }
  }
`;

export const ContentRedes = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  display: flex;
  height: 100%;
  justify-content: space-between;
  gap: 30px;
  @media (max-width: 1023px) {
    flex-flow: column-reverse;
  }
`;

export const Mockup = styled.div`
  width: fit-content;
  img {
    height: 600px;
  }

  @media (max-width: 767px) {
    img {
      height: 400px;
    }
  }
`;

export const Social = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const Instagram = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  gap: 15px;
`;
export const Facebook = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: flex-end;
  gap: 15px;

  h2 {
    text-align: end;
  }
  p {
    text-align: end;
  }
`;

export const Icon = styled.div`
  width: 65px;
`;
export const Text = styled.div`
  h2 {
    font-size: 28px;
    font-weight: 600;
    color: #fff;
  }

  @media (max-width: 1023px) {
    h2 {
      font-size: 20px;
    }
  }
`;
interface ButtonProps {
  rede?: string;
}
export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: fit-content;
  width: fit-content;
  background-color: ${({ rede }) => (rede === "face" ? "#1877F2" : "#FE0A5D")};
  color: #fff;
  border-radius: 10px;
  border: none;
  padding: 14px 30px;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:active {
    transform: scale(0.95) translateZ(0px) !important;
  }

  &:hover {
    transform: scale(1.03) translateZ(0px);
  }
`;

export const Video = styled.div`
  width: 100%;
  iframe {
    /* max-width: 847px; */
    height: 600px;
    border: none;
    border-radius: 5px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    iframe {
      height: 350px;
    }
  }
  @media (max-width: 767px) {
    align-items: center;
    iframe {
      height: 250px;
    }
  }
`;
