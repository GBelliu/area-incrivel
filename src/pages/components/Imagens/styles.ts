import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  padding: 60px 0;
  justify-content: center;

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
  gap: 30px;

  h1 {
    color: #282828;
    span {
      color: ${(props) => props.theme.primaryColor};
    }
  }

  @media (max-width: 1750px) {
    max-width: 965px;
    gap: 50px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    max-width: 624px;
    h1 {
      text-align: center;
    }
  }
  @media (max-width: 767px) {
    max-width: 350px;
    align-items: center;
    h1 {
      text-align: center;
    }
  }
`;
export const CardsContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  gap: 25px;

  img {
    width: 100%;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:active {
      transform: scale(0.95) translateZ(0px) !important;
    }

    &:hover {
      transform: scale(1.03) translateZ(0px);
    }
  }

  @media (max-width: 1750px) {
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    display: flex;
    flex-flow: column;
  }
  @media (max-width: 767px) {
    display: flex;

    flex-flow: column;
  }
`;

export const OptionsContent = styled.div`
  display: flex;
`;

interface OptionProps {
  selected: boolean;
}
export const Option = styled.div<OptionProps>`
  width: fit-content;
  padding: 0 40px 10px 40px;
  color: #acaeb2;
  text-transform: capitalize;
  font-size: 16px;
  font-weight: 500;
  border-bottom: 2px solid #acaeb2;
  cursor: pointer;

  ${({ selected }) =>
    selected &&
    css`
      color: ${(props) => props.theme.primaryColor};
      border-bottom: 2px solid ${(props) => props.theme.primaryColor};
      font-weight: 700;
    `}
`;

export const LoadMoreButton = styled.button`
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
