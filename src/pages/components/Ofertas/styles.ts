import styled, { css } from "styled-components";

interface ContainerProps {
  backgroundImg?: string;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  width: 100%;
  height: fit-content;
  padding: 60px 0;
  justify-content: center;
  position: relative;
  background-image: url(${({ backgroundImg }) => backgroundImg});
  background-size: cover;
  position: relative;

  @media (max-width: 1023px) {
    padding: 40px 0;
  }
`;

export const Blur = styled.div`
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(7px);
  background: rgba(0, 0, 0, 0.3);
  height: 100%;
  width: 100%;
  position: absolute;
  padding: inherit;
  top: 0;
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
  z-index: 2;
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
      font-size: 28px;
    }
  }
`;
export const CardsContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 25px;
  flex-wrap: wrap;

  @media (max-width: 1750px) {
  }
  @media (min-width: 768px) and (max-width: 1023px) {
  }
  @media (max-width: 767px) {
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

export const LeftImg = styled.div`
  position: absolute;
  bottom: -7px;
  left: 0;

  img {
    svg {
      .shirt {
        fill: red;
      }
    }
  }
`;
export const RightImg = styled.div`
  position: absolute;
  bottom: -7px;
  right: 0;

  img {
    svg {
      .shirt {
        fill: red;
      }
    }
  }
`;
