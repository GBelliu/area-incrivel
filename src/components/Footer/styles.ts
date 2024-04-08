import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  padding: 80px 0;
  justify-content: center;
  background-color: #272727;

  @media (max-width: 1023px) {
    padding: 40px 0;
  }
`;

export const Content = styled.div`
  max-width: 1394px;
  height: fit-content;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0;

  h1 {
    font-size: 36px;
    font-weight: 700;
    color: #fff;
  }

  @media (max-width: 1750px) {
    max-width: 965px;
    gap: 50px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    max-width: 624px;
    gap: 30px;
    flex-flow: column;
  }
  @media (max-width: 767px) {
    max-width: 350px;

    gap: 30px;
    flex-flow: column;
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

  @media (max-width: 767px) {
    max-width: 100%;
  }
`;
export const SocialItems = styled.div`
  width: 100%;
  display: flex;
  gap: 45px;
  align-items: center;

  @media (max-width: 767px) {
    justify-content: center;
  }
`;
export const ItemContent = styled.div`
  display: flex;
  flex-flow: column;
  gap: 25px;
`;
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
