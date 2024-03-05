import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  padding: 80px 0;
  justify-content: center;
  background-color: #272727;
`;

export const Content = styled.div`
  max-width: 1394px;
  height: fit-content;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 0;

  h1 {
    font-size: 36px;
    font-weight: 700;
    color: #fff;
  }

  @media (max-width: 1750px) {
    max-width: 1280px;
    gap: 50px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    max-width: 624px;
  }
  @media (max-width: 767px) {
    max-width: 350px;
    align-items: center;
  }
`;

export const LeftContent = styled.div`
  display: flex;
  flex-flow: column;
  gap: 17px;
  max-width: 300px;
  img {
    max-width: 180px;
  }

  p {
    font-size: 13px;
    font-weight: 500;
    line-height: 28px;
    color: #fff;
  }
`;
export const SocialItems = styled.div`
  width: 100%;
  display: flex;
  gap: 45px;
  align-items: center;
`;
export const ItemContent = styled.div``;
export const Slice = styled.div``;
export const Title = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: #fff;
`;
export const Items = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  gap: 7px;
`;
export const Item = styled.a`
  text-decoration: none;
  font-size: 16px;
  font-weight: 400;
  color: #e2e2e2;
`;
