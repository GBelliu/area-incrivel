import styled from "styled-components";

interface CardProps {
  type?: string;
}

export const Container = styled.div<CardProps>`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  background: #fff;
  border-radius: 4px;
  /* overflow: hidden; */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15), 0px 8px 16px rgba(0, 0, 0, 0.1);
  padding-bottom: 35px;
  max-width: 350px;
`;
export const ContentHeader = styled.div<CardProps>`
  width: 100%;
  display: flex;
  height: fit-content;
  background: #c21313;
  padding: 20px 0;
  align-items: center;
  justify-content: center;

  h2 {
    font-size: 24px;
    color: #fff;
    line-height: 150%;
    letter-spacing: 6px;
    font-weight: 500;

    span {
      letter-spacing: 2px;
    }
  }
`;

export const Content = styled.div`
  height: fit-content;
  max-height: 325px;
  width: 100%;
  display: flex;
  flex-flow: column;
  gap: 20px;
  padding: 35px 30px 50px 30px;
`;
export const ContentTextInfo = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  span {
    font-size: 14px;
    font-weight: 600;
    color: #443d4b;
    line-height: 150%;
    text-transform: uppercase;
  }

  h3 {
    font-size: 32px;
    font-weight: 600;
    color: #1f0e30;
    line-height: 150%;
    text-transform: uppercase;
  }

  p {
    font-size: 12px;
    font-weight: 500;
    color: #797282;
    line-height: 150%;
    text-transform: uppercase;
  }
`;
export const Divider = styled.div`
  width: 50%;
  border-bottom: 3px solid #c21313;
  border-radius: 1px;
`;

export const List = styled.div`
  display: flex;
  flex-flow: column;
  gap: 7px;
`;
export const ListItem = styled.div`
  span {
    color: #c21313;
  }
  font-size: 16px;
  font-weight: 500;
  color: #443d4b;
  line-height: 150%;
`;

export const ContentButton = styled.div`
  height: fit-content;

  width: 100%;
  display: flex;

  padding: 0px 30px;

  a {
    text-decoration: none;
  }
`;

export const ButtonCard = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: fit-content;
  width: 100%;
  background-color: #000000;
  color: #fff;
  border-radius: 4px;
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

export const ImageBox = styled.div`
  width: 100%;
  height: 150px;
  cursor: pointer;
  position: relative;
  transition: all 0.2s ease-in-out;
  &:active {
    transform: scale(0.95) translateZ(0px) !important;
  }

  &:hover {
    transform: scale(1.03) translateZ(0px);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const TextImg = styled.div`
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  text-align: center;

  span {
    font-size: 16px;
    font-weight: 500;
    color: #282828;
  }
`;
