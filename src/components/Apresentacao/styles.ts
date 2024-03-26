import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  gap: 50px;
  width: 100%;
  height: fit-content;
  padding: 80px 0;
  justify-content: center;
  background-image: url("https://res.cloudinary.com/duv6mjghr/image/upload/v1711492248/public/paper_gmir3l.png");
  background-size: cover;
  background-repeat: no-repeat;

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
  gap: 60px;

  @media (max-width: 1750px) {
    max-width: 965px;
    gap: 50px;
  }

  @media (max-width: 1023px) {
    flex-flow: column;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    max-width: 624px;
  }
  @media (max-width: 767px) {
    max-width: 350px;
    align-items: center;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  height: fit-content;
  width: fit-content;
  padding: 15px 20px;
  background-color: #7b7b7b;
  border: none;
  border-radius: 10px;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  gap: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  margin-top: 10px;
  transition: all 0.2s ease-in-out;
  &:active {
    transform: scale(0.95) translateZ(0px) !important;
  }

  &:hover {
    transform: scale(1.03) translateZ(0px);
  }

  @media (max-width: 1750px) {
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 15px 20px;
  }
  @media (max-width: 767px) {
    padding: 15px 20px;
    font-size: 18px;
  }
`;

export const Video = styled.div`
  width: 100%;
  iframe {
    /* max-width: 847px; */
    height: 500px;
    border: none;
    border-radius: 5px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    iframe {
      height: 450px;
    }
  }
  @media (max-width: 767px) {
    align-items: center;
    iframe {
      height: 250px;
    }
  }
`;

export const Text = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  gap: 10px;
  align-items: center;
  h1 {
    font-size: 28px;
    font-weight: 600;
    color: #404040;
  }
  p {
    font-size: 20px;
    font-weight: 500;
    color: #282828;
  }

  @media (max-width: 1023px) {
    align-items: center;

    p {
      text-align: center;
    }
  }
`;
