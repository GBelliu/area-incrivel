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
  background: rgba(0, 0, 0, 0.2);
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
    color: #fff;
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

  @media (max-width: 767px) {
    flex-flow: column;
    width: 100%;
    gap: 25px;
  }
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
  text-align: center;

  ${({ selected }) =>
    selected &&
    css`
      color: ${(props) => props.theme.primaryColor};
      border-bottom: 2px solid ${(props) => props.theme.primaryColor};
      font-weight: 700;
    `}

  @media (max-width: 767px) {
    width: 100%;
  }
`;

// export const LeftImg = styled.div`
//   position: absolute;
//   bottom: -7px;
//   left: 0;

//   img {
//     svg {
//       .shirt {
//         fill: red;
//       }
//     }
//   }
// `;
// export const RightImg = styled.div`
//   position: absolute;
//   bottom: -7px;
//   right: 0;

//   img {
//     svg {
//       .shirt {
//         fill: red;
//       }
//     }
//   }
// `;

export const LoadMoreButton = styled.button`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  height: fit-content;
  width: fit-content;
  padding: 15px 20px;
  background-color: ${(props) => props.theme.primaryColor};
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
